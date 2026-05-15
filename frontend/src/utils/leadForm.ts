export function openLeadForm(interest?: string) {
  if (interest) {
    window.dispatchEvent(new CustomEvent('appzet:set-interest', { detail: interest }))
  }

  window.history.replaceState(null, '', '#contact')
  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
}
