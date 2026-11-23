/**
 * Page content. Edit copy here; components render whatever these arrays contain.
 * Sell the relief first; the service name comes second.
 */

export const NAV_ITEMS = [
  { id: 'services', label: 'Services' },
  { id: 'work', label: 'Campaigns' },
  { id: 'approach', label: 'Our Approach' },
] as const

export const AUDIENCE = [
  'Channel marketing leaders',
  'Partner marketing directors',
  'Heads of alliances',
  'Partner program leaders',
]

/** Why partner programs stall. Highly recognizable bottlenecks partner leaders face daily. */
export const CHALLENGES = [
  {
    title: 'The portal graveyard',
    text: 'You loaded the partner portal with decks, battlecards and one-pagers. Nobody logs in. Without a turn-key campaign, assets sit untouched while partners sell whatever is easiest.',
  },
  {
    title: 'Partners have sales reps, not marketers',
    text: "Partners want closed deals, but have zero marketing staff to write sequences, spin up landing pages, or host webinars for your product. They can't build campaigns from scratch.",
  },
  {
    title: 'Templates never run themselves',
    text: 'Handing partners "customizable PDFs" or raw email copy leads to execution paralysis. Unless a campaign is packaged, co-branded and ready to launch, it never reaches buyers.',
  },
  {
    title: 'Internal team bandwidth bottleneck',
    text: 'Your internal team is fully booked hitting direct sales targets. Nobody has the dedicated hours to chase partner reps, coordinate joint approvals and manage campaign follow-up.',
  },
]

/** Who does what. A responsibility diagram, read left to right. */
export const FLOW = [
  { label: 'Your team', note: 'Goals, product priorities and partner strategy', tone: 'base' },
  { label: 'Partner Champions', note: 'We plan, create, coordinate and execute', tone: 'hub' },
  { label: 'Your partners', note: 'Ready-to-use campaigns they take to market', tone: 'base' },
  { label: 'Your market', note: 'Customers reached through partners they trust', tone: 'end' },
] as const

/** What the hub takes off your plate */
export const FLOW_HANDOFF = [
  'Turn-key campaigns',
  'Co-branded assets',
  'Partner outreach & enablement',
  'Joint events & webinars',
  'Pipeline follow-up',
]

export type ServiceIcon = 'enable' | 'campaign' | 'abm' | 'event' | 'cobrand' | 'direct'

export type Service = {
  icon: ServiceIcon
  need: string
  title: string
  summary: string
}

/** Lead with what the buyer needs; the service name is the label. */
export const SERVICES: Service[] = [
  {
    icon: 'campaign',
    need: 'Get your partners marketing',
    title: 'Partner Campaigns',
    summary: 'Ready-to-run campaigns partners launch without building anything.',
  },
  {
    icon: 'enable',
    need: 'Give partners the tools to sell',
    title: 'Partner Enablement',
    summary: 'Messaging, playbooks and sales kits partners actually use.',
  },
  {
    icon: 'cobrand',
    need: 'Market with your partners',
    title: 'Co-Marketing & Demand Generation',
    summary: 'Content and campaigns that put both brands in front of customers.',
  },
  {
    icon: 'abm',
    need: 'Reach priority accounts together',
    title: 'Account-Based Marketing',
    summary: 'One target list, one message, coordinated outreach.',
  },
  {
    icon: 'event',
    need: 'Bring partners and customers together',
    title: 'Webinars & Events',
    summary: 'Joint events with promotion and follow-up handled.',
  },
  {
    icon: 'direct',
    need: 'Keep your partner audience active',
    title: 'Partner Engagement',
    summary: 'Targeted outreach that keeps partners involved between campaigns.',
  },
]

/** A progression, not another services list */
export const PROCESS = [
  {
    num: '01',
    title: 'Discover',
    verb: 'Understand',
    description: "What's happening today? Which partners are worth activating? Where are the gaps?",
  },
  {
    num: '02',
    title: 'Strategize',
    verb: 'Prioritize',
    description: 'Which partners, campaigns, audiences and programs deserve attention first.',
  },
  {
    num: '03',
    title: 'Activate',
    verb: 'Execute',
    description: 'Build the assets, launch the campaigns, coordinate partners and get activity moving.',
  },
  {
    num: '04',
    title: 'Optimize',
    verb: 'Improve',
    description: 'Review participation, engagement and results. Refine the next campaign.',
  },
]

/** Before and after. Describes the work we control, not results we can't prove. */
export const BEFORE = ['Ad hoc requests', 'Unused assets', 'Campaign delays', 'No clear owner']
export const AFTER = ['A shared campaign calendar', 'Ready-to-use assets', 'Partners taking part', 'Managed execution']

export type ExpertisePillar = {
  num: string
  title: string
  summary: string
}

/** Core differentiators that set Partner Champions apart from traditional marketing agencies */
export const EXPERTISE_PILLARS: ExpertisePillar[] = [
  {
    num: '01',
    title: 'Ecosystem dynamics, not direct demand gen',
    summary:
      'General agencies treat partner marketing like standard outbound. We understand the three-way ecosystem: aligning vendor priorities, partner commercial goals, and end-customer trust without creating channel conflict.',
  },
  {
    num: '02',
    title: 'Frictionless execution for your partners',
    summary:
      'Partners carry multiple solutions and prioritize what is easiest to close. We deliver turn-key, co-branded campaigns their sales reps can launch in five minutes without asking their internal team for marketing help.',
  },
  {
    num: '03',
    title: 'Hands-on execution ownership',
    summary:
      'We do not hand you a strategy deck and walk away. We write the copy, produce the assets, coordinate with partner leads, manage event logistics, and ensure follow-up turns into pipeline.',
  },
]

/** Expertise capability areas */
export const EXPERTISE_AREAS = [
  'Partner Co-Marketing Campaigns',
  'Turn-Key Sales Kits & Talk Tracks',
  'Joint Webinars & Partner Events',
  'Account-Based Co-Marketing (ABM)',
  'MDF Allocation & Campaign Execution',
  'Partner Activation & Re-Engagement',
]

/** Retained for compatibility */
export const EXPERTISE = EXPERTISE_AREAS
