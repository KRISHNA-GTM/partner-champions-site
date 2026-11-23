import { Approach } from './components/Approach/Approach'
import { Challenge } from './components/Challenge/Challenge'
import { ContactProvider } from './components/contact/ContactContext'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { Hero } from './components/Hero/Hero'
import { Services } from './components/Services/Services'
import { Showcase } from './components/Showcase/Showcase'
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
        <Challenge />
        <Services />
        <Showcase />
        <Approach />
      </main>
      <Footer />
    </ContactProvider>
  )
}
