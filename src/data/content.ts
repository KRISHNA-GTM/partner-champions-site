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

/** Section 2: the practical problems a partner program runs into. */
export const CHALLENGES = [
  {
    title: "Partners don't know what to promote",
    text: 'They signed up, but there is no clear message, offer or campaign for them to take to their customers.',
  },
  {
    title: 'Campaigns are hard for partners to run',
    text: 'Most partners have small marketing teams. If a campaign needs work from them, it waits.',
  },
  {
    title: 'Engagement is uneven',
    text: 'A few partners do most of the marketing. The rest stay quiet between quarterly calls.',
  },
  {
    title: 'Assets sit unused',
    text: 'Decks, one-pagers and templates are in the portal. Few partners open them, fewer send them.',
  },
  {
    title: 'Co-marketing has no single owner',
    text: 'Requests, approvals and funds are spread across teams, so joint campaigns stall.',
  },
  {
    title: 'Your team is stretched',
    text: 'Partner marketing needs planning and hands-on execution. Most teams only have time for one.',
  },
]

/** The flow behind the "where we fit" diagram, read top to bottom (or left to right). */
export const FLOW = [
  { label: 'Technology Brand', note: 'Your product, goals and partner program', hub: false },
  { label: 'Partner Champions', note: 'Plans the program and does the work', hub: true },
  { label: 'Partner Network', note: 'Resellers, MSPs, alliances, tech partners', hub: false },
  { label: 'Marketing Programs', note: 'Enablement, kits and co-marketing', hub: false },
  { label: 'Campaigns', note: 'Co-branded, ABM, events, outreach', hub: false },
  { label: 'Customer Engagement', note: 'Buyers reached through partners they trust', hub: false },
  { label: 'Growth', note: 'Partner-sourced and influenced pipeline', hub: false },
]

export type Service = {
  num: string
  title: string
  /** What the buyer should understand this service is, in one line. */
  summary: string
  deliverables: string[]
}

export const SERVICES: Service[] = [
  {
    num: '01',
    title: 'Partner Enablement',
    summary: 'Give partners the messaging, assets and tools they need to sell your product with confidence.',
    deliverables: ['Partner playbooks', 'Messaging guides', 'Sales enablement materials', 'Partner-ready content'],
  },
  {
    num: '02',
    title: 'Partner Campaigns',
    summary: 'Campaigns partners can join and launch without starting from scratch.',
    deliverables: ['Campaign planning', 'Email programs', 'Campaign kits and assets', 'Follow-up workflows'],
  },
  {
    num: '03',
    title: 'Account-Based Marketing',
    summary: 'Your sales team and your partners working the same priority accounts, with one message.',
    deliverables: ['Target account selection', 'Account-specific messaging', 'Partner alignment', 'Coordinated outreach'],
  },
  {
    num: '04',
    title: 'Webinars & Events',
    summary: 'Events that educate buyers and give partners a reason to invite their customers.',
    deliverables: ['Event strategy', 'Registration campaigns', 'Partner invitations', 'Post-event follow-up'],
  },
  {
    num: '05',
    title: 'Co-Marketing & Content',
    summary: 'Campaigns and assets built with both brands on them, ready for partners to use.',
    deliverables: ['Co-branded assets', 'Landing pages', 'Social campaigns', 'Joint email campaigns'],
  },
  {
    num: '06',
    title: 'Direct Engagement Programs',
    summary: 'Outreach to the specific partner or customer audiences you need to reach, run for you.',
    deliverables: ['Targeted outreach', 'Email sequences', 'Partner engagement initiatives', 'Follow-up programs'],
  },
]

export const PROCESS = [
  {
    num: '01',
    title: 'Discover',
    description: 'We learn your program: partners, goals, target accounts, and what has or has not worked so far.',
    deliverables: ['Partner program review', 'Audience and account map', 'Quick-win shortlist'],
  },
  {
    num: '02',
    title: 'Strategize',
    description: 'We turn what we learned into a focused plan with priorities, owners and a calendar.',
    deliverables: ['Partner marketing plan', 'Messaging framework', 'Campaign calendar'],
  },
  {
    num: '03',
    title: 'Activate',
    description: 'We build and run the work: campaigns, partner kits, events and outreach.',
    deliverables: ['Campaign assets and kits', 'Launched programs', 'Partner communications'],
  },
  {
    num: '04',
    title: 'Optimize',
    description: 'We review what partners used and what it produced, then adjust the next round.',
    deliverables: ['Performance review', 'Partner feedback', 'Next-quarter plan'],
  },
]

/** Qualitative outcomes, written as a shift from today to where better partner marketing takes you. */
export const OUTCOMES = [
  {
    title: 'Partner engagement',
    from: 'A few partners carry most of the marketing',
    to: 'More partners take part, campaign after campaign',
  },
  {
    title: 'Campaign coordination',
    from: 'Partners run disconnected one-off activity',
    to: 'Campaigns planned together, on one calendar',
  },
  {
    title: 'Asset utilization',
    from: 'Content sits in the partner portal',
    to: 'Kits partners actually open, co-brand and send',
  },
  {
    title: 'Partner participation',
    from: 'Partners wait to be told what to do',
    to: 'Partners know the plan and their part in it',
  },
  {
    title: 'Audience reach',
    from: 'Your message stops at your own lists',
    to: "Your message reaches your partners' customers",
  },
  {
    title: 'Execution',
    from: 'Plans that stall between teams',
    to: 'Programs launched on schedule, with one owner',
  },
]
