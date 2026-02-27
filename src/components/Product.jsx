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
    <section id="product" className="py-32 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-semibold mb-6 tracking-tight">
            Smart Release Planner
          </h2>
          <p className="text-2xl sm:text-3xl text-zinc-400 mb-4">Pre-JIRA clarity for chaotic releases</p>
          <p className="text-lg text-zinc-500 max-w-2xl mx-auto mb-12">
            Built in 3 weeks to solve my own Excel hell. Now live in production.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://smart-release-planner1.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-10 py-5 bg-white text-black rounded-full text-lg font-semibold hover:bg-zinc-100 transition-smooth hover:scale-[1.02]"
            >
              Try it live
              <ExternalLink size={20} />
            </a>
            <a
              href="https://github.com/shekhar992/smart-release-planner"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-10 py-5 border-2 border-zinc-700 text-white rounded-full text-lg font-semibold hover:border-zinc-500 hover:bg-zinc-900/50 transition-smooth hover:scale-[1.02]"
            >
              GitHub
              <ExternalLink size={20} />
            </a>
          </div>
        </div>

        {/* App Screenshots Marquee */}
        <div className="mb-20 relative overflow-hidden">
          <div className="text-center mb-8">
            <p className="text-zinc-500 text-sm">Hover to pause</p>
          </div>
          
          {/* Marquee Container */}
          <div className="relative">
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>
            
            {/* Scrolling container */}
            <div className="overflow-hidden py-4">
              <div className="flex gap-6 animate-marquee pause-marquee">
                {/* First set of images */}
                {[1, 2, 3, 4, 5].map((num) => (
                  <div key={`first-${num}`} className="flex-shrink-0 w-[600px]">
                    <div className="apple-card hover:scale-[1.02] transition-smooth">
                      <img 
                        src={`/screenshots/capability-${num}.png`}
                        alt={`Smart Release Planner - Capability ${num}`}
                        className="w-full rounded-3xl"
                      />
                    </div>
                  </div>
                ))}
                {/* Duplicate set for seamless loop */}
                {[1, 2, 3, 4, 5].map((num) => (
                  <div key={`second-${num}`} className="flex-shrink-0 w-[600px]">
                    <div className="apple-card hover:scale-[1.02] transition-smooth">
                      <img 
                        src={`/screenshots/capability-${num}.png`}
                        alt={`Smart Release Planner - Capability ${num}`}
                        className="w-full rounded-3xl"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Collapsible Details Toggle */}
        <div className="text-center mb-12">
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-zinc-700 text-white rounded-full text-lg font-semibold hover:border-zinc-500 hover:bg-zinc-900/50 transition-smooth"
          >
            {showDetails ? 'Hide details' : 'How I built it'}
            {showDetails ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </button>
        </div>

        {/* Collapsible Details Section */}
        {showDetails && (
          <div className="space-y-20 animate-fadeInUp">
            {/* Why I Built It - Origin Story */}
            <div className="text-center">
              <h3 className="text-4xl sm:text-5xl font-semibold mb-6">
                Why I built my own tool
              </h3>
              <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
                Excel-based PI Planning for my Fortune 500 clients wasn't working. So I fixed it.
              </p>
            </div>

            {/* Pain Points Grid */}
            <div className="grid md:grid-cols-3 gap-6">
              {painPoints.map((point, idx) => (
                <div 
                  key={idx} 
                  className="apple-card hover:scale-[1.02] transition-smooth text-center p-8"
                >
                  <point.icon className="mx-auto mb-4 text-zinc-400" size={32} />
                  <h4 className="text-xl font-semibold mb-3 text-white">{point.title}</h4>
                  <p className="text-zinc-400">{point.description}</p>
                </div>
              ))}
            </div>

            {/* The "Aha" Moment */}
            <div className="max-w-3xl mx-auto text-center py-12">
              <p className="text-3xl sm:text-4xl font-semibold text-white mb-4">
                "Why am I gatekeeping a Google Sheet?"
              </p>
              <p className="text-xl text-zinc-400">
                After hundreds of sprints, I knew the problem better than anyone. So I built the fix.
              </p>
            </div>

            {/* How I Shipped It */}
            <div className="text-center">
              <h3 className="text-4xl sm:text-5xl font-semibold mb-6">
                Shipped in 3 weeks
              </h3>
              <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
                No dev team. No sprint planning. Just vibecoding with AI.
              </p>
            </div>

            {/* Timeline */}
            <div className="space-y-4">
              {steps.map((step, idx) => (
                <div 
                  key={idx} 
                  className="apple-card hover:scale-[1.01] transition-smooth p-8"
                >
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                      <step.icon className="text-black" size={24} />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-2xl font-semibold mb-2 text-white">{step.title}</h4>
                      <p className="text-zinc-400 mb-3">{step.description}</p>
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-900 rounded-full text-zinc-300 text-sm font-medium">
                        {step.tool}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* The Edge Stats */}
            <div className="grid sm:grid-cols-3 gap-8 text-center">
              <div>
                <p className="text-6xl font-semibold text-white mb-3">0</p>
                <p className="text-zinc-400">PRDs Written</p>
              </div>
              <div>
                <p className="text-6xl font-semibold text-white mb-3">3</p>
                <p className="text-zinc-400">Weeks to Ship</p>
              </div>
              <div>
                <p className="text-6xl font-semibold text-white mb-3">500+</p>
                <p className="text-zinc-400">Hours Capacity Analyzed</p>
              </div>
            </div>

            {/* The Problem - Punchy */}
            <div className="apple-card p-10 max-w-3xl mx-auto">
              <h3 className="text-3xl font-semibold mb-6 text-white">The problem</h3>
              <div className="space-y-4 text-lg text-zinc-300">
                <p>Leading PI Planning for Pfizer & Kroger clients = Excel hell.</p>
                <p>📊 12 spreadsheets • 5 squads • 200+ tickets • Zero visibility</p>
                <p>Managers constantly asking: <span className="italic text-zinc-400">"Can you share the latest version?"</span></p>
                <p className="text-white font-semibold">One broken macro = hours of debugging.</p>
              </div>
            </div>

            {/* The Solution - Fast */}
            <div className="apple-card p-10 max-w-3xl mx-auto">
              <h3 className="text-3xl font-semibold mb-6 text-white">The solution</h3>
              <div className="space-y-4 text-lg text-zinc-300">
                <p className="text-white">After the 3rd "share spreadsheet" Slack? I built it myself.</p>
                <p>Full-stack release planning SaaS tool built with React + TypeScript using AI-assisted development (GitHub Copilot).</p>
                <p>Engineered release confidence scoring algorithm integrating team capacity, PTO, holidays, and velocity trends—85% accuracy predicting delivery feasibility.</p>
                <p className="text-white">Think: Pre-flight checklist for quarterly releases. Achieves 500+ hours of simulated capacity analysis.</p>
              </div>
            </div>

            {/* Features Grid */}
            <div>
              <h3 className="text-3xl font-semibold text-center mb-12">What it does</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="apple-card hover:scale-[1.02] transition-smooth text-center p-8"
                  >
                    <feature.icon className="mx-auto mb-4 text-zinc-400" size={32} />
                    <h3 className="text-lg font-semibold mb-2 text-white">{feature.title}</h3>
                    <p className="text-zinc-400">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Why Building Matters - Punchy */}
            <div className="max-w-3xl mx-auto space-y-10">
              <h3 className="text-3xl font-semibold text-center">Why I built it (instead of writing a PRD)</h3>
              
              <div className="space-y-6 text-center text-lg">
                {/* Traditional PM Approach */}
                <div className="flex items-center justify-center gap-3 text-zinc-400 flex-wrap">
                  <span className="font-semibold text-zinc-500">Most PMs</span>
                  <span>Write spec</span>
                  <span>→</span>
                  <span>Transfer to eng</span>
                  <span>→</span>
                  <span>Wait 6 months</span>
                </div>
                
                {/* My Approach */}
                <div className="flex items-center justify-center gap-3 text-white flex-wrap">
                  <span className="font-semibold">Me</span>
                  <span>Vibecode MVP in 3 weeks</span>
                  <span>→</span>
                  <span>Get feedback</span>
                  <span>→</span>
                  <span>Iterate</span>
                </div>
                
                <div className="pt-8 mt-8 border-t border-zinc-800">
                  <p className="text-white font-semibold text-2xl">
                    Building removes the inertia of experimentation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}