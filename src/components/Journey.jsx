import { Figma, Code2, Sparkles, Rocket, CheckCircle } from 'lucide-react';

export default function Journey() {
  const steps = [
    {
      icon: Figma,
      title: 'Prototyped the UX',
      description: 'Designed workflows in Figma Make based on 9 years of PI Planning experience',
      tool: 'Figma Make',
    },
    {
      icon: Code2,
      title: 'Built with AI',
      description: 'Used VS Code + Claude/Copilot to implement React + Vite app incrementally',
      tool: 'VS Code + AI',
    },
    {
      icon: Sparkles,
      title: 'Iterated Fast',
      description: 'Validated flows, added features, fixed edge cases — no translation layers',
      tool: 'Vibecoding',
    },
    {
      icon: Rocket,
      title: 'Deployed Live',
      description: 'Shipped to production on Vercel, handling real capacity planning scenarios',
      tool: 'Vercel',
    },
  ];

  return (
    <section id="journey" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            How I Built It
            <span className="text-primary"> Without a Dev Team</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Traditional teams would've taken 6 months. I shipped in weeks using <span className="font-semibold">vibecoding</span> —
            building with intent, guided by AI, powered by PM intuition.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative space-y-8">
          {/* Vertical line */}
          <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-primary/30 hidden md:block"></div>

          {steps.map((step, idx) => (
            <div key={idx} className="relative flex items-start gap-6">
              {/* Icon */}
              <div className="flex-shrink-0 w-16 h-16 bg-primary rounded-xl flex items-center justify-center shadow-lg z-10">
                <step.icon className="text-white" size={28} />
              </div>

              {/* Content */}
              <div className="flex-1 bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow border border-gray-200">
                <div className="flex items-start justify-between flex-wrap gap-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600 mb-3">{step.description}</p>
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full text-primary text-sm font-medium">
                      <CheckCircle size={16} />
                      {step.tool}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Philosophy Box */}
        <div className="mt-16 bg-white rounded-2xl p-8 sm:p-12 shadow-lg border-2 border-primary/20">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">The Vibecoding Advantage</h3>
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="text-center">
              <p className="text-4xl font-bold text-primary mb-2">0</p>
              <p className="text-gray-600">Dev Team Required</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-primary mb-2">100%</p>
              <p className="text-gray-600">Problem Understanding</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-primary mb-2">Instant</p>
              <p className="text-gray-600">Feedback Loop</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}