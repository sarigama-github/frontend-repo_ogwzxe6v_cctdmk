import { ShieldCheck, Award, Globe2, Lock, Star, CheckCircle2 } from 'lucide-react'

export default function Trust() {
  const items = [
    { icon: Award, title: 'Award-winning team', desc: 'Recognised for excellence in digital design and performance.' },
    { icon: ShieldCheck, title: 'GDPR-first', desc: 'Clear data practices with consent, DPA readiness and privacy by design.' },
    { icon: Lock, title: 'Security-led', desc: 'Best-practice hosting, SSL, backups, monitoring and incident response.' },
    { icon: Globe2, title: 'Global delivery', desc: 'Serving Irish SMEs to global brands across multiple sectors.' },
  ]

  const badges = [
    'ISO-aligned Security', 'Cookie Consent', 'Encrypted Forms', '99.9% Uptime', 'Core Web Vitals A', 'Accessibility AA'
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50" id="trust">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">Built for trust, accessibility and performance</h2>
            <p className="mt-4 text-gray-600">From privacy-first forms to independently verified performance, our processes build confidence at every touchpoint.</p>
            <div className="mt-8 grid sm:grid-cols-2 gap-6">
              {items.map((it, i) => (
                <div key={i} className="rounded-xl border bg-white/60 backdrop-blur p-5">
                  <it.icon className="h-6 w-6 text-blue-600" />
                  <h3 className="mt-3 font-medium text-gray-900">{it.title}</h3>
                  <p className="mt-1 text-sm text-gray-600">{it.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="rounded-2xl border bg-white/60 backdrop-blur p-6">
              <p className="text-sm font-medium text-gray-700">Security & compliance highlights</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {badges.map((b, i) => (
                  <span key={i} className="inline-flex items-center gap-1 rounded-full border px-3 py-1 text-xs text-gray-700 bg-white">
                    <CheckCircle2 className="h-3.5 w-3.5 text-green-600" />{b}
                  </span>
                ))}
              </div>
              <div className="mt-6 text-xs text-gray-500">We practice transparent documentation, DPA support, and ongoing site health monitoring.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
