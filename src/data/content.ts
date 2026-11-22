/**
 * Page content. Edit copy here; components render whatever these arrays contain.
 */

export const NAV_ITEMS = [
  { id: 'services', label: 'Services' },
  { id: 'work', label: 'Our Work' },
  { id: 'approach', label: 'How We Work' },
  { id: 'outcomes', label: 'Outcomes' },
] as const

export const AUDIENCE = [
  'Channel marketing leaders',
  'Partner marketing directors',
  'Heads of alliances',
  'Partner program leaders',
]

/** Why partner programs stall. Short on purpose: one line each. */
export const CHALLENGES = [
  {
    title: "Partners don't know what to promote",
    text: 'No clear message, offer or campaign to take to their customers.',
  },
  {
    title: 'Campaigns need work partners cannot do',
    text: 'Most partners have a small marketing team, or none at all.',
  },
  {
    title: 'Assets sit unused in the portal',
    text: 'Decks and templates get downloaded, rarely sent.',
  },
  {
    title: 'Nobody owns co-marketing',
    text: 'Requests, approvals and funds bounce between teams.',
  },
]

/** The "where we fit" diagram, read top to bottom. */
export const FLOW = [
  { label: 'Your brand', note: 'Product, goals and partner program', tone: 'base' },
  { label: 'Partner Champions', note: 'Plans, builds and runs your partner marketing', tone: 'hub' },
  { label: 'Your partners', note: 'Resellers, MSPs, SIs and alliances', tone: 'base' },
  { label: 'Their customers', note: 'Reached through partners they already trust', tone: 'base' },
  { label: 'Pipeline', note: 'Partner-sourced and partner-influenced', tone: 'end' },
] as const

/** What travels from Partner Champions to partners, shown on the hub connector. */
export const FLOW_HANDOFF = ['Campaign kits', 'Co-branded assets', 'Events', 'Outreach']

export type ServiceIcon = 'enable' | 'campaign' | 'abm' | 'event' | 'cobrand' | 'direct'

export type Service = {
  num: string
  icon: ServiceIcon
  title: string
  summary: string
  deliverables: string[]
}

export const SERVICES: Service[] = [
  {
    num: '01',
    icon: 'enable',
    title: 'Partner Enablement',
    summary: 'Messaging, playbooks and sales kits partners can pick up and use.',
    deliverables: ['Playbooks', 'Messaging guides', 'Sales kits'],
  },
  {
    num: '02',
    icon: 'campaign',
    title: 'Partner Campaigns',
    summary: 'Ready-to-run campaigns partners launch without starting from scratch.',
    deliverables: ['Campaign kits', 'Email programs', 'Follow-up'],
  },
  {
    num: '03',
    icon: 'abm',
    title: 'Account-Based Marketing',
    summary: 'You and your partners working the same priority accounts.',
    deliverables: ['Target accounts', 'Account messaging', 'Joint outreach'],
  },
  {
    num: '04',
    icon: 'event',
    title: 'Webinars & Events',
    summary: 'Joint events that give partners a reason to invite their customers.',
    deliverables: ['Event plan', 'Registration', 'Follow-up'],
  },
  {
    num: '05',
    icon: 'cobrand',
    title: 'Co-Marketing & Content',
    summary: 'Campaigns and assets with both brands on them.',
    deliverables: ['Co-branded assets', 'Landing pages', 'Social'],
  },
  {
    num: '06',
    icon: 'direct',
    title: 'Direct Engagement',
    summary: 'Outreach to the partner or customer audiences you need to reach.',
    deliverables: ['Targeted outreach', 'Email sequences', 'Partner programs'],
  },
]

export const PROCESS = [
  {
    num: '01',
    title: 'Discover',
    description: 'Review your program, partners and target accounts.',
    deliverables: ['Program review', 'Account map', 'Quick wins'],
  },
  {
    num: '02',
    title: 'Strategize',
    description: 'Agree priorities, messaging and a campaign calendar.',
    deliverables: ['Marketing plan', 'Messaging', 'Calendar'],
  },
  {
    num: '03',
    title: 'Activate',
    description: 'Build and launch the campaigns, kits and events.',
    deliverables: ['Assets and kits', 'Live campaigns', 'Partner comms'],
  },
  {
    num: '04',
    title: 'Optimize',
    description: 'Review what partners used and what it produced.',
    deliverables: ['Results review', 'Partner feedback', 'Next-quarter plan'],
  },
]

/** Qualitative outcomes. No numbers. */
export const OUTCOMES = [
  { title: 'More active partners', text: 'Partners have campaigns and materials they can put into motion.' },
  { title: 'Coordinated campaigns', text: 'Partners, sales and marketing work from one plan and one calendar.' },
  { title: 'Marketing that gets used', text: 'Kits partners open, co-brand and send.' },
  { title: 'Consistent execution', text: 'Programs launch on schedule, with one owner and clear follow-through.' },
]
