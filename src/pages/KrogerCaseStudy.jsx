import { ArrowLeft, Clock, CheckCircle2, XCircle, AlertTriangle, TrendingUp, Users, Zap, Target, Building2, Code2, GitBranch } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function KrogerCaseStudy() {
  const [activeSection, setActiveSection] = useState('summary');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    // Force scroll to top with multiple attempts
    window.scrollTo(0, 0)
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
    
    // Throttle function to limit scroll handler calls
    let throttleTimer;
    const throttle = (callback, delay = 100) => {
      return (...args) => {
        if (throttleTimer) return;
        throttleTimer = setTimeout(() => {
          callback(...args);
          throttleTimer = null;
        }, delay);
      };
    };

    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const scrolled = window.scrollY;
      const progress = (scrolled / documentHeight) * 100;
      setScrollProgress(progress);

      // Update active section based on scroll position
      const sections = ['summary', 'context', 'challenge', 'strategy', 'execution', 'human-side', 'failure', 'takeaways', 'impact'];
      
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    const throttledScroll = throttle(handleScroll, 100);
    window.addEventListener('scroll', throttledScroll, { passive: true });
    handleScroll(); // Initial call
    return () => window.removeEventListener('scroll', throttledScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 130;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };

  const sections = [
    { id: 'summary', label: 'Executive Summary' },
    { id: 'context', label: 'Spotting the Pattern' },
    { id: 'challenge', label: 'Fear of the Unknown' },
    { id: 'strategy', label: 'Building the Foundation' },
    { id: 'execution', label: 'The Big Moves' },
    { id: 'human-side', label: 'Overcoming Resistance' },
    { id: 'failure', label: 'The Allocation Failure' },
    { id: 'takeaways', label: 'Key Takeaways' },
    { id: 'impact', label: 'Impact & Legacy' },
  ];

  return (
    <div className="min-h-screen bg-black text-zinc-100">
      {/* Reading Progress Bar */}
      <div className="fixed top-14 left-0 right-0 h-1 bg-zinc-900 z-50">
        <div 
          className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Sticky Header */}
      <div className="sticky top-14 bg-black/95 backdrop-blur-xl border-b border-zinc-800 z-40">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link 
            to="/#case-studies"
            className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors"
          >
            <ArrowLeft size={20} />
            <span>Back to Portfolio</span>
          </Link>
          <div className="flex items-center gap-2 text-sm text-zinc-500">
            <Clock size={16} />
            <span>8 min read</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:flex lg:gap-12 pt-14">
        {/* Table of Contents - Desktop Sidebar */}
        <aside className="hidden lg:block lg:w-64 flex-shrink-0">
          <div className="sticky top-32 space-y-1">
            <p className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-4">Contents</p>
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`block w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                  activeSection === section.id
                    ? 'bg-blue-500/10 text-blue-400 font-medium'
                    : 'text-zinc-400 hover:text-white hover:bg-zinc-900'
                }`}
              >
                {section.label}
              </button>
            ))}
          </div>
        </aside>

        {/* Main Content */}
        <article className="flex-1 max-w-4xl">
          {/* Hero Section */}
          <header className="mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium mb-6">
              <Building2 size={16} />
              <span>Deloitte • Retail • Platform PM</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Building a Platform to Scale 15,000 Retail Devices
            </h1>
            
            <p className="text-xl text-zinc-400 mb-8 leading-relaxed">
              How I eliminated duplicate backend work across 2 frontline apps, doubled deployment velocity, 
              and saved 45 minutes per worker per week—all while scaling from 100 to 200 stores.
            </p>

            <div className="flex flex-wrap gap-3">
              {['Platform Strategy', 'Stakeholder Alignment', 'Technical Trade-offs', 'Operational Excellence', 'Change Management'].map((skill) => (
                <span key={skill} className="px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-full text-sm text-zinc-300">
                  {skill}
                </span>
              ))}
            </div>
          </header>

          {/* Executive Summary */}
          <section id="summary" className="mb-20">
            <SectionHeader 
              icon={Target}
              title="Executive Summary"
              color="purple"
            />

            {/* Key Metrics Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              <MetricCard 
                number="30%"
                label="Faster Delivery"
                sublabel="via shared platform"
                color="emerald"
              />
              <MetricCard 
                number="4.2% → 1.1%"
                label="Crash Rate Drop"
                sublabel="$500K saved"
                color="blue"
              />
              <MetricCard 
                number="2x"
                label="Deployment Velocity"
                sublabel="monthly → bi-weekly"
                color="cyan"
              />
              <MetricCard 
                number="12"
                label="Platform Capabilities"
                sublabel="in 8 months"
                color="purple"
              />
              <MetricCard 
                number="45 min"
                label="Saved Per Worker/Week"
                sublabel="efficiency gains"
                color="amber"
              />
              <MetricCard 
                number="98%"
                label="Platform Uptime"
                sublabel="throughout transformation"
                color="emerald"
              />
            </div>

            <Callout type="success">
              <strong>The Challenge:</strong> Two frontline apps were independently building duplicate backend features, 
              slowing delivery and wasting engineering resources across 200 retail stores with 15,000 Android devices.
            </Callout>

            <Callout type="info">
              <strong>The Solution:</strong> Pitched and built a shared platform approach, consolidating common capabilities 
              to serve both app teams while maintaining independent feature velocity.
            </Callout>

            <div className="prose prose-invert prose-lg max-w-none">
              <p className="text-zinc-300 leading-relaxed">
                <strong className="text-white">Scale:</strong> 200 stores, ~15,000 Android devices, 2 frontline apps serving 
                part-time and hourly store workers managing inventory, task assignment, and attendance.
              </p>
            </div>
          </section>

          {/* Context: Spotting the Pattern */}
          <section id="context" className="mb-20">
            <SectionHeader 
              icon={AlertTriangle}
              title="Context: Spotting the Pattern"
              color="red"
            />

            <div className="prose prose-invert prose-lg max-w-none space-y-6">
              <p className="text-zinc-300 leading-relaxed">
                When I joined the retail client's modernization project at Deloitte in 2022, I noticed something odd during sprint planning.
              </p>

              <div className="grid md:grid-cols-2 gap-6 not-prose">
                <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
                  <div className="text-sm font-semibold text-red-400 mb-2">App Team A</div>
                  <p className="text-zinc-300">Building an auto-allocation feature to assign tasks based on available workers.</p>
                </div>
                <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
                  <div className="text-sm font-semibold text-red-400 mb-2">App Team B</div>
                  <p className="text-zinc-300">Building... the exact same feature. With their own logic. In parallel.</p>
                </div>
              </div>

              <Callout type="warning">
                <strong>Neither team knew the other was building it.</strong> This wasn't a one-time miss. 
                It was systematic duplication happening because no shared architecture existed.
              </Callout>

              <h3 className="text-2xl font-semibold text-white mt-8 mb-4">The Scale of the Problem</h3>
              
              <ul className="space-y-3 text-zinc-300">
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">•</span>
                  <span><strong className="text-white">200 stores</strong> across multiple states</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">•</span>
                  <span><strong className="text-white">40-60 Android devices per store</strong> (~15,000 total devices)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">•</span>
                  <span><strong className="text-white">2 frontline apps</strong> used by part-time and hourly store workers</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">•</span>
                  <span><strong className="text-white">Duplicate features</strong> causing delivery delays and resource waste</span>
                </li>
              </ul>

              <InsightCard>
                <strong>The Opportunity:</strong> I pitched a simple idea to my engineering team and client PMs: 
                "What if we built common components once, and both apps used them?"
                <br /><br />
                They loved it. But turning that brainstorm into reality took 4-5 months of convincing stakeholders to embrace the unknown.
              </InsightCard>
            </div>
          </section>

          {/* The Challenge: Fear of the Unknown */}
          <section id="challenge" className="mb-20">
            <SectionHeader 
              icon={Users}
              title="The Challenge: Fear of the Unknown"
              color="red"
            />

            <div className="prose prose-invert prose-lg max-w-none space-y-6">
              <h3 className="text-2xl font-semibold text-white">The Pitch Process</h3>

              <p className="text-zinc-300 leading-relaxed">
                <strong className="text-white">Who I pitched to:</strong>
              </p>

              <ul className="space-y-2 text-zinc-300">
                <li>• Engineering leads (backend, data engineers, QA)</li>
                <li>• Client Product Owners from both app teams</li>
                <li>• Business stakeholders tracking store operations</li>
                <li>• Store managers who would use the apps daily</li>
              </ul>

              <div className="bg-red-500/5 border border-red-500/20 rounded-xl p-6 not-prose">
                <h4 className="text-lg font-semibold text-red-400 mb-4">The Resistance</h4>
                <div className="space-y-3 text-zinc-300">
                  <div className="flex items-start gap-3">
                    <XCircle size={20} className="text-red-400 mt-0.5 flex-shrink-0" />
                    <span>"How do we even run a platform team?" → New operating model, unclear roles</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <XCircle size={20} className="text-red-400 mt-0.5 flex-shrink-0" />
                    <span>"Will this slow us down initially?" → Fear of refactoring disrupting velocity</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <XCircle size={20} className="text-red-400 mt-0.5 flex-shrink-0" />
                    <span>Client hesitation: "We don't know what we don't know"</span>
                  </div>
                </div>
              </div>

              <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-xl p-6 not-prose">
                <h4 className="text-lg font-semibold text-emerald-400 mb-4">How I Won Them Over</h4>
                <div className="space-y-3 text-zinc-300">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 size={20} className="text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span><strong>Pilot in a new store opening</strong> → Low-risk environment to test the approach</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 size={20} className="text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span><strong>Small proof-of-concept</strong> → Built one shared component, showed time savings</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 size={20} className="text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span><strong>Transparent trade-offs</strong> → Acknowledged upfront investment for long-term gains</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 size={20} className="text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span><strong>Business case</strong> → Showed how duplicate work was burning engineering time</span>
                  </div>
                </div>
              </div>

              <Callout type="info">
                <strong>Timeline:</strong> It took 4-5 months from pitch to materialization. 
                The client's willingness to experiment was crucial to making this happen.
              </Callout>
            </div>
          </section>

          {/* Strategic Decisions */}
          <section id="strategy" className="mb-20">
            <SectionHeader 
              icon={GitBranch}
              title="Strategic Decisions: Building the Foundation"
              color="blue"
            />

            <div className="prose prose-invert prose-lg max-w-none space-y-8">
              <DecisionCard
                number="1"
                title="Platform Team Structure"
                color="blue"
              >
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">The Setup:</h4>
                    <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6">
                      <p className="text-zinc-300 mb-4"><strong className="text-white">6-person platform team:</strong></p>
                      <ul className="space-y-2 text-zinc-300">
                        <li>• Data Engineers (data model, infrastructure)</li>
                        <li>• Backend Engineers (APIs, shared services)</li>
                        <li>• Data Scientists (allocation logic, predictive features)</li>
                        <li>• QA (testing shared components)</li>
                      </ul>
                      <p className="text-zinc-300 mt-4">
                        <strong className="text-white">No UI developers</strong> → Platform focused on backend/core functionality
                      </p>
                      <p className="text-zinc-300 mt-2">
                        <strong className="text-white">2 app teams</strong> with more UI-focused developers consuming platform capabilities
                      </p>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Coordination Model:</h4>
                    <ul className="space-y-2 text-zinc-300">
                      <li>• <strong className="text-white">Quarterly syncs</strong> with client PMs to align roadmaps</li>
                      <li>• <strong className="text-white">Monthly prioritization</strong> across both app teams</li>
                      <li>• <strong className="text-white">Sprint planning internally</strong> within platform team</li>
                      <li>• <strong className="text-white">My role:</strong> Tie-breaker and facilitator (client PMs were final decision-makers)</li>
                    </ul>
                  </div>
                </div>
              </DecisionCard>

              <DecisionCard
                number="2"
                title="Prioritization Framework"
                color="purple"
              >
                <div className="space-y-4">
                  <Callout type="warning">
                    <strong>The Reality:</strong> "12 new capabilities delivered in 8 months" sounds impressive. 
                    The truth? That number is inflated.
                  </Callout>

                  <p className="text-zinc-300">What actually happened:</p>
                  <ul className="space-y-2 text-zinc-300">
                    <li>• App Teams brought feature requests</li>
                    <li>• I synced with their PMs to understand business drivers</li>
                    <li>• <strong className="text-white">When conflicts arose:</strong> Presented capacity trade-offs to business stakeholders</li>
                    <li>• <strong className="text-white">Business had final say</strong> on priorities</li>
                    <li>• Sometimes <strong className="text-amber-400">deprioritized Team A's features</strong> to accommodate Team B based on business urgency</li>
                  </ul>

                  <InsightCard>
                    <strong>What I learned (the hard way):</strong>
                    <br /><br />
                    If I could redo this project, I'd create a <strong>published prioritization matrix</strong> that both app teams could see upfront:
                    <br /><br />
                    <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4 mt-3">
                      <p className="font-mono text-sm text-cyan-400">Impact vs Effort Quadrant:</p>
                      <ul className="mt-2 space-y-1 text-sm">
                        <li className="text-emerald-400">• High Impact + Low Effort = Build immediately</li>
                        <li className="text-blue-400">• High Impact + High Effort = Discuss with business</li>
                        <li className="text-zinc-500">• Low Impact = App team builds independently</li>
                      </ul>
                    </div>
                    <br />
                    Instead of arguing priority in every sync, teams would <strong>pre-assess their requests</strong> against the framework. 
                    Only top-right quadrant items get platform team discussion.
                    <br /><br />
                    <strong className="text-emerald-400">Result:</strong> Less time debating, faster feature rollout.
                  </InsightCard>
                </div>
              </DecisionCard>
            </div>
          </section>

          {/* Execution */}
          <section id="execution" className="mb-20">
            <SectionHeader 
              icon={Zap}
              title="Execution: The Big Moves"
              color="amber"
            />

            <div className="prose prose-invert prose-lg max-w-none space-y-8">
              <h3 className="text-2xl font-semibold text-white">The Scaling Challenge (100 → 200 Stores)</h3>

              <p className="text-zinc-300 leading-relaxed">
                As the client expanded from 100 stores to 200 stores, we hit a wall.
              </p>

              <div className="grid md:grid-cols-3 gap-4 not-prose">
                <div className="bg-red-500/5 border border-red-500/20 rounded-lg p-4">
                  <AlertTriangle size={24} className="text-red-400 mb-2" />
                  <p className="text-sm font-semibold text-white">Slow Response Times</p>
                  <p className="text-xs text-zinc-400 mt-1">App performance degraded</p>
                </div>
                <div className="bg-red-500/5 border border-red-500/20 rounded-lg p-4">
                  <AlertTriangle size={24} className="text-red-400 mb-2" />
                  <p className="text-sm font-semibold text-white">Wrong Assignments</p>
                  <p className="text-xs text-zinc-400 mt-1">Logic occasionally failed</p>
                </div>
                <div className="bg-red-500/5 border border-red-500/20 rounded-lg p-4">
                  <AlertTriangle size={24} className="text-red-400 mb-2" />
                  <p className="text-sm font-semibold text-white">Increased Crashes</p>
                  <p className="text-xs text-zinc-400 mt-1">4.2% crash rate as usage grew</p>
                </div>
              </div>

              <h4 className="text-xl font-semibold text-white mt-6">The Diagnosis (RCA):</h4>
              
              <p className="text-zinc-300">My tech team identified the root cause:</p>
              <ul className="space-y-2 text-zinc-300">
                <li>• <strong className="text-white">Old data model</strong> couldn't handle 2x scale</li>
                <li>• Need to upgrade infrastructure: <strong className="text-cyan-400">Redis cache, Kubernetes optimization</strong></li>
                <li>• Some features weren't optimized for latest code standards</li>
              </ul>

              <Callout type="info">
                <strong>Credit where it's due:</strong> This wasn't my idea—it came from my core tech team. 
                But I owned the <strong>rollout strategy</strong>.
              </Callout>

              <h4 className="text-xl font-semibold text-white mt-6">The Fix: Phased Rollout Strategy</h4>

              <div className="space-y-4 not-prose">
                <ApproachCard
                  step="1"
                  title="POC in Low-Traffic Stores"
                  description="Tested new data model in less busy states first"
                  color="blue"
                />
                <ApproachCard
                  step="2"
                  title="Measure Before/After Metrics"
                  description="Response time, allocation accuracy, uptime benchmarks"
                  color="purple"
                />
                <ApproachCard
                  step="3"
                  title="Iterative Rollout"
                  description="Low-traffic states → Metropolitan areas gradually"
                  color="cyan"
                />
                <ApproachCard
                  step="4"
                  title="Monitor Crash Rates"
                  description="Track stability at each phase before expanding"
                  color="emerald"
                />
              </div>

              <h3 className="text-2xl font-semibold text-white mt-12 mb-6">The Results: New Data Model Changes</h3>

              <div className="grid sm:grid-cols-2 gap-6 not-prose">
                <ResultCard
                  icon={TrendingUp}
                  title="30% Time Saved"
                  description="Faster response times, better allocation logic, less downtime across all workflows"
                  color="emerald"
                />
                <ResultCard
                  icon={CheckCircle2}
                  title="Crash Rate: 4.2% → 1.1%"
                  description="Prevented ~$500K in lost productivity"
                  color="blue"
                />
                <ResultCard
                  icon={Target}
                  title="98% Platform Uptime"
                  description="Maintained during entire migration process"
                  color="purple"
                />
                <ResultCard
                  icon={Zap}
                  title="Monthly → Bi-weekly Releases"
                  description="2x deployment velocity through strategic planning"
                  color="cyan"
                />
              </div>

              <InsightCard>
                <strong>How bi-weekly releases worked:</strong>
                <br /><br />
                We realized that a <strong>shared platform team</strong> meant release planning across both apps. 
                We strategically timed rollouts:
                <ul className="mt-3 space-y-2">
                  <li>• Features built for <strong>Team A</strong> would benefit <strong>Team B</strong> down the line (and vice versa)</li>
                  <li>• Coordinated deployments to avoid conflicts</li>
                  <li>• Client's experimental attitude helped us iterate quickly</li>
                </ul>
              </InsightCard>
            </div>
          </section>

          {/* The Human Side */}
          <section id="human-side" className="mb-20">
            <SectionHeader 
              icon={Users}
              title="The Human Side: Overcoming Resistance"
              color="amber"
            />

            <div className="prose prose-invert prose-lg max-w-none space-y-6">
              <h3 className="text-2xl font-semibold text-white">The Worker Pushback</h3>

              <p className="text-zinc-300 leading-relaxed">
                When we started moving from <strong className="text-white">manual paper sheets → app-based task management</strong>, 
                we hit cultural resistance.
              </p>

              <div className="bg-red-500/5 border border-red-500/20 rounded-xl p-6 not-prose">
                <h4 className="text-lg font-semibold text-red-400 mb-4">The Fear</h4>
                <ul className="space-y-3 text-zinc-300">
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 mt-1">•</span>
                    <span>Part-time workers felt <strong className="text-white">threatened by micromanagement</strong></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 mt-1">•</span>
                    <span>Hourly workers worried apps would track them too closely</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 mt-1">•</span>
                    <span>Classic inertia: "Why change what works?"</span>
                  </li>
                </ul>
              </div>

              <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-xl p-6 not-prose">
                <h4 className="text-lg font-semibold text-emerald-400 mb-4">How We Addressed It</h4>
                <div className="space-y-3 text-zinc-300">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 size={20} className="text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span><strong>Identified early adopter cohorts</strong> who were open to new tech</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 size={20} className="text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span><strong>Educated them first</strong> → Showed the bright side</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 size={20} className="text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span><strong>Framed as solving misinformation:</strong> "Tech creates trust, not surveillance"</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 size={20} className="text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span><strong>Store manager testimonials:</strong> Operations leads loved not manually sifting through attendance docs</span>
                  </div>
                </div>
              </div>

              <Callout type="success">
                <strong>Feedback that stuck with me:</strong>
                <br /><br />
                Store managers said they had <strong>more visibility into their workforce</strong> and could plan shifts better. 
                That's when I realized: This wasn't about technology. It was about giving frontline leaders the tools to do their jobs well.
              </Callout>

              <InsightCard>
                <strong>The transformation:</strong> Moving from physical papers to app-based work made me proud. 
                Seeing store managers embrace the change felt like real impact—not just shipping features, but improving daily workflows 
                for thousands of workers.
              </InsightCard>
            </div>
          </section>

          {/* What Didn't Work */}
          <section id="failure" className="mb-20">
            <SectionHeader 
              icon={XCircle}
              title="What Didn't Work: The Allocation Failure"
              color="red"
            />

            <div className="prose prose-invert prose-lg max-w-none space-y-6">
              <h3 className="text-2xl font-semibold text-white">The Incident</h3>

              <p className="text-zinc-300 leading-relaxed">
                We optimized the <strong className="text-white">auto-allocation logic</strong> to improve task assignment speed.
              </p>

              <Callout type="error">
                <strong>What we didn't catch in testing:</strong>
                <br /><br />
                The new logic occasionally assigned tasks to workers who were <strong>on their day off</strong>.
              </Callout>

              <div className="bg-red-500/5 border border-red-500/20 rounded-xl p-6 not-prose">
                <h4 className="text-lg font-semibold text-red-400 mb-4">The Consequence</h4>
                <ul className="space-y-3 text-zinc-300">
                  <li className="flex items-start gap-3">
                    <XCircle size={20} className="text-red-400 mt-0.5 flex-shrink-0" />
                    <span><strong className="text-white">Understocked stores</strong> → Tasks not completed</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <XCircle size={20} className="text-red-400 mt-0.5 flex-shrink-0" />
                    <span><strong className="text-white">Underutilized pallets</strong> → Inventory sitting idle</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <XCircle size={20} className="text-red-400 mt-0.5 flex-shrink-0" />
                    <span><strong className="text-white">Store reported the issue</strong> → We realized via field feedback, not monitoring</span>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-500/5 border border-blue-500/20 rounded-xl p-6 not-prose">
                <h4 className="text-lg font-semibold text-blue-400 mb-4">The Fix</h4>
                <div className="space-y-3 text-zinc-300">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 size={20} className="text-blue-400 mt-0.5 flex-shrink-0" />
                    <span><strong>Root cause analysis:</strong> Logic didn't check PTO/day-off status properly</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 size={20} className="text-blue-400 mt-0.5 flex-shrink-0" />
                    <span><strong>Quick patch deployed</strong> → Added validation layer</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 size={20} className="text-blue-400 mt-0.5 flex-shrink-0" />
                    <span><strong>Improved QA process:</strong> Added "day-off scenarios" to test cases</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 size={20} className="text-blue-400 mt-0.5 flex-shrink-0" />
                    <span><strong>Losses were minimal</strong> because we caught it fast</span>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-white mt-12">The Learning</h3>

              <Callout type="warning">
                <strong>Platform features affect multiple apps and hundreds of stores.</strong>
                <br /><br />
                A bug in shared logic doesn't just break one feature—it ripples across the entire ecosystem.
              </Callout>

              <InsightCard>
                <strong>What I'd do differently:</strong>
                <br />
                <ul className="mt-3 space-y-2">
                  <li>• <strong>Shadow mode testing</strong> → Run new allocation logic in parallel with old logic, compare results</li>
                  <li>• <strong>Store-level dashboards</strong> → Give managers visibility into task allocation anomalies</li>
                  <li>• <strong>Faster feedback loops</strong> → Weekly check-ins with 5-10 pilot stores, not just relying on escalations</li>
                </ul>
              </InsightCard>
            </div>
          </section>

          {/* Key Takeaways */}
          <section id="takeaways" className="mb-20">
            <SectionHeader 
              icon={Target}
              title="Key Takeaways: What I Learned"
              color="purple"
            />

            <div className="prose prose-invert prose-lg max-w-none space-y-6">
              <TakeawayCard
                number="1"
                title="Platform thinking is about saying 'no' strategically"
                color="blue"
              >
                <p className="text-zinc-300">
                  When you're supporting multiple teams, <strong className="text-white">you can't build everything</strong>. 
                  Learning to push back with data (capacity trade-offs, business priority alignment) is a superpower.
                </p>
                <p className="text-zinc-300 mt-3">
                  My published prioritization framework idea? That came from too many meetings arguing about feature priority. 
                  Pre-assessment would have saved hours.
                </p>
              </TakeawayCard>

              <TakeawayCard
                number="2"
                title="Operational excellence > flashy features"
                color="emerald"
              >
                <p className="text-zinc-300">
                  The crash rate drop (4.2% → 1.1%) and uptime (98%) are unsexy metrics. But <strong className="text-white">they prevented 
                  $500K in lost productivity</strong> and kept 15,000 devices running smoothly.
                </p>
                <p className="text-zinc-300 mt-3">
                  For platform PMs, <strong className="text-emerald-400">stability is a feature</strong>.
                </p>
              </TakeawayCard>

              <TakeawayCard
                number="3"
                title="Change management is half the job"
                color="amber"
              >
                <p className="text-zinc-300">
                  The worker resistance taught me: <strong className="text-white">Technology doesn't fail because of bugs. 
                  It fails because humans don't trust it.</strong>
                </p>
                <p className="text-zinc-300 mt-3">
                  Early adopters, education, and reframing the narrative (visibility ≠ micromanagement) were as critical as the product itself.
                </p>
              </TakeawayCard>

              <TakeawayCard
                number="4"
                title="Set up processes for your successor"
                color="purple"
              >
                <p className="text-zinc-300">
                  After I rolled off, the platform kept running smoothly. Why? <strong className="text-white">Clear processes, cadences, 
                  and communication norms</strong> I established early.
                </p>
                <p className="text-zinc-300 mt-3">
                  Good PM work should run like clockwork, even when you're gone.
                </p>
              </TakeawayCard>
            </div>
          </section>

          {/* Impact & Legacy */}
          <section id="impact" className="mb-20">
            <SectionHeader 
              icon={TrendingUp}
              title="Impact & Legacy"
              color="emerald"
            />

            <div className="prose prose-invert prose-lg max-w-none space-y-8">
              <h3 className="text-2xl font-semibold text-white">Performance Metrics</h3>
              <div className="grid sm:grid-cols-2 gap-4 not-prose">
                <StatCard 
                  value="30%"
                  label="Faster workflows"
                  detail="Response time, allocation logic, uptime improvements"
                />
                <StatCard 
                  value="4.2% → 1.1%"
                  label="Crash rate drop"
                  detail="3.1 percentage point improvement"
                />
                <StatCard 
                  value="2x"
                  label="Deployment velocity"
                  detail="Monthly → bi-weekly releases"
                />
                <StatCard 
                  value="98%"
                  label="Platform uptime"
                  detail="Throughout transformation"
                />
              </div>

              <h3 className="text-2xl font-semibold text-white mt-8">Scale Metrics</h3>
              <div className="grid sm:grid-cols-2 gap-4 not-prose">
                <StatCard 
                  value="12"
                  label="Platform capabilities"
                  detail="Delivered in 8 months"
                />
                <StatCard 
                  value="15,000"
                  label="Devices"
                  detail="Across 200 stores"
                />
                <StatCard 
                  value="45 min"
                  label="Saved per worker/week"
                  detail="Frontline efficiency gains"
                />
                <StatCard 
                  value="6"
                  label="Platform team size"
                  detail="Supporting 2 app teams"
                />
              </div>

              <h3 className="text-2xl font-semibold text-white mt-8">Business Metrics</h3>
              <div className="grid sm:grid-cols-3 gap-4 not-prose">
                <StatCard 
                  value="~$500K"
                  label="Productivity loss prevented"
                  detail="Via crash rate reduction"
                />
                <StatCard 
                  value="100 → 200"
                  label="Store scale-up"
                  detail="Supported by infrastructure"
                />
                <StatCard 
                  value="0"
                  label="Major outages"
                  detail="During data model migration"
                />
              </div>

              <h3 className="text-2xl font-semibold text-white mt-8">Legacy</h3>
              
              <Callout type="success">
                <strong>What happened after I left:</strong>
                <br /><br />
                The platform continued running smoothly after my rolloff. The work operated like clockwork because we'd established:
                <ul className="mt-3 space-y-2">
                  <li>• <strong>Quarterly roadmap syncs</strong> with all stakeholders</li>
                  <li>• <strong>Monthly prioritization</strong> processes across teams</li>
                  <li>• <strong>Sprint planning cadences</strong> and communication norms</li>
                  <li>• <strong>Clear decision-making frameworks</strong> for conflict resolution</li>
                </ul>
              </Callout>

              <InsightCard>
                <strong>My proudest achievement:</strong> I didn't just build a platform. I built a system that outlived my tenure. 
                That's the mark of good platform PM work—enabling teams to succeed long after you're gone.
              </InsightCard>
            </div>
          </section>

          {/* Reflection */}
          <section className="mb-20">
            <div className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-2xl p-8">
              <h3 className="text-3xl font-bold mb-6 text-white">Reflection: Why This Work Mattered</h3>
              
              <div className="prose prose-invert prose-lg max-w-none space-y-4">
                <p className="text-zinc-300 leading-relaxed">
                  This project wasn't about innovation or cutting-edge AI. It was about <strong className="text-white">operational 
                  excellence</strong> at scale.
                </p>

                <div className="grid md:grid-cols-2 gap-6 not-prose mt-6">
                  <div>
                    <h4 className="text-lg font-semibold text-red-400 mb-3">What made it hard:</h4>
                    <ul className="space-y-2 text-zinc-300 text-sm">
                      <li>• Convincing a client to invest in a platform approach they'd never tried</li>
                      <li>• Balancing competing priorities from 2 app teams without clear frameworks</li>
                      <li>• Scaling infrastructure (100 → 200 stores) while maintaining 98% uptime</li>
                      <li>• Overcoming cultural resistance from frontline workers</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-emerald-400 mb-3">What made it valuable:</h4>
                    <ul className="space-y-2 text-zinc-300 text-sm">
                      <li>• 15,000 devices ran more reliably every day</li>
                      <li>• Store managers could do their jobs better</li>
                      <li>• Engineering teams stopped duplicating work</li>
                      <li>• The platform outlived my tenure</li>
                    </ul>
                  </div>
                </div>

                <Callout type="info">
                  <strong>The PM skill this taught me:</strong>
                  <br /><br />
                  Platform product management is about <strong>enabling others to move faster</strong>. You don't ship features 
                  users see directly. You ship infrastructure that makes 10 other teams more effective.
                  <br /><br />
                  That requires:
                  <ul className="mt-3 space-y-1">
                    <li>• <strong>Systems thinking</strong> → See patterns across teams</li>
                    <li>• <strong>Stakeholder diplomacy</strong> → Balance competing needs with data</li>
                    <li>• <strong>Operational rigor</strong> → Stability and uptime are non-negotiable</li>
                    <li>• <strong>Change leadership</strong> → Technology alone doesn't drive adoption</li>
                  </ul>
                </Callout>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center pt-12 border-t border-zinc-800">
            <Link 
              to="/#case-studies"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-zinc-100 transition-all duration-200"
            >
              <ArrowLeft size={20} />
              View All Case Studies
            </Link>
          </section>
        </article>
      </div>
    </div>
  );
}

