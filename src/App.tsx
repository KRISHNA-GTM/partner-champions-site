import { ContactProvider } from './components/contact/ContactContext'
import { Approach } from './components/Approach/Approach'
import { Ecosystem } from './components/Ecosystem/Ecosystem'
import { FinalCta } from './components/FinalCta/FinalCta'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { Hero } from './components/Hero/Hero'
import { Impact } from './components/Impact/Impact'
import { Resources } from './components/Resources/Resources'
import { Services } from './components/Services/Services'
import { ValueProp } from './components/ValueProp/ValueProp'
import { useRevealOnScroll } from './hooks/usePageEffects'

export default function App() {
  useRevealOnScroll()

  return (
    <ContactProvider>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <ValueProp />
        <Services />
        <Ecosystem />
        <Approach />
        <Impact />
        <Resources />
        <FinalCta />
      </main>
      <Footer />
    </ContactProvider>
  )
}
