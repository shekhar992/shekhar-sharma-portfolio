import { Briefcase, Award, GraduationCap, ExternalLink } from 'lucide-react';

export default function About() {
  const experience = [
    {
      company: 'Deloitte (Pfizer GenAI)',
      role: 'Senior Product Manager',
      period: '2023 - Present',
      highlights: [
        'Led GenAI knowledge mining platform from discovery to production deployment',
        'Reduced researcher query-to-insight time by 50%',
        'Secured $200K incremental funding through rapid MVP prototyping',
      ],
    },
    {
      company: 'Deloitte (Kroger)',
      role: 'Platform Product Manager',
      period: '2022 - 2023',
      highlights: [
        'Owned Android enterprise mobile platform roadmap',
        'Accelerated feature rollout by 30% through modular APIs',
        'Improved frontline task efficiency by 20%',
      ],
    },
    {
      company: 'Deloitte (Eli Lilly)',
      role: 'Product Owner - SAMD',
      period: '2019 - 2022',
      highlights: [
        'Managed 3 regulated patient-facing mobile apps (Class II SAMD)',
        'Scaled onboarding to 3,000 patients in 2 months vs 6-month target',
        'Reduced onboarding steps by 50% while maintaining compliance',
      ],
    },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Senior PM by Trade,
            <span className="text-primary"> Builder by Obsession</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            9+ years leading end-to-end product lifecycle across GenAI platforms,
            regulated healthcare (SAMD), and enterprise SaaS ecosystems at Fortune 500 companies.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8 mb-16">
          {experience.map((exp, idx) => (
            <div key={idx} className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 sm:p-8 border border-gray-200 hover:shadow-lg transition-all">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Briefcase className="text-white" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900">{exp.role}</h3>
                  <p className="text-primary font-semibold">{exp.company}</p>
                  <p className="text-gray-600 text-sm">{exp.period}</p>
                </div>
              </div>
              <ul className="space-y-2 ml-16">
                {exp.highlights.map((highlight, hIdx) => (
                  <li key={hIdx} className="text-gray-700 flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Skills & Certifications */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
            <div className="flex items-center gap-3 mb-4">
              <Award className="text-primary" size={24} />
              <h3 className="text-xl font-bold text-gray-900">Core Expertise</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {['Product Strategy', 'PI Planning', 'Stakeholder Management', 'GenAI', 'SaaS Platforms', 'Mobile Apps', 'SAFe Agile', 'SAMD Compliance', 'UX Collaboration'].map((skill) => (
                <span key={skill} className="px-3 py-1 bg-white rounded-full text-sm font-medium text-gray-700 border border-gray-200">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
            <div className="flex items-center gap-3 mb-4">
              <GraduationCap className="text-primary" size={24} />
              <h3 className="text-xl font-bold text-gray-900">Certifications</h3>
            </div>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-gray-700">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                Certified SAFe® 6 Agilist (2025)
              </li>
              <li className="flex items-center gap-2 text-gray-700">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                Certified Scrum Product Owner (CSPO) (2025)
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
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-hover transition-all font-semibold shadow-lg hover:shadow-xl hover:scale-105"
          >
            View Full Resume on LinkedIn
            <ExternalLink size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}