// Helper Components

function SectionHeader({ icon: Icon, title, color }) {
  const colorMap = {
    purple: 'text-purple-400',
    red: 'text-red-400',
    blue: 'text-blue-400',
    emerald: 'text-emerald-400',
    amber: 'text-amber-400',
    cyan: 'text-cyan-400',
  };

  return (
    <div className="flex items-center gap-3 mb-8">
      <Icon className={`${colorMap[color]} flex-shrink-0`} size={32} />
      <h2 className="text-3xl sm:text-4xl font-bold text-white">{title}</h2>
    </div>
  );
}

function MetricCard({ number, label, sublabel, color }) {
  const colorMap = {
    emerald: 'from-emerald-500 to-green-500',
    blue: 'from-blue-500 to-cyan-500',
    purple: 'from-purple-500 to-pink-500',
    amber: 'from-amber-500 to-orange-500',
    cyan: 'from-cyan-500 to-blue-500',
  };

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:scale-105 transition-transform">
      <div className={`text-3xl font-bold mb-2 bg-gradient-to-r ${colorMap[color]} bg-clip-text text-transparent`}>
        {number}
      </div>
      <div className="text-sm font-medium text-white mb-1">{label}</div>
      <div className="text-xs text-zinc-500">{sublabel}</div>
    </div>
  );
}

