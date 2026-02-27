import { AlertCircle, FileSpreadsheet, Users, Calendar } from 'lucide-react';

export default function Problem() {
  const painPoints = [
    {
      icon: FileSpreadsheet,
      title: '12 Excel Files',
      description: 'Quarterly plans across broken spreadsheets with version chaos',
    },
    {
      icon: Users,
      title: '5 Squads',
      description: 'Coordinating capacity with different velocities and overlapping PTO',
    },
    {
      icon: Calendar,
      title: '200+ Tickets',
      description: 'Manual sprint assignment without visibility or conflict detection',
    },
  ];

  return (
    <section id="problem" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full text-orange-400 font-medium text-sm mb-4">
            <AlertCircle size={16} />
            Every PM's Nightmare
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Why I Built <span className="text-transparent bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text">My Own Tool</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Excel-based PI Planning for my Fortune 500 clients wasn't working. So I fixed it.
          </p>
        </div>

        {/* Pain Points Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {painPoints.map((point, idx) => (
            <div 
              key={idx} 
              className="group glass glass-hover rounded-2xl p-6 hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <point.icon className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">{point.title}</h3>
              <p className="text-gray-400">{point.description}</p>
            </div>
          ))}
        </div>

        {/* The "Aha" Moment */}
        <div className="relative glass rounded-3xl p-8 sm:p-10 text-center overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 group-hover:scale-105 transition-transform duration-500"></div>
          <div className="relative z-10">
            <p className="text-2xl sm:text-3xl font-bold text-white mb-3">
              "Why am I gatekeeping a Google Sheet?"
            </p>
            <p className="text-lg text-gray-300">
              After hundreds of sprints, I knew the problem better than anyone.<br />
              <span className="text-cyan-400 font-semibold">So I built the fix.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}