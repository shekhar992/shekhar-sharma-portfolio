import { Briefcase, Award, GraduationCap, ExternalLink } from 'lucide-react';

export default function About() {
  const experience = [
    {
      company: 'Deloitte (Pfizer GenAI)',
      role: 'Senior Product Manager',
      period: '2023 - Present',
      problem: 'Medical researchers spent 12+ hours per query manually searching clinical protocols—slowing drug development',
      solution: 'Built GenAI knowledge mining platform with semantic search, citation tracking, and advanced filtering for 500+ researchers',
      delivery: [
        '🔍 Discovery: Delivered 10+ major features across 4 quarterly releases',
        '🎯 Alignment: Orchestrated 15-person engineering team, data science, UX, and medical SMEs—95% on-time delivery',
        '🚀 Prototyping: Secured $200K funding by building 3 rapid MVPs in 2 weeks using AI no-code tools',
      ],
      impact: 'Query-to-insight time: 12h → 6h • 40% increase in daily active users (500+ researchers) • Platform retention: 60% → 85% • Enabled $1.2M contract expansion',
    },
    {
      company: 'Deloitte (Kroger)',
      role: 'Platform Product Manager',
      period: '2022 - 2023',
      problem: 'Duplicate backend work across 2 frontline apps slowing feature delivery—15,000 devices affected',
      solution: 'Built modular API architecture and reusable platform components enabling 12 new capabilities in 8 months',
      delivery: [
        '🔍 Discovery: Accelerated feature rollout by 30% through shared platform components',
        '🎯 Stability: Reduced mobile crash rate from 4.2% to 1.1%—preventing ~$500K lost productivity',
        '🚀 Velocity: Transformed release cadence from monthly to bi-weekly while maintaining 98% uptime',
      ],
      impact: 'Frontline efficiency +20% (45 min saved per worker/week) • 12 capabilities across 15K devices • Deployment velocity doubled',
    },
    {
      company: 'Deloitte (Eli Lilly)',
      role: 'Product Owner - SAMD',
      period: '2019 - 2022',
      problem: 'Complex FDA-compliant onboarding (24 steps) causing patient drop-offs—risking $2M delay penalty if targets missed',
      solution: 'Redesigned to 12 essential steps while maintaining FDA 21 CFR Part 11 compliance—doubled completion rate',
      delivery: [
        '🔍 Delivery: Scaled to 3,000 users in 8 weeks vs 24-week target (3x faster)—prevented $2M penalty',
        '🎯 Compliance: Delivered 3 regulated apps (1 SAMD Class II, 2 onboarding)—zero violations across 8 FDA audits',
        '🚀 Collaboration: Led PI planning across clinical, regulatory, and engineering teams in 3 time zones—92% sprint velocity',
      ],
      impact: '3,000 users in 8 weeks (vs 24-week target) • Completion rate: 72% → 94% • 50% fewer steps (24 → 12) • Zero FDA violations',
    },
    {
      company: 'CRMNEXT',
      role: 'Product Manager',
      period: '2017 - 2019',
      problem: 'Banking CRM required weeks of manual configuration per client—slowing enterprise deployments',
      solution: 'Led structured onboarding program and optimized CRM configurations for 8+ banking clients',
      delivery: [
        '🔍 Discovery: Led 20+ client requirement workshops translating business needs into CRM configs',
        '🎯 Optimization: Reduced customization time by 40% through standardized configuration patterns',
        '🚀 Adoption: Increased platform adoption by 35% across banking client portfolio',
      ],
      impact: 'Platform adoption +35% across 8 banking clients • Customization time reduced 40% • 20+ successful workshops',
    },
    {
      company: 'Bombay Stock Exchange',
      role: 'Associate Product Owner',
      period: '2016 - 2017',
      problem: 'Trading platform releases had defects causing downtime—impacting revenue and operations',
      solution: 'Coordinated UAT across 5 internal platform releases and documented 15+ business process workflows',
      delivery: [
        '🔍 Quality: Ensured 98% defect-free deployment rate across digital platform releases',
        '🎯 Documentation: Improved cross-team collaboration through comprehensive workflow documentation',
        '🚀 Efficiency: Reduced requirement clarification time by 30% through clear process docs',
      ],
      impact: '98% defect-free deployments • 5 successful UAT releases • 30% faster requirement clarification',
    },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            End-to-End Product Delivery
            <span className="text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text"> at Scale</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Discovery → Requirements → Agile Execution → Aligning Engineering + Design → Go Live
            <br />
            <span className="text-gray-400 text-base">10 years product experience • 7 years at Deloitte (Pfizer, Kroger, Eli Lilly) • Enterprise SaaS, GenAI, Mobile</span>
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-6 mb-16">
          {experience.map((exp, idx) => (
            <div 
              key={idx} 
              className="group glass glass-hover rounded-2xl p-6 sm:p-8 hover:scale-[1.02] transition-all"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              {/* Header */}
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Briefcase className="text-white" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold">{exp.role}</h3>
                  <p className="text-purple-400 font-semibold">{exp.company}</p>
                  <p className="text-gray-500 text-sm">{exp.period}</p>
                </div>
              </div>

              {/* Problem */}
              <div className="mb-4 pl-16">
                <p className="text-orange-400 font-semibold text-sm mb-1">🔴 Problem</p>
                <p className="text-gray-300">{exp.problem}</p>
              </div>

              {/* Solution */}
              <div className="mb-4 pl-16">
                <p className="text-green-400 font-semibold text-sm mb-1">✅ Solution</p>
                <p className="text-gray-300">{exp.solution}</p>
              </div>

              {/* Delivery Process */}
              <div className="mb-4 pl-16">
                <p className="text-cyan-400 font-semibold text-sm mb-2">⚙️ End-to-End Delivery</p>
                <ul className="space-y-1">
                  {exp.delivery.map((item, dIdx) => (
                    <li key={dIdx} className="text-gray-400 text-sm">{item}</li>
                  ))}
                </ul>
              </div>

              {/* Impact */}
              <div className="pl-16 pt-3 border-t border-white/10">
                <p className="text-purple-400 font-semibold text-sm mb-1">📊 Impact</p>
                <p className="text-white font-medium">{exp.impact}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Skills & Certifications */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="glass rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <Award className="text-purple-400" size={24} />
              <h3 className="text-xl font-bold">Core Expertise</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {['Product Strategy', 'PI Planning', 'GenAI/LLMs', 'Enterprise SaaS', 'Mobile (iOS/Android)', 'SAMD', 'SAFe Agile', 'Design Thinking', 'OKRs', 'API Design'].map((skill) => (
                <span key={skill} className="px-3 py-1 bg-purple-500/20 rounded-full text-sm font-medium text-purple-300">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="glass rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <GraduationCap className="text-cyan-400" size={24} />
              <h3 className="text-xl font-bold">Certifications</h3>
            </div>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-gray-400">
                <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                Certified SAFe® 6 Agilist (2025)
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                Certified Scrum Product Owner (2025)
              </li>
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a
            href="https://www.linkedin.com/in/sheksharma"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl hover:shadow-2xl hover:shadow-purple-500/50 transition-all font-semibold hover:scale-105"
          >
            Full Resume on LinkedIn
            <ExternalLink size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}