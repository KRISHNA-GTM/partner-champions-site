import { PROCESS } from '../../data/content'
import { SectionHeading } from '../ui/SectionHeading'
import './Approach.css'

export function Approach() {
  return (
    <section id="approach" className="approach section" aria-labelledby="approach-title">
      <div className="container approach__inner">
        <SectionHeading
          id="approach-title"
          title="How a campaign gets done."
          lead="You set the priorities and approve the work. We handle everything in between."
        />

        <table className="steps">
          <thead>
            <tr>
              <th scope="col">Stage</th>
              <th scope="col">What happens</th>
              <th scope="col">What you get</th>
            </tr>
          </thead>
          <tbody>
            {PROCESS.map((p, i) => (
              <tr key={p.title}>
                <th scope="row">
                  <span aria-hidden="true">{i + 1}</span>
                  {p.title}
                </th>
                <td>{p.what}</td>
                <td className="steps__get">{p.get}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
