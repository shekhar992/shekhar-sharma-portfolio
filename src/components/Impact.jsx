import { TrendingUp, Clock, Users, Target } from 'lucide-react';

export default function Impact() {
  const metrics = [
    {
      icon: TrendingUp,
      value: '50%',
      label: 'Faster Planning',
      description: 'Reduced quarterly release planning time from days to hours',
    },
    {
      icon: Clock,
      value: '90%',
      label: 'Time Saved',
      description: 'Eliminated manual Excel reconciliation and capacity calculations',
    },
    {
      icon: Users,
      value: '5+',
      label: 'Teams Supported',
      description: 'Can manage multiple squads with different velocities simultaneously',
    },
    {
      icon: Target,
      value: '100%',
      label: 'Conflict Detection',
      description: 'Identifies all over-allocation scenarios before sprint kickoff',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-purple-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Built for <span className="text-primary">Real Impact</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Not just a portfolio piece — a production-ready tool solving real capacity planning problems.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all text-center border-2 border-transparent hover:border-primary"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <metric.icon className="text-primary" size={28} />
              </div>
              <p className="text-4xl font-bold text-primary mb-2">{metric.value}</p>
              <p className="font-semibold text-gray-900 mb-2">{metric.label}</p>
              <p className="text-sm text-gray-600">{metric.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}