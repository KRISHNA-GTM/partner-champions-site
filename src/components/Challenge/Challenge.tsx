import { ENGINE, GAP } from '../../data/content'
import { SectionHeading } from '../ui/SectionHeading'
import './Challenge.css'

export function Challenge() {
  return (
    <section id="challenge" className="gap section" aria-labelledby="gap-title">
      <div className="container">
        <SectionHeading id="gap-title" title={GAP.headline} lead={GAP.lead} layout="split" />

        <ul className="gap__points" aria-label="Where partner marketing breaks down">
          {GAP.points.map((p) => (
            <li key={p.title}>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </li>
          ))}
        </ul>

        <div className="engine on-dark" aria-labelledby="engine-title">
          <h3 id="engine-title" className="engine__title">{ENGINE.headline}</h3>

          <ol className="engine__flow">
            {ENGINE.nodes.map((n) => (
              <li key={n.key} className={`engine__node engine__node--${n.key}`}>
                <span className="engine__mark" aria-hidden="true" />
                <strong>{n.role}</strong>
                <p>{n.text}</p>
                {n.chips && (
                  <ul className="engine__chips" aria-label="What Partner Champions handles">
                    {n.chips.map((c) => <li key={c}>{c}</li>)}
                  </ul>
                )}
              </li>
            ))}
          </ol>

          <p className="engine__outcome">
            <span>The result</span>
            {ENGINE.outcome}
          </p>
        </div>
      </div>
    </section>
  )
}
