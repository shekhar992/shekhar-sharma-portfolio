import { Figma, Code2, Sparkles, Rocket } from 'lucide-react';

export default function Journey() {
  const steps = [
    {
      icon: Figma,
      title: 'Design',
      description: '9 years of PI Planning experience → Figma prototypes',
      tool: 'Figma',
    },
    {
      icon: Code2,
      title: 'Build',
      description: 'React + Vite with Claude/Copilot as dev partners',
      tool: 'AI-Assisted',
    },
    {
      icon: Sparkles,
      title: 'Iterate',
      description: 'Real user feedback → Instant fixes',
      tool: 'No PRDs',
    },
    {
      icon: Rocket,
      title: 'Ship',
      description: 'Live on Vercel in 3 weeks',
      tool: 'Production',
    },
  ];

  return (
    <section id="journey" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Shipped in 3 Weeks.
            <span className="text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text"> Not 6 Months.</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Built independently, leveraging AI to accelerate development.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative space-y-6">
          {steps.map((step, idx) => (
            <div 
              key={idx} 
              className="group relative flex items-start gap-6 animate-fadeInUp"
              style={{ animationDelay: `${idx * 0.15}s` }}
            >
              {/* Icon */}
              <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <step.icon className="text-white" size={28} />
              </div>

              {/* Content */}
              <div className="flex-1 glass glass-hover rounded-2xl p-6 group-hover:scale-[1.02] transition-all">
                <div className="flex items-start justify-between flex-wrap gap-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                    <p className="text-gray-400 mb-3">{step.description}</p>
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-500/20 rounded-full text-purple-300 text-sm font-medium">
                      {step.tool}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Box */}
        <div className="mt-16 glass rounded-3xl p-8 sm:p-12 relative overflow-hidden">
          <div className="absolute inset-0 shimmer"></div>
          <h3 className="text-2xl font-bold mb-8 text-center">The Edge</h3>
          <div className="grid sm:grid-cols-3 gap-6 relative z-10">
            <div className="text-center">
              <p className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">0</p>
              <p className="text-gray-400">PRDs Written</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">3</p>
              <p className="text-gray-400">Weeks to Ship</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-2">∞</p>
              <p className="text-gray-400">Learning Velocity</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}