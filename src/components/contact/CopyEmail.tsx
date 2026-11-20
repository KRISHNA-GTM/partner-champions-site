import { useState } from 'react'
import { CONTACT_EMAIL } from '../../config/site'
import { mailtoHref } from '../../utils/contact'
import { Check, Copy } from '../ui/Icons'
import './CopyEmail.css'

export function CopyEmail({ tone = 'light' }: { tone?: 'light' | 'dark' }) {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2200)
    } catch {
      // Clipboard can be blocked (e.g. insecure context); fall back to the mail link.
      window.location.href = mailtoHref()
    }
  }

  return (
    <div className={`copy-email copy-email--${tone}`}>
      <a href={mailtoHref()} className="copy-email__address">
        {CONTACT_EMAIL}
      </a>
      <button type="button" className="copy-email__btn" onClick={copy} aria-label="Copy email address">
        {copied ? <Check size={16} /> : <Copy size={16} />}
        <span aria-hidden="true">{copied ? 'Copied' : 'Copy'}</span>
      </button>
      <span className="visually-hidden" aria-live="polite">
        {copied ? 'Email address copied to clipboard' : ''}
      </span>
    </div>
  )
}
