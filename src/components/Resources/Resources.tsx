import { useCallback, useState } from 'react'
import { RESOURCES, type Resource } from '../../data/content'
import { mailtoHref } from '../../utils/contact'
import { vars } from '../../utils/style'
import { BookingCta } from '../contact/BookingCta'
import { Modal } from '../ui/Modal'
import { ArrowRight, Mail } from '../ui/Icons'
import { ResourceArt } from './ResourceArt'
import './Resources.css'

export function Resources() {
  const [open, setOpen] = useState<Resource | null>(null)
  const close = useCallback(() => setOpen(null), [])

  return (
    <section id="resources" className="resources" aria-labelledby="resources-title">
      <div className="container">
        <header className="resources__head">
          <div className="reveal">
            <p className="eyebrow">Insights &amp; Resources</p>
            <h2 id="resources-title" className="section-title">
              Ideas that move partner marketing <span className="hl">forward.</span>
            </h2>
          </div>
          <div className="reveal" style={vars({ '--delay': '120ms' })}>
            <p className="lead">
              Practical perspectives, strategies, and insights to help you strengthen your partner ecosystem.
            </p>
            <p className="resources__status">
              <span className="pill pill--draft">In development</span> First articles in the series. Open one for a preview.
            </p>
          </div>
        </header>

        <ul className="articles">
          {RESOURCES.map((r, i) => (
            <li key={r.id} className={`article ${i === 0 ? 'article--lead' : ''} reveal`} style={vars({ '--delay': `${i * 100}ms` })}>
              <article>
                <div className="article__art">
                  <ResourceArt art={r.art} />
                </div>
                <div className="article__body">
                  <div className="article__meta">
                    <span className="pill">{r.tag}</span>
                    <span className="pill pill--draft">Draft concept</span>
                  </div>
                  <h3>
                    <button type="button" className="article__open" aria-haspopup="dialog" onClick={() => setOpen(r)}>
                      {r.title}
                    </button>
                  </h3>
                  {i === 0 && <p className="article__summary">{r.summary}</p>}
                  <span className="article__cta" aria-hidden="true">
                    Preview the outline <ArrowRight size={16} />
                  </span>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>

      <Modal open={open !== null} onClose={close} labelledBy="article-title" className="article-modal">
        {open && (
          <>
            <div className="article-modal__art">
              <ResourceArt art={open.art} />
            </div>
            <div className="article-modal__body">
              <div className="article__meta">
                <span className="pill">{open.tag}</span>
                <span className="pill pill--draft">Draft concept</span>
              </div>
              <h2 id="article-title">{open.title}</h2>
              <p className="article-modal__summary">{open.summary}</p>
              <h3 className="article-modal__sub">What the article will cover</h3>
              <ol className="article-modal__points">
                {open.points.map((p, i) => (
                  <li key={p.title}>
                    <span>{String(i + 1).padStart(2, '0')}</span>
                    <div>
                      <strong>{p.title}</strong>
                      <p>{p.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
              <div className="article-modal__foot">
                <p>This article is still being written. Ask for a copy and we'll send it when it's ready.</p>
                <div className="article-modal__actions">
                  <a className="btn btn--primary btn--small" href={mailtoHref(`Article request: ${open.title}`, `Please send me "${open.title}" when it's published.\n\nName:\nCompany:\n`)}>
                    <Mail size={17} /> Email me the article
                  </a>
                  <BookingCta className="btn btn--ghost-light btn--small">Discuss this topic</BookingCta>
                </div>
              </div>
            </div>
          </>
        )}
      </Modal>
    </section>
  )
}
