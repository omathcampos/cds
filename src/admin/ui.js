function removeModal(id) {
  document.getElementById(id)?.remove()
}

export function showConfirm(title, body, confirmLabel = 'Confirmar', danger = false) {
  return new Promise(resolve => {
    removeModal('cds-confirm-modal')

    const confirmClass = danger
      ? 'px-4 py-2 rounded-full text-xs font-semibold bg-red-900/40 border border-red-700/50 text-red-400 hover:bg-red-900/60 transition-colors'
      : 'btn-gold px-4 py-2 rounded-full text-xs font-semibold'

    document.body.insertAdjacentHTML('beforeend', `
      <div id="cds-confirm-modal" style="position:fixed;inset:0;z-index:9999;display:flex;align-items:center;justify-content:center;padding:1rem;">
        <div style="position:absolute;inset:0;background:rgba(26,43,73,0.85);backdrop-filter:blur(6px);" id="cds-confirm-backdrop"></div>
        <div style="position:relative;background:#1a2b49;border:1px solid rgba(201,164,96,0.2);border-radius:1rem;max-width:22rem;width:100%;padding:1.5rem;box-shadow:0 25px 50px rgba(0,0,0,0.6);">
          <h3 style="font-family:'Playfair Display',serif;font-size:1.125rem;font-weight:700;color:#FAF8F4;margin-bottom:0.5rem;">${title}</h3>
          ${body ? `<p style="font-size:0.8125rem;color:rgba(244,241,237,0.55);line-height:1.5;margin-bottom:1.25rem;">${body}</p>` : '<div style="margin-bottom:1rem;"></div>'}
          <div style="display:flex;gap:0.5rem;justify-content:flex-end;">
            <button id="cds-confirm-cancel" style="padding:0.5rem 1rem;border-radius:9999px;font-size:0.75rem;font-weight:500;border:1px solid rgba(201,164,96,0.15);color:rgba(244,241,237,0.5);background:transparent;cursor:pointer;transition:all 0.2s;">
              Cancelar
            </button>
            <button id="cds-confirm-ok" class="${confirmClass}">
              ${confirmLabel}
            </button>
          </div>
        </div>
      </div>
    `)

    const ok = () => { removeModal('cds-confirm-modal'); resolve(true) }
    const cancel = () => { removeModal('cds-confirm-modal'); resolve(false) }

    document.getElementById('cds-confirm-ok').addEventListener('click', ok)
    document.getElementById('cds-confirm-cancel').addEventListener('click', cancel)
    document.getElementById('cds-confirm-backdrop').addEventListener('click', cancel)
  })
}

export function showAlert(message) {
  return new Promise(resolve => {
    removeModal('cds-alert-modal')

    document.body.insertAdjacentHTML('beforeend', `
      <div id="cds-alert-modal" style="position:fixed;inset:0;z-index:9999;display:flex;align-items:center;justify-content:center;padding:1rem;">
        <div style="position:absolute;inset:0;background:rgba(26,43,73,0.85);backdrop-filter:blur(6px);"></div>
        <div style="position:relative;background:#1a2b49;border:1px solid rgba(201,96,96,0.3);border-radius:1rem;max-width:22rem;width:100%;padding:1.5rem;box-shadow:0 25px 50px rgba(0,0,0,0.6);">
          <p style="font-size:0.875rem;color:rgba(244,241,237,0.75);line-height:1.5;margin-bottom:1.25rem;">${message}</p>
          <div style="display:flex;justify-content:flex-end;">
            <button id="cds-alert-ok" class="btn-gold px-4 py-2 rounded-full text-xs font-semibold">OK</button>
          </div>
        </div>
      </div>
    `)

    document.getElementById('cds-alert-ok').addEventListener('click', () => {
      removeModal('cds-alert-modal')
      resolve()
    })
  })
}
