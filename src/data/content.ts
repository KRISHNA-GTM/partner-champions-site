/** All page copy. Plain, specific, execution-led. No em dashes. */

export const NAV_ITEMS = [
  { id: 'services', label: 'Services' },
  { id: 'work', label: 'Campaigns' },
  { id: 'approach', label: 'How we work' },
  { id: 'contact', label: 'Contact' },
] as const

export const GAP = {
  headline: 'Your partners signed up. So why aren’t they marketing?',
  lead: 'You recruited the partners. But getting them to actively promote your solutions takes more than a portal full of assets.',
  points: [
    {
      title: 'Nothing to launch',
      text: 'Partners don’t know which product, offer or campaign to promote.',
    },
    {
      title: 'No marketing capacity',
      text: 'They have customers to serve and deals to close. Marketing your product isn’t their priority.',
    },
    {
      title: 'Assets without execution',
      text: 'Your team creates materials, but partners still have to adapt, assemble and send them.',
    },
    {
      title: 'Nobody owns the process',
      text: 'Planning, approvals, partner coordination and follow-up fall between teams.',
    },
  ],
}

export const ENGINE = {
  headline: 'We turn your partner strategy into campaigns partners can actually run.',
  nodes: [
    { key: 'brand', role: 'Your brand', text: 'Sets the strategy' },
    { key: 'engine', role: 'Partner Champions', text: 'Plans, builds and runs the campaigns' },
    { key: 'partner', role: 'Your partners', text: 'Take them to market' },
    { key: 'customer', role: 'Customers', text: 'Hear from a partner they trust' },
  ],
}

export const SERVICES = {
  headline: 'Three ways we take partner marketing off your plate.',
  items: [
    {
      key: 'campaigns',
      title: 'Partner campaigns',
      summary: 'We plan and build campaigns your partners can launch without starting from scratch.',
      tags: 'Campaigns, email, landing pages',
    },
    {
      key: 'comarketing',
      title: 'Co-marketing and demand generation',
      summary: 'We bring your brand and your partners together to reach shared customers and create opportunities.',
      tags: 'Joint campaigns, webinars, ABM',
    },
    {
      key: 'enablement',
      title: 'Partner enablement',
      summary: 'We give partners the messaging, materials and tools to promote and sell your solutions.',
      tags: 'Sales kits, playbooks, messaging',
    },
  ],
}

export const CAMPAIGN = {
  headline: 'One campaign. Built for partners to launch.',
  lead: 'How one offer becomes a complete, ready-to-run partner program.',
  steps: [
    { title: 'The campaign', text: 'A free cloud cost review. One clear offer partners can take to their customers.' },
    { title: 'The assets', text: 'Partner emails, landing page, social content and sales materials, all co-branded.' },
    { title: 'The launch', text: 'Partners know what to send, who to target and what to do next.' },
  ],
}

export const PROCESS = [
  { title: 'Plan', what: 'Agree on objectives, audience, partners and the offer.', get: 'Campaign brief' },
  { title: 'Build', what: 'Create the campaign assets and partner materials.', get: 'Ready-to-use campaign kit' },
  { title: 'Launch', what: 'Coordinate partners and run the campaign.', get: 'Campaign in market' },
  { title: 'Refine', what: 'Review engagement and improve.', get: 'Next campaign recommendations' },
]

/** Legacy copy retained for the unused Expertise component. */
export type ExpertisePillar = { num: string; title: string; summary: string }
export const EXPERTISE_PILLARS: ExpertisePillar[] = [
  { num: '01', title: 'Partner ecosystem experience', summary: 'We align vendor priorities, partner goals, and customer needs.' },
  { num: '02', title: 'Frictionless partner execution', summary: 'We prepare campaigns partners can take to market with little lift.' },
  { num: '03', title: 'Hands-on ownership', summary: 'We produce the assets, coordinate partners, and manage follow-up.' },
]
export const EXPERTISE_AREAS = ['Joint webinars and events', 'Partner account-based marketing', 'Partner activation']
