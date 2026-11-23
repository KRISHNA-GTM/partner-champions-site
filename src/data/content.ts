/** All page copy. Plain, specific, execution-led. No em dashes. */

export const NAV_ITEMS = [
  { id: 'services', label: 'Services' },
  { id: 'work', label: 'Sample campaign' },
  { id: 'approach', label: 'How we work' },
  { id: 'contact', label: 'Contact' },
] as const

export const GAP = {
  headline: 'Your partners signed up. So why aren’t they marketing?',
  lead: 'Partner programs rarely stall for lack of interest. They stall because nobody turns your strategy into campaigns a partner can actually send.',
  points: [
    {
      title: 'Assets sit in the portal',
      text: 'Decks and battlecards get uploaded. Without a campaign around them, nobody uses them.',
    },
    {
      title: 'Reps, not marketers',
      text: 'Most partners have reps, not marketers who can write emails, build pages or run webinars.',
    },
    {
      title: 'Templates still need work',
      text: 'An editable PDF is a to-do list for a partner. A finished campaign gets launched.',
    },
    {
      title: 'Your team has no time',
      text: 'Direct targets come first, so partner approvals and follow-up slip every quarter.',
    },
  ],
}

export const ENGINE = {
  headline: 'We do the work in the middle.',
  nodes: [
    {
      key: 'brand',
      role: 'You',
      text: 'Set the priorities: which products, which partners, which buyers.',
    },
    {
      key: 'engine',
      role: 'Partner Champions',
      text: 'Plan, write, design, coordinate and run the campaign.',
      chips: ['Campaign plan', 'Co-branded assets', 'Partner sales kits', 'Joint webinars', 'Lead handoff'],
    },
    {
      key: 'partner',
      role: 'Your partners',
      text: 'Review, approve and send it to their customers.',
    },
  ],
  outcome: 'Campaigns your partners actually take to market, and joint pipeline you can see.',
}

export const SERVICES = {
  headline: 'Three ways we take partner marketing off your plate.',
  items: [
    {
      key: 'campaigns',
      title: 'Partner campaigns',
      summary: 'A complete, co-branded campaign built around one clear customer offer. Partners launch it without writing a word.',
      deliverables: ['Email sequences in the partner’s voice', 'Co-branded landing pages', 'Social posts and graphics', 'Campaign calendar'],
    },
    {
      key: 'comarketing',
      title: 'Co-marketing and demand generation',
      summary: 'Joint programs that put both brands in front of the same target buyers, with alignment and approvals handled for you.',
      deliverables: ['Joint webinars and events', 'Shared target account lists', 'Coordinated outreach', 'MDF campaign execution'],
    },
    {
      key: 'enablement',
      title: 'Partner enablement and sales kits',
      summary: 'The practical material partner reps open before a call, so they can sell your product with confidence.',
      deliverables: ['Talk tracks and discovery questions', 'Battlecards', 'Objection handling', 'Customer leave-behinds'],
    },
  ],
}

export const CAMPAIGN = {
  headline: 'One offer. Everything a partner needs to launch it.',
  lead: 'This is the Cloud Cost Review campaign, the kind of package we build. Your partner gets the whole thing finished, not a template to fill in.',
  offer: {
    name: 'Free cloud cost review',
    detail: 'A 90-day savings plan for mid-market teams, offered jointly by Your Brand and Partner ahead of renewal season.',
  },
  plan: [
    { when: 'Week 1', what: 'Partner briefing and sales kit' },
    { when: 'Week 2', what: 'Email 1, landing page and social go live' },
    { when: 'Week 3', what: 'Joint webinar' },
    { when: 'Week 4', what: 'Follow-up and last-call emails' },
    { when: 'Ongoing', what: 'Leads routed to partner reps' },
  ],
  partnerJob: 'The partner’s job: review it, approve it, send it.',
}

export const PROCESS = [
  { title: 'Plan', what: 'Agree on focus partners, target buyers and the customer offer.', get: 'Campaign brief' },
  { title: 'Build', what: 'Write and design every asset, co-branded and approved.', get: 'Ready-to-launch kit' },
  { title: 'Launch', what: 'Brief partner reps, coordinate sends and run the webinar.', get: 'Live campaign' },
  { title: 'Refine', what: 'Review participation and lead handoff, then improve.', get: 'Next campaign plan' },
]

/** Legacy copy retained for the unused Expertise component. */
export type ExpertisePillar = { num: string; title: string; summary: string }
export const EXPERTISE_PILLARS: ExpertisePillar[] = [
  { num: '01', title: 'Partner ecosystem experience', summary: 'We align vendor priorities, partner goals, and customer needs.' },
  { num: '02', title: 'Frictionless partner execution', summary: 'We prepare campaigns partners can take to market with little lift.' },
  { num: '03', title: 'Hands-on ownership', summary: 'We produce the assets, coordinate partners, and manage follow-up.' },
]
export const EXPERTISE_AREAS = ['Joint webinars and events', 'Partner account-based marketing', 'Partner activation']
