/**
 * Page content. Edit copy here; components render whatever these arrays contain.
 */

export const NAV_ITEMS = [
  { id: 'services', label: 'Services' },
  { id: 'approach', label: 'Our Approach' },
  { id: 'resources', label: 'Resources' },
  { id: 'about', label: 'About' },
] as const

export type ServiceVisual = 'enablement' | 'campaigns' | 'abm' | 'events' | 'comarketing' | 'direct'

export type Service = {
  num: string
  title: string
  description: string
  cta: string
  visual: ServiceVisual
}

export const SERVICES: Service[] = [
  {
    num: '01',
    title: 'Partner Enablement',
    description:
      'Equip partners with the knowledge, messaging, content, and resources they need to confidently represent and sell your solutions.',
    cta: 'Plan partner enablement',
    visual: 'enablement',
  },
  {
    num: '02',
    title: 'Partner Campaigns',
    description:
      'Develop targeted marketing programs that drive engagement, create demand, and help partners generate new opportunities.',
    cta: 'Scope a partner campaign',
    visual: 'campaigns',
  },
  {
    num: '03',
    title: 'Account-Based Marketing',
    description:
      'Align partners and sales teams around priority accounts with targeted messaging and coordinated marketing activities.',
    cta: 'Talk target accounts',
    visual: 'abm',
  },
  {
    num: '04',
    title: 'Webinars & Events',
    description:
      'Create virtual and in-person experiences that educate audiences, build connections, and generate opportunities.',
    cta: 'Plan an event',
    visual: 'events',
  },
  {
    num: '05',
    title: 'Co-Marketing & Content',
    description:
      'Create co-branded assets, partner-ready content, messaging, and marketing materials that simplify execution.',
    cta: 'Discuss co-marketing',
    visual: 'comarketing',
  },
  {
    num: '06',
    title: 'Direct Engagement Programs',
    description:
      'Build targeted outreach and engagement programs that connect your brand, partners, and customers.',
    cta: 'Build an outreach program',
    visual: 'direct',
  },
]

export type EcoNodeId = 'brand' | 'hub' | 'partners' | 'programs' | 'campaigns' | 'customers' | 'growth'

export type EcoNode = {
  id: EcoNodeId
  label: string
  role: string
  description: string
  /** Positions in percent of the diagram box: [desktop, mobile] */
  pos: { desktop: [number, number]; mobile: [number, number] }
}

export const ECO_NODES: EcoNode[] = [
  {
    id: 'brand',
    label: 'Technology Brand',
    role: 'Where it starts',
    description:
      'Your product, your positioning and the goals of your partner program. The work starts with what partners need to sell, and to whom.',
    pos: { desktop: [8, 50], mobile: [50, 5] },
  },
  {
    id: 'hub',
    label: 'Partner Champions',
    role: 'The connector',
    description:
      'We sit between your team and your partners. We plan the programs, build the assets and run the campaigns so partners can act on them.',
    pos: { desktop: [27, 50], mobile: [50, 22] },
  },
  {
    id: 'partners',
    label: 'Partner Network',
    role: 'Who sells with you',
    description:
      'Resellers, alliances, MSPs and technology partners. Each one needs messaging and tools that fit the way it already sells.',
    pos: { desktop: [49, 16], mobile: [31, 41] },
  },
  {
    id: 'programs',
    label: 'Marketing Programs',
    role: 'What partners use',
    description:
      'Enablement tracks, co-marketing plans and partner content, packaged so partners can use them without a long ramp.',
    pos: { desktop: [49, 50], mobile: [68, 50] },
  },
  {
    id: 'campaigns',
    label: 'Campaigns',
    role: 'What goes to market',
    description:
      'Co-branded campaigns, ABM plays, webinars and outreach, run together with partners against shared target accounts.',
    pos: { desktop: [49, 84], mobile: [31, 59] },
  },
  {
    id: 'customers',
    label: 'Customer Engagement',
    role: 'Who you reach',
    description:
      'Buyers meet your solution through a partner they already trust, with the same message from first touch to first meeting.',
    pos: { desktop: [71, 50], mobile: [50, 77] },
  },
  {
    id: 'growth',
    label: 'Growth',
    role: 'What it adds up to',
    description:
      'Pipeline and revenue that partners source or influence, plus the insight to decide where to invest next. That insight feeds back into the plan.',
    pos: { desktop: [92, 50], mobile: [50, 94] },
  },
]

export const ECO_EDGES: { from: EcoNodeId; to: EcoNodeId; loop?: boolean }[] = [
  { from: 'brand', to: 'hub' },
  { from: 'hub', to: 'partners' },
  { from: 'hub', to: 'programs' },
  { from: 'hub', to: 'campaigns' },
  { from: 'programs', to: 'partners' },
  { from: 'partners', to: 'customers' },
  { from: 'programs', to: 'customers' },
  { from: 'campaigns', to: 'customers' },
  { from: 'customers', to: 'growth' },
  { from: 'growth', to: 'brand', loop: true },
]

