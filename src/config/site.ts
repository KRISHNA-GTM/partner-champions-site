/**
 * Central site configuration.
 *
 * SCHEDULING_URL: the booking link every "book a call" CTA uses.
 *   - Set it to a Calendly (or any booking) URL and the CTAs open it in a new tab.
 *   - Set it to '' and the CTAs open the contact dialog with the email address instead.
 */
export const SCHEDULING_URL = 'https://calendly.com/jen-saasnova/'

export const CONTACT_EMAIL = 'sales@partnerchampions.com'

export const COMPANY_NAME = 'Partner Champions LLC'

export const TAGLINE = 'Partner marketing that drives revenue, not just activity.'

/**
 * Social profiles. Leave a value empty to hide it; nothing renders until a real URL is set.
 */
export const SOCIAL_LINKS: { label: string; href: string }[] = [
  { label: 'LinkedIn', href: '' },
]
