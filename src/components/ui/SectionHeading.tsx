import type { ReactNode } from 'react'

type Props = {
  id: string
  eyebrow: string
  title: ReactNode
  lead?: ReactNode
  /** split: title left, lead right (bottom-aligned). Default stacks everything. */
  layout?: 'stack' | 'split'
}

/** The one heading pattern every section uses, so eyebrows, titles and leads line up. */
export function SectionHeading({ id, eyebrow, title, lead, layout = 'stack' }: Props) {
  return (
    <header className={`section-head ${layout === 'split' ? 'section-head--split' : ''} reveal`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 id={id} className="section-title">
        {title}
      </h2>
      {lead && <p className="lead">{lead}</p>}
    </header>
  )
}
