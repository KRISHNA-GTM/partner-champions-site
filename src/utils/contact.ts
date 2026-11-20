import { CONTACT_EMAIL, SCHEDULING_URL } from '../config/site'

export const hasScheduler = SCHEDULING_URL.trim().length > 0

export function mailtoHref(subject = 'Partner marketing conversation', body = ''): string {
  const params = new URLSearchParams()
  params.set('subject', subject)
  if (body) params.set('body', body)
  // URLSearchParams encodes spaces as "+", which some mail clients show literally.
  return `mailto:${CONTACT_EMAIL}?${params.toString().replace(/\+/g, '%20')}`
}
