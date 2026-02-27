import { BarChart3, Users, Calendar, AlertTriangle, ExternalLink, FileSpreadsheet } from 'lucide-react';

export default function Product() {
  const features = [
    {
      icon: BarChart3,
      title: 'Visual Timeline',
      description: 'Drag-and-drop Gantt charts designed for PM workflows, not engineer-first complexity',
    },
    {
      icon: Users,
      title: 'Capacity Engine',
      description: 'Auto-calculates team bandwidth with PTO, holidays, and velocity multipliers',
    },
    {
      icon: AlertTriangle,
      title: 'Conflict Detection',
      description: 'Identifies over-allocation before sprint planning starts',
    },
    {
      icon: FileSpreadsheet,
      title: 'Bulk Import',
      description: 'CSV-based ticket/team ingestion — because PMs live in Excel',
    },
    {
      icon: Calendar,
      title: 'Release Scoring',
      description: 'Confidence meter predicting delivery feasibility based on capacity data',
    },
  ];

  return (
    <section id="product" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Smart Release Planner
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Capacity intelligence for agile teams. Built by a PM, for PMs — solving real workflow pain points.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://smart-release-planner1.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-hover transition-all font-semibold shadow-lg hover:shadow-xl hover:scale-105"
            >
              Try It Live
              <ExternalLink size={20} />
            </a>
            <a
              href="https://github.com/shekhar992/smart-release-planner"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-900 rounded-lg hover:bg-gray-50 transition-all font-semibold border-2 border-gray-300"
            >
              View on GitHub
              <ExternalLink size={20} />
            </a>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-6 hover:shadow-lg transition-all border border-gray-200"
            >
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="text-white" size={24} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Why PM-Built Matters */}
        <div className="bg-gradient-to-r from-primary to-purple-600 rounded-2xl p-8 sm:p-12 text-white">
          <h3 className="text-3xl font-bold mb-6">Why PM-Built Tools Hit Different</h3>
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-lg mb-2">Problem-First Design</h4>
              <p className="text-blue-100">Built for real workflows, not engineer assumptions</p>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-2">No Over-Engineering</h4>
              <p className="text-blue-100">Only features that solve actual pain points</p>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-2">Instant Feedback Loop</h4>
              <p className="text-blue-100">User = Builder = Designer. No translation layers</p>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-2">Battle-Tested Logic</h4>
              <p className="text-blue-100">Based on 9 years of PI Planning across multiple Fortune 500 companies</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}