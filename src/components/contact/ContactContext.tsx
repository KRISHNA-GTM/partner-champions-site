import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from 'react'
import { ContactModal } from './ContactModal'

type ContactApi = { openContact: (topic?: string) => void }

const ContactCtx = createContext<ContactApi>({ openContact: () => {} })

export function ContactProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false)
  const [topic, setTopic] = useState<string | undefined>()

  const openContact = useCallback((t?: string) => {
    setTopic(t)
    setOpen(true)
  }, [])

  const close = useCallback(() => setOpen(false), [])
  const api = useMemo(() => ({ openContact }), [openContact])

  return (
    <ContactCtx.Provider value={api}>
      {children}
      <ContactModal open={open} topic={topic} onClose={close} />
    </ContactCtx.Provider>
  )
}

export const useContact = () => useContext(ContactCtx)
