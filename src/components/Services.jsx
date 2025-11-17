import { Rocket, Search, Layout, Workflow, LineChart, Bot, Sparkles } from 'lucide-react'

export default function Services() {
  const services = [
    { icon: Layout, title: 'Web Design', desc: 'Modern, accessible interfaces with intuitive UX and conversion-first architecture.' },
    { icon: Search, title: 'Digital Marketing', desc: 'SEO, content, and performance marketing to grow qualified traffic and revenue.' },
    { icon: Workflow, title: 'Automation', desc: 'Streamlined workflows, integrations, and data flows that scale with your business.' },
    { icon: LineChart, title: 'Analytics', desc: 'Measurement frameworks and dashboards for KPIs that matter.' },
    { icon: Rocket, title: 'Performance', desc: 'Core Web Vitals, speed, and reliability engineered from day one.' },
    { icon: Bot, title: 'AI Enablement', desc: 'Practical AI for content ops, customer support, and internal tooling.' },
  ]

  return (
    <section className="py-20" id="services">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">Expertise that moves the needle</h2>
          <p className="mt-3 text-gray-600">From strategy to execution, we combine creativity with engineering to deliver outcomes.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div key={i} className="group rounded-2xl border bg-white/60 backdrop-blur p-6 transition hover:shadow-lg">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white grid place-items-center shadow-md shadow-blue-600/20">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-medium text-gray-900">{s.title}</h3>
              <p className="mt-1.5 text-sm text-gray-600">{s.desc}</p>
              <div className="mt-4 text-sm text-blue-700">Learn more →</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
