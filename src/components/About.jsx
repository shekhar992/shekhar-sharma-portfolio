import { Briefcase, Award, GraduationCap, ExternalLink } from 'lucide-react';

export default function About() {
  const experience = [
    {
      company: 'Deloitte (Pharmaceutical)',
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
      company: 'Deloitte (Retail)',
      role: 'Platform Product Manager',
      period: '2022 - 2023',
      problem: 'Duplicate backend work across 2 frontline apps slowing feature delivery—15,000 devices affected',
      solution: 'Managed platform requirements from app teams, prioritized based on business needs, and orchestrated delivery of 12 new capabilities in 8 months',
      delivery: [
        '🔍 Discovery: Accelerated feature rollout by 30% through requirements prioritization and shared platform approach',
        '🎯 Stability: Reduced mobile crash rate from 4.2% to 1.1%—preventing ~$500K lost productivity',
        '🚀 Velocity: Transformed release cadence from monthly to bi-weekly while maintaining 98% uptime',
      ],
      impact: 'Frontline efficiency +20% (45 min saved per worker/week) • 12 capabilities across 15K devices • Deployment velocity doubled',
    },
    {
      company: 'Deloitte (Healthcare)',
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
      problem: 'SaaS CRM leads converting slowly—lengthy sales-to-deployment cycles for SMB clients (<100 users)',
      solution: 'Owned end-to-end lead conversion: RFP responses, product demos, SDLC, and cloud deployments across Services, Media & Insurance domains',
      delivery: [
        '🔍 Lead-to-Revenue: Managed full sales-to-deployment cycle—from RFPs to product configuration and cloud deployment',
        '🎯 Enterprise Promotion: Promoted to enterprise clients—re-imagined customer service journey for India\'s largest insurance provider',
        '🚀 Client Success: Led 20+ product demos and requirement workshops translating business needs into CRM solutions',
      ],
      impact: 'End-to-end ownership of SMB lead conversions • Promoted to enterprise accounts • Re-designed CS journey for India\'s largest insurer',
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
    <section id="about" className="py-32 px-6 lg:px-12 bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-24">
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-semibold mb-8 tracking-tight">
            Experience
          </h2>
          <p className="text-xl sm:text-2xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
            10 years building products for Fortune 500<br className="hidden sm:block" />
            <span className="text-white">Healthcare • Retail • Pharmaceutical • Financial Services</span>
          </p>
        </div>

        {/* Experience Timeline - Apple Card Style */}
        <div className="space-y-8 mb-24">
          {experience.map((exp, idx) => (
            <div 
              key={idx} 
              className="apple-card"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              {/* Header */}
              <div className="mb-8">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <h3 className="text-2xl font-semibold">{exp.role}</h3>
                  <span className="text-sm text-zinc-500 whitespace-nowrap">{exp.period}</span>
                </div>
                <p className="text-zinc-400 font-medium">{exp.company}</p>
              </div>

              {/* Problem */}
              <div className="mb-6">
                <p className="text-sm font-medium text-red-400 mb-2">Challenge</p>
                <p className="text-zinc-300 text-lg leading-relaxed">{exp.problem}</p>
              </div>

              {/* Solution */}
              <div className="mb-6">
                <p className="text-sm font-medium text-green-400 mb-2">Solution</p>
                <p className="text-zinc-300 text-lg leading-relaxed">{exp.solution}</p>
              </div>

              {/* Delivery */}
              <div className="mb-6">
                <p className="text-sm font-medium text-blue-400 mb-2">Delivery</p>
                <ul className="space-y-2">
                  {exp.delivery.map((item, i) => (
                    <li key={i} className="text-zinc-300 text-base leading-relaxed">{item}</li>
                  ))}
                </ul>
              </div>

              {/* Impact */}
              <div className="pt-6 border-t border-zinc-800">
                <p className="text-sm font-medium text-zinc-400 mb-2">Impact</p>
                <p className="text-white font-medium text-lg leading-relaxed">{exp.impact}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="apple-card">
            <h3 className="text-2xl font-semibold mb-8">Expertise</h3>
            
            {/* Product Management */}
            <div className="mb-6">
              <p className="text-sm font-semibold text-zinc-400 mb-3">Product Management</p>
              <div className="flex flex-wrap gap-2">
                {['Product Strategy', 'Roadmap Planning', 'Stakeholder Management', 'OKRs & KPIs', 'PI Planning', 'Product-Market Fit', 'User Research', 'A/B Testing', 'Go-to-Market'].map((skill) => (
                  <span key={skill} className="px-3 py-1.5 bg-zinc-800 rounded-full text-sm text-zinc-300">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Technical & Platforms */}
            <div className="mb-6">
              <p className="text-sm font-semibold text-zinc-400 mb-3">Technical & Platforms</p>
              <div className="flex flex-wrap gap-2">
                {['GenAI/LLMs', 'Enterprise SaaS', 'Mobile Apps (iOS/Android)', 'API Design', 'Cloud Platforms', 'SAMD Compliance', 'FDA 21 CFR Part 11', 'Data Analytics'].map((skill) => (
                  <span key={skill} className="px-3 py-1.5 bg-zinc-800 rounded-full text-sm text-zinc-300">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Methodologies */}
            <div className="mb-6">
              <p className="text-sm font-semibold text-zinc-400 mb-3">Methodologies & Frameworks</p>
              <div className="flex flex-wrap gap-2">
                {['SAFe Agile', 'Scrum', 'Lean Product Development', 'Design Thinking', 'Jobs-to-be-Done', 'Continuous Discovery'].map((skill) => (
                  <span key={skill} className="px-3 py-1.5 bg-zinc-800 rounded-full text-sm text-zinc-300">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Tools & Prototyping */}
            <div>
              <p className="text-sm font-semibold text-zinc-400 mb-3">Tools & Prototyping</p>
              <div className="flex flex-wrap gap-2">
                {['Figma', 'JIRA', 'Confluence', 'SQL', 'Miro', 'Amplitude', 'AI-Powered Prototyping', 'Vibecoding'].map((skill) => (
                  <span key={skill} className="px-3 py-1.5 bg-zinc-800 rounded-full text-sm text-zinc-300">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="apple-card">
            <h3 className="text-2xl font-semibold mb-8">Certifications</h3>
            <ul className="space-y-4">
              <li className="text-zinc-300 text-lg">Certified SAFe® 6 Agilist</li>
              <li className="text-zinc-300 text-lg">Certified Scrum Product Owner (CSPO)</li>
            </ul>

            {/* Domain Experience */}
            <div className="mt-10">
              <h3 className="text-2xl font-semibold mb-6">Domain Experience</h3>
              <div className="flex flex-wrap gap-2">
                {['Healthcare', 'Pharmaceutical', 'Retail', 'Financial Services', 'Insurance', 'Media'].map((domain) => (
                  <span key={domain} className="px-3 py-1.5 bg-zinc-800 rounded-full text-sm text-zinc-300">
                    {domain}
                  </span>
                ))}
              </div>
            </div>

            {/* Key Strengths */}
            <div className="mt-10">
              <h3 className="text-2xl font-semibold mb-6">Key Strengths</h3>
              <ul className="space-y-3">
                <li className="text-zinc-300">🚀 0→1 Product Launches</li>
                <li className="text-zinc-300">⚡ Rapid Prototyping & MVPs</li>
                <li className="text-zinc-300">📊 Data-Driven Decision Making</li>
                <li className="text-zinc-300">🎯 Cross-Functional Leadership</li>
                <li className="text-zinc-300">🔧 Regulated Product Delivery</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}