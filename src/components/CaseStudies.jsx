import { ArrowRight, Clock, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'

const CaseStudies = () => {
  const caseStudies = [
    {
      id: 'genai-platform',
      title: 'Transforming Pharmaceutical Research with GenAI',
      company: 'Deloitte (Life Sciences)',
      hook: 'How I scaled a broken AI platform from 5 to 200 users, secured $200K funding through rapid prototyping, and learned vital lessons when the project shut down.',
      metrics: [
        { value: '12h → 6h', label: 'Research time' },
        { value: '40x growth', label: '5 → 200 users' },
        { value: '$200K', label: 'Funding secured' }
      ],
      skills: ['GenAI/LLMs', 'Product Strategy', 'Leadership', 'Rapid Prototyping'],
      readTime: '10 min',
      gradient: 'from-purple-500 to-pink-500',
      published: true
    },
    // Kroger Platform Case Study
    {
      id: 'kroger-platform',
      title: 'Scaling 15,000 Retail Devices with Platform Thinking',
      company: 'Deloitte (Retail)',
      hook: 'How I eliminated duplicate backend work across 2 frontline apps, doubled deployment velocity, and saved 45 minutes per worker per week while scaling 100 → 200 stores.',
      metrics: [
        { value: '30%', label: 'Faster delivery' },
        { value: '4.2% → 1.1%', label: 'Crash rate' },
        { value: '2x', label: 'Deploy velocity' }
      ],
      skills: ['Platform Strategy', 'Stakeholder Alignment', 'Operational Excellence', 'Change Management'],
      readTime: '8 min',
      gradient: 'from-blue-500 to-cyan-500',
      published: true
    },
    {
      id: 'healthcare-samd',
      title: 'Healthcare SAMD: Regulatory PM Excellence',
      company: 'Deloitte (Healthcare)',
      hook: 'How I redesigned 24-screen FDA-regulated onboarding to 5 screens, delivered 3,000 patients in 8 weeks (3x faster), prevented $2M penalty, with zero FDA violations.',
      metrics: [
        { value: '3x faster', label: '8 weeks vs 24 weeks' },
        { value: '94%', label: 'Completion rate' },
        { value: '$2M', label: 'Penalty prevented' }
      ],
      skills: ['Regulatory PM', 'FDA Compliance', 'Stakeholder Negotiation', 'Patient Safety'],
      readTime: '12 min',
      gradient: 'from-emerald-500 to-teal-500',
      published: true
    }
  ]

  return (
    <section id="case-studies" className="py-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900/50 border border-zinc-800 mb-6">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-zinc-400">Deep Dive Case Studies</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-semibold text-white mb-6">
            How I Think & Build
          </h2>
          
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
            Beyond bullet points and metrics. These case studies reveal my strategic thinking, 
            decision-making process, failures, and what I learned from each project.
          </p>
        </div>

        {/* Why Three Deloitte Stories */}
        <div className="mb-16 max-w-4xl mx-auto">
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-white mb-4">Why Three Deloitte Stories?</h3>
            <p className="text-zinc-300 leading-relaxed mb-4">
              After gaining foundational PM experience at BSE and CRMNEXT, I joined Deloitte specifically because 
              <strong className="text-white"> Fortune 500 clients gave me access to three distinct PM challenges</strong>{' '}
              that most PMs don't get to experience in one career:
            </p>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-purple-600/20 flex items-center justify-center">
                  <span className="text-purple-400 font-bold">1</span>
                </div>
                <div>
                  <div className="font-semibold text-white mb-1">Innovation PM (Pharma GenAI)</div>
                  <div className="text-sm text-zinc-400">0→1 AI platform building—rapid prototyping, securing funding, scaling broken products</div>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-blue-600/20 flex items-center justify-center">
                  <span className="text-blue-400 font-bold">2</span>
                </div>
                <div>
                  <div className="font-semibold text-white mb-1">Scale PM (Retail Platform)</div>
                  <div className="text-sm text-zinc-400">Operational excellence across 15K devices—platform thinking, reliability, change management</div>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-emerald-600/20 flex items-center justify-center">
                  <span className="text-emerald-400 font-bold">3</span>
                </div>
                <div>
                  <div className="font-semibold text-white mb-1">Regulatory PM (Healthcare SAMD)</div>
                  <div className="text-sm text-zinc-400">FDA compliance + patient safety—stakeholder negotiation under pressure, zero violations</div>
                </div>
              </div>
            </div>
            <p className="text-zinc-400 text-sm mt-6 italic">
              These stories showcase versatility: I can prototype fast (GenAI), scale reliably (Retail Platform), 
              and navigate regulatory constraints (Healthcare)—all essential for a future AI Product Leader.
            </p>
          </div>
        </div>

        {/* Case Study Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {caseStudies.map((study) => (
            <div
              key={study.id}
              className={`group relative bg-zinc-950 border border-zinc-800 rounded-3xl overflow-hidden transition-all duration-500 ${
                study.published 
                  ? 'hover:border-zinc-700 hover:scale-[1.02] cursor-pointer' 
                  : 'opacity-60 cursor-not-allowed'
              }`}
            >
              {/* Gradient Header */}
              <div className={`h-2 bg-gradient-to-r ${study.gradient}`} />
              
              <div className="p-8">
                {/* Company Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                    {study.company}
                  </span>
                  <div className="flex items-center gap-2 text-xs text-zinc-400 font-medium">
                    <Clock className="w-3 h-3" />
                    <span>{study.readTime}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-semibold text-white mb-3 leading-tight">
                  {study.title}
                </h3>

                {/* Hook */}
                <p className="text-zinc-300 text-sm leading-relaxed mb-6">
                  {study.hook}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4 mb-6 pb-6 border-b border-zinc-800">
                  {study.metrics.map((metric, index) => (
                    <div key={index}>
                      <div className={`text-lg font-semibold ${
                        study.published ? 'text-white' : 'text-zinc-500'
                      }`}>
                        {metric.value}
                      </div>
                      <div className="text-xs text-zinc-400 font-medium">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {study.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-xs rounded-full bg-zinc-900 text-zinc-200 border border-zinc-800 font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                {study.published ? (
                  <Link
                    to={`/case-study/${study.id}`}
                    className="inline-flex items-center gap-2 text-white font-semibold group-hover:gap-3 transition-all"
                  >
                    Read Case Study
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                ) : (
                  <div className="inline-flex items-center gap-2 text-zinc-600 font-medium">
                    Coming Soon
                  </div>
                )}
              </div>

              {/* Hover Glow Effect */}
              {study.published && (
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-br ${study.gradient} pointer-events-none`} />
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-zinc-400 text-sm font-medium">
            More case studies coming soon. Each project taught me something different.
          </p>
        </div>
      </div>
    </section>
  )
}

export default CaseStudies
