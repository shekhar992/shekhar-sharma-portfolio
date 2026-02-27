export default function Impact() {
  const metrics = [
    { value: '12h → 6h', label: 'Research Time', sub: 'GenAI query-to-insight' },
    { value: '8 weeks', label: 'vs 24-week target', sub: '3,000 users onboarded' },
    { value: '500+', label: 'Researchers', sub: '40% active growth' },
    { value: '$200K', label: 'Funding Secured', sub: 'Rapid prototyping' },
  ];

  return (
    <section className="py-32 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-semibold mb-8 tracking-tight">
            Impact
          </h2>
          <p className="text-xl sm:text-2xl text-zinc-400 max-w-3xl mx-auto">
            Recent deliverables at Deloitte
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-12">
          {metrics.map((metric, idx) => (
            <div key={idx} className="text-center">
              <p className="text-5xl lg:text-6xl font-semibold text-white mb-3">{metric.value}</p>
              <p className="text-lg font-medium text-zinc-400 mb-1">{metric.label}</p>
              <p className="text-sm text-zinc-600">{metric.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}