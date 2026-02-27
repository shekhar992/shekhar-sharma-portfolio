import { TrendingUp, Clock, Users, Target } from 'lucide-react';

export default function Impact() {
  const metrics = [
    {
      icon: TrendingUp,
      value: '12h → 6h',
      label: 'Research Time',
      description: 'GenAI query-to-insight',
    },
    {
      icon: Clock,
      value: '8 weeks',
      label: 'vs 24-week target',
      description: '3,000 users onboarded',
    },
    {
      icon: Users,
      value: '500+',
      label: 'Researchers',
      description: '40% daily active growth',
    },
    {
      icon: Target,
      value: '$200K',
      label: 'Funding Secured',
      description: 'Rapid MVP prototyping',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Measurable <span className="text-transparent bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text">Impact</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Recent deliverables for Fortune 500 clients at Deloitte
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, idx) => (
            <div
              key={idx}
              className="group glass glass-hover rounded-2xl p-6 text-center hover:scale-105 transition-all"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="w-14 h-14 bg-gradient-to-br from-green-600 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <metric.icon className="text-white" size={28} />
              </div>
              <p className="text-4xl font-bold text-transparent bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text mb-2">{metric.value}</p>
              <p className="font-semibold mb-2">{metric.label}</p>
              <p className="text-sm text-gray-400">{metric.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}