export const PROCESS = [
  {
    num: '01',
    title: 'Discover',
    description:
      'Understand your partner ecosystem, business objectives, audience, challenges, and opportunities.',
    focus: ['Partner landscape', 'Business objectives', 'Audience and accounts', 'Gaps and quick wins'],
  },
  {
    num: '02',
    title: 'Strategize',
    description: 'Build a focused marketing plan around your goals, partners, priorities, and resources.',
    focus: ['Program priorities', 'Partner mix', 'Plan and calendar'],
  },
  {
    num: '03',
    title: 'Activate',
    description: 'Execute campaigns, content, engagement, enablement, and marketing initiatives.',
    focus: ['Campaigns', 'Content and kits', 'Events and webinars', 'Partner outreach'],
  },
  {
    num: '04',
    title: 'Optimize',
    description: 'Review performance, identify insights, improve execution, and refine what works.',
    focus: ['Performance review', 'Partner feedback', 'Next-quarter plan'],
  },
]

export type OutcomeGlyph = 'engagement' | 'performance' | 'reach' | 'demand' | 'content' | 'execution'

export const OUTCOMES: { title: string; line: string; glyph: OutcomeGlyph }[] = [
  {
    title: 'Partner Engagement',
    line: 'Partners who open the kit, join the campaign and come back for the next one.',
    glyph: 'engagement',
  },
  {
    title: 'Campaign Performance',
    line: 'Campaigns judged by the meetings and opportunities they create with partners.',
    glyph: 'performance',
  },
  {
    title: 'Audience Reach',
    line: 'Your message in front of the accounts your partners already know and serve.',
    glyph: 'reach',
  },
  {
    title: 'Demand Generation',
    line: 'Leads and opportunities partners can act on, each with a clear owner.',
    glyph: 'demand',
  },
  {
    title: 'Content Activation',
    line: 'Assets partners actually send, because they are co-branded and easy to find.',
    glyph: 'content',
  },
  {
    title: 'Marketing Execution',
    line: 'Programs launched on schedule, with one team accountable for each step.',
    glyph: 'execution',
  },
]

export type Resource = {
  id: string
  title: string
  tag: string
  summary: string
  points: { title: string; text: string }[]
  art: 'revenue' | 'comarketing' | 'enablement'
}

/** Draft article concepts. Not yet published; the cards say so. */
export const RESOURCES: Resource[] = [
  {
    id: 'engagement-to-revenue',
    title: '5 Ways to Turn Partner Engagement Into Revenue',
    tag: 'Partner Engagement',
    summary:
      'Engagement only matters once it reaches pipeline. Five practical moves for connecting partner activity to opportunities your sales team can see.',
    points: [
      { title: 'Tie each program to a pipeline stage', text: 'Know which stage a webinar, a kit or an incentive is meant to move.' },
      { title: 'Start from shared target accounts', text: 'Map your priority accounts against partner customer bases before you build a campaign.' },
      { title: 'Make the next step obvious', text: 'Every asset ends with one action a partner can take that week.' },
      { title: 'Track sourced and influenced separately', text: 'Both matter, and blending them hides which programs work.' },
      { title: 'Review results with partners', text: 'Share the numbers each quarter and plan the next one together.' },
    ],
    art: 'revenue',
  },
  {
    id: 'easier-comarketing',
    title: 'Making Co-Marketing Easier for Your Partners',
    tag: 'Co-Marketing',
    summary:
      'Many partners want to co-market and stall at the effort it takes. How to package campaigns partners can launch with little lift.',
    points: [
      { title: 'Campaign-in-a-box kits', text: 'Emails, social posts, a landing page and a follow-up sequence, ready to co-brand.' },
      { title: 'Templates with clear brand rules', text: 'Partners add their logo and offer without waiting on a design team.' },
      { title: 'A short approval path', text: 'One request form and one owner, so a campaign does not sit in a queue.' },
      { title: 'One point of contact', text: 'Partners know who to ask when something does not fit their market.' },
    ],
    art: 'comarketing',
  },
  {
    id: 'enablement-that-gets-used',
    title: 'Building a Partner Enablement Strategy That Actually Gets Used',
    tag: 'Enablement',
    summary:
      'Partner portals fill up with content nobody opens. A look at enablement built around how partner sellers spend their day.',
    points: [
      { title: "Start from the partner seller's week", text: 'Build for the moments they need help: first call, demo, proposal.' },
      { title: 'Short formats first', text: 'One-pagers, talk tracks and battlecards before long courses.' },
      { title: 'Refresh on a schedule', text: 'Retire outdated assets so partners trust what they find.' },
      { title: 'Measure use, not uploads', text: 'Track which assets partners open and send, then build more of those.' },
      { title: 'Pair content with live sessions', text: 'A short live walkthrough shows partners when and how to use each asset.' },
    ],
    art: 'enablement',
  },
]
