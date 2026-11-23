import { SCHEDULING_URL } from '../../config/site'
import { hasScheduler, mailtoHref } from '../../utils/contact'
import { Modal } from '../ui/Modal'
import { ArrowUpRight, Calendar, Mail } from '../ui/Icons'
import './ContactModal.css'

type Props = { open: boolean; topic?: string; onClose: () => void }

export function ContactModal({ open, topic, onClose }: Props) {
  const subject = topic ? `${topic}: Partner campaign planning request` : 'Partner campaign planning request'
  const body = topic
    ? `Hi Partner Champions team,\n\nI'd like to plan a partner campaign regarding ${topic.toLowerCase()}.\n\nCompany:\nPartner program focus:\n`
    : `Hi Partner Champions team,\n\nI'd like to plan a partner campaign.\n\nCompany:\nPartner program focus:\n`

  return (
    <Modal open={open} onClose={onClose} labelledBy="contact-title" className="contact-modal">
      <div className="contact-modal__head">
        <svg className="contact-modal__pattern" viewBox="0 0 640 200" aria-hidden="true">
          {Array.from({ length: 9 }).map((_, i) => (
            <circle
              key={i}
              cx={460 + Math.cos(i * 0.7) * (40 + i * 16)}
              cy={100 + Math.sin(i * 0.7) * (30 + i * 9)}
              r={i % 3 === 0 ? 4 : 2.5}
              fill={i === 4 ? '#D5A62B' : '#2878FF'}
            />
          ))}
          <path
            d="M380 160 C 450 40, 560 60, 640 20 M420 200 C 480 110, 560 120, 640 90"
            stroke="#2878FF"
            strokeOpacity=".35"
            fill="none"
          />
        </svg>
        <p className="eyebrow">{topic ? topic : 'Plan a partner campaign'}</p>
        <h2 id="contact-title">Let’s plan your first partner campaign.</h2>
        <p>Tell us which partners and which offer. We’ll come back with how we would build and launch the campaign.</p>
      </div>

      <div className="contact-modal__options">
        {hasScheduler && (
          <a className="contact-option" href={SCHEDULING_URL} target="_blank" rel="noopener noreferrer">
            <span className="contact-option__icon">
              <Calendar size={22} />
            </span>
            <span className="contact-option__text">
              <strong>Book a 30-minute planning call</strong>
              <span>Pick a 30-minute time directly on our calendar</span>
            </span>
            <ArrowUpRight className="contact-option__arrow" />
            <span className="visually-hidden">(opens in a new tab)</span>
          </a>
        )}
        <a className="contact-option" href={mailtoHref(subject, body)}>
          <span className="contact-option__icon contact-option__icon--gold">
            <Mail size={22} />
          </span>
          <span className="contact-option__text">
            <strong>Email the team</strong>
            <span>Opens your mail app with a short template</span>
          </span>
          <ArrowUpRight className="contact-option__arrow" />
        </a>
      </div>
    </Modal>
  )
}