function Callout({ type, children }) {
  const typeMap = {
    success: { bg: 'bg-emerald-500/5', border: 'border-emerald-500/20', text: 'text-emerald-400' },
    error: { bg: 'bg-red-500/5', border: 'border-red-500/20', text: 'text-red-400' },
    warning: { bg: 'bg-amber-500/5', border: 'border-amber-500/20', text: 'text-amber-400' },
    info: { bg: 'bg-blue-500/5', border: 'border-blue-500/20', text: 'text-blue-400' },
  };

  const styles = typeMap[type] || typeMap.info;

  return (
    <div className={`${styles.bg} border ${styles.border} rounded-xl p-6 my-6`}>
      <div className="text-zinc-300 leading-relaxed">{children}</div>
    </div>
  );
}

function InsightCard({ children }) {
  return (
    <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-xl p-6 my-6">
      <div className="text-zinc-300 leading-relaxed">{children}</div>
    </div>
  );
}

function DecisionCard({ number, title, color, children }) {
  const colorMap = {
    blue: 'from-blue-500 to-cyan-500',
    purple: 'from-purple-500 to-pink-500',
    emerald: 'from-emerald-500 to-green-500',
  };

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 hover:border-zinc-700 transition-colors">
      <div className="flex items-start gap-4 mb-6">
        <div className={`flex-shrink-0 w-12 h-12 bg-gradient-to-br ${colorMap[color]} rounded-xl flex items-center justify-center text-white font-bold text-xl`}>
          {number}
        </div>
        <h3 className="text-2xl font-bold text-white mt-1">{title}</h3>
      </div>
      {children}
    </div>
  );
}

