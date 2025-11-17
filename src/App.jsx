import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Trust from './components/Trust'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.08),transparent_40%),radial-gradient(ellipse_at_bottom_left,rgba(79,70,229,0.08),transparent_40%)]">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Trust />
        <CTA />
        <footer className="py-10 border-t bg-white/60 backdrop-blur">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-600">
              <p>© {new Date().getFullYear()} WebConsulting.ie. All rights reserved.</p>
              <div className="flex items-center gap-4">
                <a href="#" className="hover:text-gray-900">Privacy</a>
                <a href="#" className="hover:text-gray-900">Cookies</a>
                <a href="#" className="hover:text-gray-900">Contact</a>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
