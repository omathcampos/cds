import { supabase } from '../lib/supabase.js'

export async function signIn(email, password) {
  const { data, error } = await supabase.auth.signInWithPassword({ email, password })
  if (error) throw error
  return data
}

export async function signOut() {
  await supabase.auth.signOut()
}

export async function getSession() {
  const { data } = await supabase.auth.getSession()
  return data.session
}

export function requireAuth(onUnauthenticated) {
  supabase.auth.getSession().then(({ data }) => {
    if (!data.session) {
      onUnauthenticated()
    }
  })
}
