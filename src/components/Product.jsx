import { BarChart3, Users, Calendar, AlertTriangle, ExternalLink, FileSpreadsheet, ChevronDown, ChevronUp, Figma, Code2, Sparkles, Rocket } from 'lucide-react';
import { useState } from 'react';

export default function Product() {
  const [showDetails, setShowDetails] = useState(false);
  
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

  const steps = [
    {
      icon: Figma,
      title: 'Design',
      description: '10 years of PI Planning experience → Figma prototypes',
      tool: 'Figma',
    },
    {
      icon: Code2,
      title: 'Build',
      description: 'React + TypeScript with Claude/Copilot as dev partners',
      tool: 'Vibecoding',
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

  const features = [
    {
      icon: BarChart3,
      title: 'Visual Timeline',
      description: 'Drag-and-drop Gantt for PM workflows',
    },
    {
      icon: Users,
      title: 'Capacity Engine',
      description: 'Auto-calc bandwidth with PTO & velocity',
    },
    {
      icon: AlertTriangle,
      title: 'Conflict Detection',
      description: 'Spots over-allocation before planning',
    },
    {
      icon: FileSpreadsheet,
      title: 'Bulk Import',
      description: 'CSV ingestion—PMs live in Excel',
    },
    {
      icon: Calendar,
      title: 'Release Scoring',
      description: '85% accuracy predicting delivery feasibility',
    },
  ];

  return (
    <section id="product" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text">Smart Release Planner</span>
          </h2>
          <p className="text-xl text-gray-300 mb-2">Pre-JIRA Clarity for Chaotic Releases</p>
          <p className="text-gray-400 max-w-2xl mx-auto mb-6">
            Built in 3 weeks to solve my own Excel hell. Now live in production.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://smart-release-planner1.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl hover:shadow-2xl hover:shadow-blue-500/50 transition-all font-semibold hover:scale-105"
            >
              Try It Live
              <ExternalLink size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
            <a
              href="https://github.com/shekhar992/smart-release-planner"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 glass glass-hover rounded-xl font-semibold hover:scale-105"
            >
              GitHub
              <ExternalLink size={18} />
            </a>
          </div>
        </div>

        {/* App Screenshots Marquee */}
        <div className="mb-12 relative overflow-hidden">
          <div className="text-center mb-6">
            <h3 className="text-xl font-bold mb-2">Quick Look</h3>
            <p className="text-gray-400 text-sm">Hover to pause</p>
          </div>
          
          {/* Marquee Container */}
          <div className="relative">
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none"></div>
            
            {/* Scrolling container */}
            <div className="overflow-hidden py-4">
              <div className="flex gap-6 animate-marquee pause-marquee">
                {/* First set of images */}
                {[1, 2, 3, 4, 5].map((num) => (
                  <div key={`first-${num}`} className="flex-shrink-0 w-[600px]">
                    <div className="glass rounded-2xl p-4 hover:scale-105 transition-transform duration-300">
                      <img 
                        src={`/screenshots/capability-${num}.png`}
                        alt={`Smart Release Planner - Capability ${num}`}
                        className="w-full rounded-xl border border-white/10"
                      />
                    </div>
                  </div>
                ))}
                {/* Duplicate set for seamless loop */}
                {[1, 2, 3, 4, 5].map((num) => (
                  <div key={`second-${num}`} className="flex-shrink-0 w-[600px]">
                    <div className="glass rounded-2xl p-4 hover:scale-105 transition-transform duration-300">
                      <img 
                        src={`/screenshots/capability-${num}.png`}
                        alt={`Smart Release Planner - Capability ${num}`}
                        className="w-full rounded-xl border border-white/10"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Collapsible Details Toggle */}
        <div className="text-center mb-8">
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="group inline-flex items-center gap-2 px-6 py-3 glass glass-hover rounded-xl font-semibold hover:scale-105 transition-all"
          >
            {showDetails ? 'Hide' : 'Want to know how I built it?'}
            {showDetails ? <ChevronUp size={20} className="group-hover:-translate-y-1 transition-transform" /> : <ChevronDown size={20} className="group-hover:translate-y-1 transition-transform" />}
          </button>
        </div>

        {/* Collapsible Details Section */}
        {showDetails && (
          <div className="space-y-12 animate-fadeInUp">
            {/* Why I Built It - Origin Story */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full text-orange-400 font-medium text-sm mb-4">
                <AlertTriangle size={16} />
                Every PM's Nightmare
              </div>
              <h3 className="text-3xl sm:text-4xl font-bold mb-4">
                Why I Built <span className="text-transparent bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text">My Own Tool</span>
              </h3>
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
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <point.icon className="text-white" size={24} />
                  </div>
                  <h4 className="text-xl font-bold mb-2">{point.title}</h4>
                  <p className="text-gray-400">{point.description}</p>
                </div>
              ))}
            </div>

            {/* The "Aha" Moment */}
            <div className="relative glass rounded-3xl p-8 sm:p-10 text-center overflow-hidden group mb-16">
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

            {/* How I Shipped It */}
            <div className="text-center mb-12">
              <h3 className="text-3xl sm:text-4xl font-bold mb-4">
                Shipped in 3 Weeks.
                <span className="text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text"> Not 6 Months.</span>
              </h3>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                No dev team. No sprint planning. Just vibecoding with AI.
              </p>
            </div>

            {/* Timeline */}
            <div className="relative space-y-6 mb-12">
              {steps.map((step, idx) => (
                <div 
                  key={idx} 
                  className="group relative flex items-start gap-6"
                >
                  {/* Icon */}
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <step.icon className="text-white" size={28} />
                  </div>

                  {/* Content */}
                  <div className="flex-1 glass glass-hover rounded-2xl p-6 group-hover:scale-[1.02] transition-all">
                    <div className="flex items-start justify-between flex-wrap gap-4">
                      <div className="flex-1">
                        <h4 className="text-2xl font-bold mb-2">{step.title}</h4>
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

            {/* The Edge Stats */}
            <div className="glass rounded-3xl p-8 sm:p-12 relative overflow-hidden mb-16">
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
                  <p className="text-5xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-2">500+</p>
                  <p className="text-gray-400">Hours Capacity Analyzed</p>
                </div>
              </div>
            </div>

            {/* The Problem - Punchy */}
            <div className="glass rounded-3xl p-8 max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold mb-4 text-orange-400">The Problem</h3>
              <div className="space-y-3 text-gray-300">
                <p>Leading PI Planning for Pfizer & Kroger clients = Excel hell.</p>
                <p className="text-lg">📊 12 spreadsheets • 5 squads • 200+ tickets • Zero visibility</p>
                <p>Managers constantly asking: <span className="italic text-gray-400">"Can you share the latest version?"</span></p>
                <p className="text-white font-semibold">One broken macro = hours of debugging.</p>
              </div>
            </div>

            {/* The Solution - Fast */}
            <div className="glass rounded-3xl p-8 max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold mb-4 text-green-400">The Solution</h3>
              <div className="space-y-3 text-gray-300">
                <p className="text-lg text-white">After the 3rd "share spreadsheet" Slack? I built it myself.</p>
                <p>Full-stack release planning SaaS tool built with <span className="text-cyan-400 font-semibold">React + TypeScript</span> using AI-assisted development (GitHub Copilot).</p>
                <p>Engineered <span className="text-cyan-400 font-semibold">release confidence scoring algorithm</span> integrating team capacity, PTO, holidays, and velocity trends—85% accuracy predicting delivery feasibility.</p>
                <p className="text-white">Think: Pre-flight checklist for quarterly releases. Achieves 500+ hours of simulated capacity analysis.</p>
              </div>
            </div>

            {/* Features Grid */}
            <div>
              <h3 className="text-2xl font-bold text-center mb-8">What It Does</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="group glass glass-hover rounded-2xl p-6 hover:scale-105 transition-all"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all">
                      <feature.icon className="text-white" size={24} />
                    </div>
                    <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                    <p className="text-gray-400">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Why Building Matters - Punchy */}
            <div className="relative glass rounded-3xl p-8 sm:p-10 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-8 text-center">Why I Built It (Instead of Writing a PRD)</h3>
                <div className="max-w-3xl mx-auto space-y-6">
                  {/* Traditional PM Approach */}
                  <div className="flex items-center justify-center gap-3 text-gray-300 flex-wrap">
                    <span className="text-lg font-bold text-gray-500">Most PMs</span>
                    <span className="text-lg">Write spec</span>
                    <span className="text-cyan-400">→</span>
                    <span className="text-lg">Wait 6 months for engineering resources</span>
                  </div>
                  
                  {/* My Approach */}
                  <div className="flex items-center justify-center gap-3 text-white flex-wrap">
                    <span className="text-lg font-bold text-cyan-400">Me</span>
                    <span className="text-lg">Vibecode MVP in 3 weeks</span>
                    <span className="text-cyan-400">→</span>
                    <span className="text-lg">Get real feedback</span>
                    <span className="text-cyan-400">→</span>
                    <span className="text-lg">Iterate</span>
                  </div>
                  
                  <div className="pt-4 mt-6 border-t border-white/10">
                    <p className="text-cyan-400 font-semibold text-center text-xl">
                      Building removes the inertia of experimentation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}