import { useState } from 'react'
import { Menu, Phone, Mail, ShieldCheck, Award } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/60 border-b border-white/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="/" className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white grid place-items-center shadow-lg shadow-blue-600/20">WC</div>
            <div className="hidden sm:block">
              <p className="text-sm leading-tight text-gray-700 font-medium">WebConsulting.ie</p>
              <p className="text-[11px] text-gray-500 flex items-center gap-1"><Award className="h-3.5 w-3.5"/> Award-winning digital experts</p>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-700">
            <a href="#services" className="hover:text-gray-900">Services</a>
            <a href="#work" className="hover:text-gray-900">Work</a>
            <a href="#approach" className="hover:text-gray-900">Approach</a>
            <a href="#about" className="hover:text-gray-900">About</a>
            <a href="#contact" className="hover:text-gray-900">Contact</a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-gray-900 text-white px-4 py-2 text-sm shadow-sm hover:shadow transition"><Phone className="h-4 w-4"/>Book a call</a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-4 py-2 text-sm hover:border-gray-400 transition"><Mail className="h-4 w-4"/>Email us</a>
          </div>

          <button className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100" onClick={()=>setOpen(v=>!v)}>
            <Menu className="h-6 w-6"/>
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="grid gap-2 text-sm text-gray-700">
              <a href="#services" className="rounded px-3 py-2 hover:bg-gray-100">Services</a>
              <a href="#work" className="rounded px-3 py-2 hover:bg-gray-100">Work</a>
              <a href="#approach" className="rounded px-3 py-2 hover:bg-gray-100">Approach</a>
              <a href="#about" className="rounded px-3 py-2 hover:bg-gray-100">About</a>
              <a href="#contact" className="rounded px-3 py-2 hover:bg-gray-100">Contact</a>
              <div className="flex items-center gap-2 px-3 pt-2 text-xs text-gray-500"><ShieldCheck className="h-4 w-4"/> GDPR-ready, ISO security</div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
