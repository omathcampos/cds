import { supabase } from '../lib/supabase.js'

const BUCKET = 'product-images'
const MAX_SIZE_MB = 5
const MAX_PX = 800
const QUALITY = 0.85
const ALLOWED_TYPES = ['image/jpeg', 'image/png', 'image/webp']

function validateFile(file) {
  if (!ALLOWED_TYPES.includes(file.type)) {
    throw new Error(`Tipo inválido. Use JPEG, PNG ou WebP.`)
  }
  if (file.size > MAX_SIZE_MB * 1024 * 1024) {
    throw new Error(`Arquivo muito grande. Máximo ${MAX_SIZE_MB}MB.`)
  }
}

async function compressImage(file) {
  return new Promise((resolve, reject) => {
    const img = new Image()
    const url = URL.createObjectURL(file)
    img.onload = () => {
      URL.revokeObjectURL(url)
      const scale = Math.min(1, MAX_PX / Math.max(img.width, img.height))
      const w = Math.round(img.width * scale)
      const h = Math.round(img.height * scale)
      const canvas = document.createElement('canvas')
      canvas.width = w
      canvas.height = h
      const ctx = canvas.getContext('2d')
      ctx.drawImage(img, 0, 0, w, h)
      canvas.toBlob(blob => {
        if (!blob) return reject(new Error('Falha ao comprimir imagem'))
        resolve(blob)
      }, 'image/jpeg', QUALITY)
    }
    img.onerror = () => reject(new Error('Falha ao carregar imagem'))
    img.src = url
  })
}

export async function uploadImage(file) {
  validateFile(file)
  const blob = await compressImage(file)
  const ext = 'jpg'
  const filename = `${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`

  const { error } = await supabase.storage
    .from(BUCKET)
    .upload(filename, blob, { contentType: 'image/jpeg', upsert: false })

  if (error) throw error

  const { data } = supabase.storage.from(BUCKET).getPublicUrl(filename)
  return data.publicUrl
}
