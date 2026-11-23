/** Direct, execution-led page copy. */

export const NAV_ITEMS = [
  { id: 'services', label: 'Services' },
  { id: 'work', label: 'Campaigns' },
  { id: 'approach', label: 'Our Approach' },
  { id: 'contact', label: 'Contact' },
] as const

export const AUDIENCE = [
  'Channel marketing leaders',
  'Partner marketing directors',
  'Heads of alliances',
  'Partner program leaders',
]

export const PROBLEM_DIAGNOSIS = {
  eyebrow: 'Why partner programs stall',
  headline: "Your partners signed up. So why aren't they marketing?",
  situation: 'You recruited the partners. But nothing happens after onboarding.',
  detail: "Campaigns never launch. Partners don't know what to promote. Your internal team keeps chasing reps who should already be selling.",
  points: [
    {
      num: '01',
      title: 'The portal graveyard',
      text: 'Partner portals fill with decks and battlecards. Without a ready-to-run campaign, those assets sit untouched.',
    },
    {
      num: '02',
      title: 'Sales reps, not marketers',
      text: 'Partners want to sell, but rarely have the marketing staff to write emails, build pages, or host webinars for your product.',
    },
    {
      num: '03',
      title: 'Templates do not launch themselves',
      text: 'Raw copy and customizable PDFs leave partners with more work. Campaigns need to be packaged and ready to launch.',
    },
    {
      num: '04',
      title: 'No room on your team’s calendar',
      text: 'Your internal team is focused on direct targets, leaving little time to coordinate approvals, partner reps, and follow-up.',
    },
  ],
}

export const SOLUTION_BRIDGE = {
  eyebrow: 'The partner marketing connection',
  headline: 'We become the execution engine connecting your strategy to partner sales.',
  sub: 'We do the actual work so campaigns launch, partners engage, and joint pipeline grows.',
  flow: [
    {
      step: '01',
      role: 'Your brand',
      focus: 'Strategy and priorities',
      detail: 'Product priorities, target audiences, and growth goals.',
      type: 'base',
    },
    {
      step: '02',
      role: 'Partner Champions',
      focus: 'The execution engine',
      detail: 'We plan, write, design, coordinate, and run the campaign.',
      handoffs: ['Turn-key campaigns', 'Co-branded assets', 'Partner enablement', 'Joint webinars', 'Pipeline tracking'],
      type: 'engine',
    },
    {
      step: '03',
      role: 'Your partners',
      focus: 'Ready to activate',
      detail: 'Finished campaigns their sales reps can take to market.',
      type: 'base',
    },
    {
      step: '04',
      role: 'The market',
      focus: 'Pipeline and revenue',
      detail: 'Target customers reached through trusted partner relationships.',
      type: 'end',
    },
  ],
}

export const CAPABILITIES = {
  eyebrow: 'What we take off your plate',
  featured: {
    tag: 'Core execution',
    title: 'Turn-key partner campaigns',
    summary: 'Complete, co-branded campaigns built around a clear customer offer. Partners can launch without writing copy, building pages, or designing graphics.',
    deliverables: [
      'Multi-touch email sequences',
      'Co-branded landing pages',
      'Webinar presentations and abstracts',
      'Social promotion packs',
      'Partner campaign calendars',
    ],
  },
  pillars: [
    {
      tag: 'Demand generation',
      title: 'Co-marketing and field campaigns',
      summary: 'Joint programs that put both brands in front of target buyers. We handle partner alignment, approvals, and campaign coordination.',
    },
    {
      tag: 'Sales acceleration',
      title: 'Partner enablement and sales kits',
      summary: 'Practical tools partner reps use: battlecards, talk tracks, email snippets, and customer leave-behinds.',
    },
  ],
  support: [
    {
      title: 'Joint webinars and events',
      summary: 'Event planning, slides, promotion, and attendee follow-up.',
    },
    {
      title: 'Partner account-based marketing',
      summary: 'Shared target accounts, messaging, and coordinated outreach.',
    },
    {
      title: 'Partner activation',
      summary: 'Outreach and MDF execution to keep partners engaged.',
    },
  ],
}

export const PROCESS = [
  {
    num: '01',
    title: 'Plan',
    verb: 'Align priorities',
    description: 'Select focus partners, agree on commercial goals, and shape the customer offer.',
  },
  {
    num: '02',
    title: 'Build',
    verb: 'Create campaigns',
    description: 'Produce co-branded copy, landing pages, webinar slides, and partner sales kits.',
  },
  {
    num: '03',
    title: 'Launch',
    verb: 'Activate partners',
    description: 'Equip partner reps, coordinate outreach, and manage campaign execution.',
  },
  {
    num: '04',
    title: 'Refine',
    verb: 'Track results',
    description: 'Review participation and lead handoff, then improve the next campaign cycle.',
  },
]

export const BEFORE = ['Ad hoc partner requests', 'Unused portal assets', 'Campaign delays', 'No clear owner']
export const AFTER = ['A shared campaign calendar', 'Ready-to-use co-branded assets', 'Active partner participation', 'Managed execution']

/** Legacy copy retained for the unused Expertise component. */
export type ExpertisePillar = { num: string; title: string; summary: string }
export const EXPERTISE_PILLARS: ExpertisePillar[] = [
  { num: '01', title: 'Partner ecosystem experience', summary: 'We align vendor priorities, partner goals, and customer needs.' },
  { num: '02', title: 'Frictionless partner execution', summary: 'We prepare campaigns partners can take to market with little lift.' },
  { num: '03', title: 'Hands-on ownership', summary: 'We produce the assets, coordinate partners, and manage follow-up.' },
]
export const EXPERTISE_AREAS = CAPABILITIES.support.map((item) => item.title)
