import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl"/>
        <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-indigo-500/10 blur-3xl"/>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 items-center gap-12">
        <div className="relative z-10">
          <p className="inline-flex items-center gap-2 text-xs font-medium text-blue-700 bg-blue-50 border border-blue-200 rounded-full px-3 py-1">Trusted by leaders across Ireland & beyond</p>
          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-gray-900">Modern websites that build trust and drive measurable growth</h1>
          <p className="mt-5 text-gray-600 text-lg">We blend strategy, design, and technology to deliver award-winning digital experiences. Fast, accessible, SEO-ready, and built for conversion.</p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#contact" className="inline-flex items-center justify-center rounded-full bg-gray-900 text-white px-6 py-3 text-sm font-medium shadow-sm hover:shadow transition">Start a project</a>
            <a href="#work" className="inline-flex items-center justify-center rounded-full border border-gray-300 bg-white px-6 py-3 text-sm font-medium hover:border-gray-400 transition">See our work</a>
          </div>
          <div className="mt-6 text-xs text-gray-500">ISO-aligned security • GDPR-first • Transparent pricing</div>
        </div>
        <div className="h-[520px] lg:h-[640px] w-full rounded-2xl bg-white/40 border border-white/30 backdrop-blur relative shadow-[0_0_1px_rgba(0,0,0,0.06)]">
          <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
      </div>
    </section>
  )
}
