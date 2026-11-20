import { useEffect, useRef, type ReactNode } from 'react'
import { Close } from './Icons'
import './Modal.css'

type ModalProps = {
  open: boolean
  onClose: () => void
  labelledBy: string
  children: ReactNode
  className?: string
}

/**
 * Accessible modal built on the native <dialog> element:
 * focus moves inside, the page behind is inert, Esc closes it,
 * and focus returns to the trigger on close.
 */
export function Modal({ open, onClose, labelledBy, children, className = '' }: ModalProps) {
  const ref = useRef<HTMLDialogElement>(null)
  const returnFocus = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const dialog = ref.current
    if (!dialog) return
    if (open && !dialog.open) {
      returnFocus.current = document.activeElement as HTMLElement | null
      dialog.showModal()
      document.body.classList.add('is-locked')
    } else if (!open && dialog.open) {
      dialog.close()
    }
  }, [open])

  useEffect(() => {
    const dialog = ref.current
    if (!dialog) return
    const handleClose = () => {
      document.body.classList.remove('is-locked')
      returnFocus.current?.focus?.()
      onClose()
    }
    dialog.addEventListener('close', handleClose)
    return () => dialog.removeEventListener('close', handleClose)
  }, [onClose])

  return (
    <dialog
      ref={ref}
      className={`modal ${className}`}
      aria-labelledby={labelledBy}
      onClick={(e) => {
        // Click on the backdrop (the dialog element itself, outside the panel) closes it.
        if (e.target === e.currentTarget) e.currentTarget.close()
      }}
    >
      <div className="modal__panel">
        <button
          type="button"
          className="modal__close"
          aria-label="Close dialog"
          onClick={() => ref.current?.close()}
        >
          <Close />
        </button>
        {children}
      </div>
    </dialog>
  )
}
