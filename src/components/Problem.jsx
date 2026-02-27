import { AlertCircle, FileSpreadsheet, Users, Calendar } from 'lucide-react';

export default function Problem() {
  const painPoints = [
    {
      icon: FileSpreadsheet,
      title: '12 Excel Files',
      description: 'Managing quarterly plans across interconnected spreadsheets with broken formulas and version chaos',
    },
    {
      icon: Users,
      title: '5 Squads',
      description: 'Coordinating capacity across multiple teams with different velocities and overlapping PTO',
    },
    {
      icon: Calendar,
      title: '200+ Tickets',
      description: 'Manually assigning sprints without visibility into team availability or conflict detection',
    },
  ];

  return (
    <section id="problem" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 rounded-full text-orange-700 font-medium text-sm mb-4">
            <AlertCircle size={16} />
            The Problem Every PM Knows
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Release Planning Shouldn't Be This Hard
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            As a PM leading PI Planning at scale for Pfizer, Kroger, and Eli Lilly,
            I lived the chaos of Excel-based release planning every quarter.
          </p>
        </div>

        {/* Pain Points Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {painPoints.map((point, idx) => (
            <div key={idx} className="bg-gray-50 rounded-xl p-6 border-2 border-gray-200 hover:border-primary hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <point.icon className="text-orange-600" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{point.title}</h3>
              <p className="text-gray-600">{point.description}</p>
            </div>
          ))}
        </div>

        {/* The "Aha" Moment */}
        <div className="bg-gradient-to-r from-primary/10 to-purple-100 rounded-2xl p-8 sm:p-12 text-center">
          <p className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            "Why doesn't a tool exist for this?"
          </p>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            After managing hundreds of sprints and quarterly releases,
            I realized: <span className="font-semibold">I understand the problem better than anyone</span>.
            So I built the solution.
          </p>
        </div>
      </div>
    </section>
  );
}