function ApproachCard({ step, title, description, color }) {
  const colorMap = {
    blue: 'border-blue-500/30 bg-blue-500/5',
    purple: 'border-purple-500/30 bg-purple-500/5',
    cyan: 'border-cyan-500/30 bg-cyan-500/5',
    emerald: 'border-emerald-500/30 bg-emerald-500/5',
  };

  return (
    <div className={`border ${colorMap[color]} rounded-lg p-6 flex items-start gap-4`}>
      <div className="flex-shrink-0 w-8 h-8 bg-white rounded-full flex items-center justify-center text-black font-bold text-sm">
        {step}
      </div>
      <div>
        <h4 className="text-lg font-semibold text-white mb-1">{title}</h4>
        <p className="text-zinc-400 text-sm">{description}</p>
      </div>
    </div>
  );
}

function ResultCard({ icon: Icon, title, description, color }) {
  const colorMap = {
    emerald: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
    blue: 'text-blue-400 bg-blue-500/10 border-blue-500/20',
    purple: 'text-purple-400 bg-purple-500/10 border-purple-500/20',
    cyan: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20',
  };

  return (
    <div className={`border ${colorMap[color]} rounded-xl p-6`}>
      <Icon className={colorMap[color].split(' ')[0]} size={32} strokeWidth={2} />
      <h4 className="text-lg font-semibold text-white mt-4 mb-2">{title}</h4>
      <p className="text-zinc-400 text-sm">{description}</p>
    </div>
  );
}

function TakeawayCard({ number, title, color, children }) {
  const colorMap = {
    blue: 'from-blue-500 to-cyan-500',
    emerald: 'from-emerald-500 to-green-500',
    amber: 'from-amber-500 to-orange-500',
    purple: 'from-purple-500 to-pink-500',
  };

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8">
      <div className={`inline-block px-4 py-2 bg-gradient-to-r ${colorMap[color]} text-white font-bold rounded-lg mb-4`}>
        {number}
      </div>
      <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
      {children}
    </div>
  );
}

function StatCard({ value, label, detail }) {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 text-center hover:border-zinc-700 transition-colors">
      <div className="text-3xl font-bold text-white mb-2">{value}</div>
      <div className="text-sm font-medium text-zinc-300 mb-1">{label}</div>
      <div className="text-xs text-zinc-500">{detail}</div>
    </div>
  );
}
