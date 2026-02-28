import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight, Clock, Users, TrendingUp, DollarSign, Sparkles, AlertCircle, Target, Lightbulb } from 'lucide-react'

const GenAICaseStudy = () => {
  const [activeSection, setActiveSection] = useState('')
  const [readProgress, setReadProgress] = useState(0)

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
      // Calculate read progress
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight - windowHeight
      const scrolled = window.scrollY
      const progress = (scrolled / documentHeight) * 100
      setReadProgress(progress)

      // Update active section
      const sections = document.querySelectorAll('section[id]')
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect()
        if (rect.top <= 150 && rect.bottom >= 150) {
          setActiveSection(section.id)
        }
      })
    }

    const throttledScroll = throttle(handleScroll, 100);
    window.addEventListener('scroll', throttledScroll, { passive: true })
    handleScroll(); // Initial call
    return () => window.removeEventListener('scroll', throttledScroll)
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 130 // Account for main nav (56px) + case study header (64px) + padding
      const elementPosition = element.getBoundingClientRect().top + window.scrollY
      window.scrollTo({ top: elementPosition - offset, behavior: 'smooth' })
    }
  }

  const tableOfContents = [
    { id: 'executive-summary', title: 'Executive Summary' },
    { id: 'context', title: '1. Context: The Problem' },
    { id: 'discovery', title: '2. Discovery: Trust Over Speed' },
    { id: 'strategy', title: '3. Strategic Decisions' },
    { id: 'execution', title: '4. Execution: Leading Without Authority' },
    { id: 'results', title: '5. Results & Impact' },
    { id: 'failures', title: '6. What Didn\'t Work' },
    { id: 'takeaways', title: '7. Key Takeaways' }
  ]

  return (
    <div className="min-h-screen bg-black text-white pt-14">
      {/* Reading Progress Bar */}
      <div 
        className="fixed top-14 left-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500 z-50 transition-all duration-300"
        style={{ width: `${readProgress}%` }}
      />

      {/* Header */}
      <div className="sticky top-14 bg-black/80 backdrop-blur-xl border-b border-zinc-800 z-40">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link 
            to="/"
            className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-medium">Back to Portfolio</span>
          </Link>
          
          <div className="flex items-center gap-3 text-sm text-zinc-500">
            <Clock className="w-4 h-4" />
            <span>10 min read</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12 lg:py-20">
        <div className="grid lg:grid-cols-[250px_1fr] gap-12">
          {/* Table of Contents - Desktop */}
          <aside className="hidden lg:block">
            <div className="sticky top-32">
              <h3 className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-4">
                Contents
              </h3>
              <nav className="space-y-2">
                {tableOfContents.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`block w-full text-left text-sm py-1.5 px-3 rounded-lg transition-all ${
                      activeSection === item.id
                        ? 'text-white bg-zinc-900 font-medium'
                        : 'text-zinc-500 hover:text-zinc-300'
                    }`}
                  >
                    {item.title}
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <article className="prose prose-invert prose-lg max-w-none">
            {/* Hero */}
            <div className="mb-16 pb-12 border-b border-zinc-800">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900/50 border border-zinc-800 mb-6">
                <Sparkles className="w-4 h-4 text-purple-400" />
                <span className="text-sm text-zinc-400">Case Study</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Transforming Pharmaceutical Research with GenAI
              </h1>

              <div className="flex flex-wrap items-center gap-4 text-zinc-400 mb-8">
                <div className="flex items-center gap-2">
                  <span className="text-sm">Senior Product Manager</span>
                </div>
                <span className="text-zinc-700">•</span>
                <div className="flex items-center gap-2">
                  <span className="text-sm">Deloitte</span>
                </div>
                <span className="text-zinc-700">•</span>
                <div className="flex items-center gap-2">
                  <span className="text-sm">2023 - 2025 (18 months)</span>
                </div>
              </div>

              {/* Key Metrics Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <MetricCard 
                  icon={TrendingUp}
                  value="40x"
                  label="User Growth"
                  sublabel="5 → 200 users"
                />
                <MetricCard 
                  icon={Clock}
                  value="12h → 6h"
                  label="Research Time"
                  sublabel="50% faster"
                />
                <MetricCard 
                  icon={DollarSign}
                  value="$200K"
                  label="Funding Secured"
                  sublabel="Via rapid prototype"
                />
                <MetricCard 
                  icon={Users}
                  value="95%"
                  label="On-Time Delivery"
                  sublabel="Led 18-person team"
                />
              </div>

              <p className="text-xl text-zinc-400 leading-relaxed">
                I inherited a broken GenAI platform serving 5 medical researchers and transformed it into 
                a mission-critical research tool supporting 200+ users across 5 departments—until organizational 
                changes shut it down, teaching me vital lessons about building resilience.
              </p>
            </div>

            {/* Executive Summary */}
            <section id="executive-summary" className="mb-16">
              <h2 className="text-3xl font-semibold text-white mb-6">Executive Summary</h2>
              
              <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-8 mb-8">
                <p className="text-zinc-300 leading-relaxed mb-6">
                  This case study explores the strategic decisions, technical trade-offs, and leadership 
                  challenges of building an AI platform where accuracy and trust mattered more than speed.
                </p>
                
                <div className="space-y-3">
                  <BulletPoint>Reduced query-to-insight time from 12 hours to 6 hours (manual research → AI-powered search)</BulletPoint>
                  <BulletPoint>Scaled 40x users (5 → 200 researchers across 5 departments)</BulletPoint>
                  <BulletPoint>Grew platform capability 5x (2K → 10K documents + 5 live connectors)</BulletPoint>
                  <BulletPoint>Achieved 95% on-time delivery rate across 4 quarterly releases</BulletPoint>
                  <BulletPoint>Secured $200K incremental funding through rapid prototyping (collaboration forum)</BulletPoint>
                  <BulletPoint>Improved platform retention from 60% to 85%</BulletPoint>
                </div>
              </div>
            </section>

            {/* Context */}
            <section id="context" className="mb-16">
              <SectionHeader number="1" title="Context: The Problem Space" />
              
              <h3 className="text-2xl font-semibold text-white mb-4">The Research Bottleneck</h3>
              
              <p className="text-zinc-300 leading-relaxed mb-6">
                Medical researchers at a major pharmaceutical company were drowning in documentation. 
                To conduct literature reviews or validate hypotheses against existing clinical protocols, 
                researchers faced a manual, time-intensive process:
              </p>

              <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-8 mb-6">
                <h4 className="text-lg font-semibold text-white mb-4">Before the platform:</h4>
                <ul className="space-y-2 text-zinc-400">
                  <li className="flex items-start gap-3">
                    <span className="text-zinc-600 mt-1">•</span>
                    <span>Researchers manually searched through thousands of PDF documents</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-zinc-600 mt-1">•</span>
                    <span>Primary tool: Ctrl+F across multiple files</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-zinc-600 mt-1">•</span>
                    <span>Average time per research query: <strong className="text-white">12+ hours</strong></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-zinc-600 mt-1">•</span>
                    <span>No centralized knowledge repository</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-zinc-600 mt-1">•</span>
                    <span>Information quickly became outdated as new research published</span>
                  </li>
                </ul>
              </div>

              <Callout icon={AlertCircle} type="insight">
                The real problem wasn't just time—it was cognitive load. Researchers would forget which 
                document contained specific information, leading to repeated searches. With drug development 
                timelines already stretched across years, every day spent searching was a day not spent 
                making scientific breakthroughs.
              </Callout>

              <h3 className="text-2xl font-semibold text-white mb-4 mt-8">When I Joined: A Broken Foundation</h3>
              
              <p className="text-zinc-300 leading-relaxed mb-6">
                I inherited a platform that technically worked but was practically unusable:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-6">
                  <h4 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-4">Initial State (March 2023)</h4>
                  <ul className="space-y-3 text-sm text-zinc-400">
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-0.5">▸</span>
                      <span>5 active users (out of 500+ potential researchers)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-0.5">▸</span>
                      <span>~2,000 documents indexed</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-0.5">▸</span>
                      <span>"Old, unstitched UI" with confusing navigation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-0.5">▸</span>
                      <span>No clear user journey from point A to B</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-0.5">▸</span>
                      <span>Response times: ~2 minutes per query</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-0.5">▸</span>
                      <span>Zero department-specific access controls</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-6">
                  <h4 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-4">The Core Challenge</h4>
                  <p className="text-zinc-300 leading-relaxed">
                    The platform had good AI underneath—a fine-tuned LLM trained on pharmaceutical 
                    literature—but the experience was so clunky that researchers preferred their old manual 
                    methods. My mission was to transform this prototype into a production-grade research platform.
                  </p>
                </div>
              </div>
            </section>

            {/* Discovery */}
            <section id="discovery" className="mb-16">
              <SectionHeader number="2" title="Discovery: Understanding Trust Over Speed" />
              
              <p className="text-zinc-300 leading-relaxed mb-6">
                While the initial user interviews were conducted before I joined, I immediately embedded 
                myself with power users through Q&A sessions and observation. Three critical insights emerged:
              </p>

              <div className="space-y-6">
                <InsightCard 
                  title="Insight #1: Authenticity > Speed"
                  quote="I don't care if it takes 5 minutes. I care if it's RIGHT."
                  attribution="Senior Medical Researcher"
                >
                  Researchers were PhD holders and doctors. They didn't trust AI outputs initially. 
                  Their biggest concern wasn't wait time—it was <strong>citation accuracy</strong>. 
                  They needed to verify every AI-generated insight against source documents.
                </InsightCard>

                <InsightCard 
                  title="Insight #2: Data Freshness Anxiety"
                >
                  Research moves fast. New clinical trials, conference papers, and regulatory updates 
                  publish constantly. Researchers complained that by the time they found information 
                  manually, it was already outdated. They needed <strong>live connectors</strong> to 
                  external databases, not just static document repositories.
                </InsightCard>

                <InsightCard 
                  title="Insight #3: Persona Misunderstanding"
                  highlight="error"
                >
                  My biggest early mistake: I assumed these scientists would appreciate a beautiful, 
                  modern UI. Wrong. These were 40+ year old researchers who valued <strong>function over form</strong>. 
                  They wanted to "get work done," not admire interfaces.
                  
                  <div className="mt-4 p-4 bg-red-950/20 border border-red-900/30 rounded-lg">
                    <p className="text-sm text-red-300">
                      <strong>Learning:</strong> I spent 3 sprints over-designing UI elements that users didn't 
                      care about. Once I pivoted to clarity and speed-to-task, adoption improved immediately.
                    </p>
                  </div>
                </InsightCard>
              </div>
            </section>

            {/* Strategy */}
            <section id="strategy" className="mb-16">
              <SectionHeader number="3" title="Strategic Decisions: The Hard Trade-offs" />
              
              <div className="space-y-12">
                {/* Decision 1 */}
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-4">Decision #1: Agentic Strategy vs. Brute Force Search</h3>
                  
                  <div className="bg-red-950/20 border border-red-900/30 rounded-xl p-6 mb-6">
                    <h4 className="text-lg font-semibold text-red-300 mb-3">The Problem</h4>
                    <p className="text-zinc-300 leading-relaxed mb-4">
                      As we scaled from 2K to 10K documents + added 5 live connectors, response times ballooned:
                    </p>
                    <ul className="space-y-2 text-zinc-400 text-sm">
                      <li>• 2 minutes (2K docs, internal only)</li>
                      <li>• <strong className="text-red-400">6 minutes</strong> (10K docs + live connectors)</li>
                      <li>• User frustration escalating</li>
                    </ul>
                  </div>

                  <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-6 mb-6">
                    <h4 className="text-lg font-semibold text-white mb-4">Options Considered</h4>
                    <div className="space-y-4">
                      <OptionCard 
                        number="1"
                        title="Throw hardware at it"
                        description="Upgrade infrastructure"
                        verdict="Expensive, diminishing returns"
                      />
                      <OptionCard 
                        number="2"
                        title="Limit data sources"
                        description="Cap documents or remove connectors"
                        verdict="Defeats purpose"
                      />
                      <OptionCard 
                        number="3"
                        title="Agentic decomposition"
                        description="Break queries into targeted sub-queries"
                        verdict="✓ Technically complex but best ROI"
                        chosen
                      />
                    </div>
                  </div>

                  <Callout icon={Lightbulb} type="success">
                    <strong>My Research:</strong> I studied mature GenAI products (ChatGPT, Claude) and noticed 
                    they didn't brute-force search everything. They decomposed complex queries into focused 
                    retrieval tasks. I pitched this to our tech lead:
                    <blockquote className="mt-3 pl-4 border-l-2 border-emerald-500 text-emerald-300 italic">
                      "ChatGPT feels instant because it's smart about WHERE to look, not because it searches EVERYTHING."
                    </blockquote>
                  </Callout>

                  <div className="bg-emerald-950/20 border border-emerald-900/30 rounded-xl p-6 mt-6">
                    <h4 className="text-lg font-semibold text-emerald-300 mb-4">The Bet: Build an agentic system that:</h4>
                    <ul className="space-y-2 text-zinc-300">
                      <li className="flex items-start gap-3">
                        <span className="text-emerald-400 mt-1">1.</span>
                        <span>Decomposes user queries into specific research questions</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-emerald-400 mt-1">2.</span>
                        <span>Determines relevance: internal documents vs. live connectors</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-emerald-400 mt-1">3.</span>
                        <span>Optimizes system prompts based on data source patterns</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-emerald-400 mt-1">4.</span>
                        <span>Fetches and synthesizes results intelligently</span>
                      </li>
                    </ul>
                    
                    <div className="mt-6 pt-6 border-t border-emerald-900/30">
                      <h5 className="text-sm font-semibold text-emerald-400 mb-3">RESULT:</h5>
                      <ul className="space-y-2 text-sm text-zinc-400">
                        <li>• Response time reduced to <strong className="text-emerald-300">~3 minutes</strong> (acceptable for complex queries)</li>
                        <li>• Set user  expectations: "Accuracy takes time" became our positioning</li>
                        <li>• Users accepted the 3-minute wait because response quality was exceptional</li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 p-6 bg-zinc-950 border border-zinc-800 rounded-xl">
                    <h4 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-3">What We Said NO To:</h4>
                    <ul className="space-y-2 text-sm text-zinc-500">
                      <li>✗ Building our own LLM (too costly, reinventing wheel)</li>
                      <li>✗ Compromising on accuracy for speed (trust would evaporate)</li>
                      <li>✗ Caching generic responses (pharmaceutical data is too specific)</li>
                    </ul>
                  </div>
                </div>

                {/* Decision 2 */}
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-4">Decision #2: Role-Based Access Control (RBAC)</h3>
                  
                  <p className="text-zinc-300 leading-relaxed mb-6">
                    Different departments needed different features. The simple solution: tie platform access 
                    to Active Directory (AD) permissions. If your AD grants Department A access, you see 
                    Department A features. No manual permission management needed.
                  </p>

                  <div className="grid md:grid-cols-3 gap-4 mb-6">
                    <StatCard label="Departments Scaled" value="1 → 5" />
                    <StatCard label="Security Model" value="AD-based" />
                    <StatCard label="Manual Config" value="Zero" />
                  </div>

                  <Callout icon={Target}>
                    Simplified onboarding, maintained security compliance, and enabled faster feature 
                    rollout without per-user access configuration.
                  </Callout>
                </div>

                {/* Decision 3 */}
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-4">Decision #3: Collaboration Forum (The $200K Funding)</h3>
                  
                  <div className="bg-gradient-to-br from-purple-950/40 to-pink-950/40 border border-purple-800/30 rounded-2xl p-8 mb-6">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="p-3 bg-purple-500/20 rounded-xl">
                        <Sparkles className="w-6 h-6 text-purple-400" />
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-white mb-2">The $200K Win</h4>
                        <p className="text-purple-200">
                          From rapid prototype to six-figure funding in one week
                        </p>
                      </div>
                    </div>

                    <div className="space-y-4 text-zinc-300">
                      <div>
                        <span className="text-sm font-semibold text-purple-300">THE INSIGHT:</span>
                        <p className="mt-1">
                          Researchers were sharing ideas OUTSIDE the app—via email, Slack, internal wikis. 
                          They wanted to discuss research findings within the context of the platform.
                        </p>
                      </div>

                      <div>
                        <span className="text-sm font-semibold text-purple-300">THE PROTOTYPE:</span>
                        <p className="mt-1">
                          I spent <strong>2 days</strong> building a Reddit-style collaboration forum on Bolt.new:
                        </p>
                        <ul className="mt-2 space-y-1 text-sm text-zinc-400">
                          <li>• Users could post research questions publicly</li>
                          <li>• Tag topics and invite colleagues</li>
                          <li>• Threaded discussions with citation references</li>
                        </ul>
                      </div>

                      <div>
                        <span className="text-sm font-semibold text-purple-300">THE PITCH:</span>
                        <p className="mt-1">
                          Showed the rapid prototype (built with AI assistance) to the Product Owner and client. They immediately saw 
                          the value: keeping research discussions centralized meant better knowledge retention 
                          and faster collaboration.
                        </p>
                      </div>

                      <div className="pt-4 border-t border-purple-800/30">
                        <div className="flex items-center gap-3">
                          <DollarSign className="w-8 h-8 text-purple-400" />
                          <div>
                            <div className="text-3xl font-bold text-white">$200,000</div>
                            <div className="text-sm text-purple-300">Incremental funding secured</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <Callout icon={Lightbulb} type="success">
                    <strong>Learning:</strong> Rapid prototyping with AI-assisted development is 
                    a PM superpower. A 2-day prototype can unlock 6-figure budgets if it solves a real pain point.
                  </Callout>
                </div>
              </div>
            </section>

            {/* Execution */}
            <section id="execution" className="mb-16">
              <SectionHeader number="4" title="Execution: Leading Without Authority" />
              
              <h3 className="text-2xl font-semibold text-white mb-4">Building Team Alignment</h3>
              
              <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-6 mb-6">
                <h4 className="text-lg font-semibold text-white mb-4">The Challenge</h4>
                <p className="text-zinc-300 mb-4">
                  I managed an 18-person team without direct reports:
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                  <div className="p-3 bg-zinc-900 rounded-lg">
                    <div className="text-white font-semibold">10</div>
                    <div className="text-zinc-500">Engineers (FE/BE)</div>
                  </div>
                  <div className="p-3 bg-zinc-900 rounded-lg">
                    <div className="text-white font-semibold">2</div>
                    <div className="text-zinc-500">Data Scientists</div>
                  </div>
                  <div className="p-3 bg-zinc-900 rounded-lg">
                    <div className="text-white font-semibold">1</div>
                    <div className="text-zinc-500">Designer</div>
                  </div>
                  <div className="p-3 bg-zinc-900 rounded-lg">
                    <div className="text-white font-semibold">2</div>
                    <div className="text-zinc-500">Medical SMEs</div>
                  </div>
                  <div className="p-3 bg-zinc-900 rounded-lg">
                    <div className="text-white font-semibold">2</div>
                    <div className="text-zinc-500">QA Engineers</div>
                  </div>
                  <div className="p-3 bg-zinc-900 rounded-lg border border-purple-800/30">
                    <div className="text-white font-semibold">1</div>
                    <div className="text-zinc-500">Product (Me)</div>
                  </div>
                </div>
                <p className="text-zinc-400 text-sm mt-4">
                  Engineers initially operated in silos, focused on tasks rather than outcomes. 
                  Getting everyone aligned on a shared vision took work.
                </p>
              </div>

              <div className="space-y-4 mb-8">
                <h4 className="text-lg font-semibold text-white">My Approach:</h4>
                <div className="space-y-3">
                  <ApproachCard 
                    number="1"
                    title="Radical transparency"
                    description="Every PI Planning session, I opened with 'What are we building and WHY?'"
                  />
                  <ApproachCard 
                    number="2"
                    title="No Dumb Questions policy"
                    description="Engineers felt safe asking clarifying questions without judgment"
                  />
                  <ApproachCard 
                    number="3"
                    title="Show, don't tell"
                    description="I demonstrated how features connected to user pain (brought researcher quotes to standups)"
                  />
                </div>
              </div>

              <div className="bg-emerald-950/20 border border-emerald-900/30 rounded-xl p-6 mb-8">
                <h4 className="text-lg font-semibold text-emerald-300 mb-4">Result</h4>
                <p className="text-zinc-300 mb-4">
                  After 2 sprints of alignment work, the team started operating like clockwork:
                </p>
                <ul className="space-y-2 text-zinc-300">
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-400">✓</span>
                    <span><strong className="text-white">95% on-time delivery rate</strong> across 10+ major features</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-400">✓</span>
                    <span>Fewer post-development questions (clearer requirements upfront)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-400">✓</span>
                    <span>Engineers started proactively suggesting UX improvements</span>
                  </li>
                </ul>
              </div>

              <Callout icon={Users}>
                <strong>Key Lesson:</strong> Teams deliver faster when they understand the "why" behind their work.
              </Callout>

              <h3 className="text-2xl font-semibold text-white mb-4 mt-12">PI Planning Success Formula</h3>
              
              <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-6">
                <ol className="space-y-4">
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-purple-500/20 text-purple-400 font-semibold text-sm">1</span>
                    <div>
                      <h5 className="font-semibold text-white mb-1">Pre-Planning</h5>
                      <p className="text-zinc-400 text-sm">Share user stories + context docs 48 hours ahead</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-purple-500/20 text-purple-400 font-semibold text-sm">2</span>
                    <div>
                      <h5 className="font-semibold text-white mb-1">Kick-off</h5>
                      <p className="text-zinc-400 text-sm">Present "What we're solving for" with real user quotes</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-purple-500/20 text-purple-400 font-semibold text-sm">3</span>
                    <div>
                      <h5 className="font-semibold text-white mb-1">Open Forum</h5>
                      <p className="text-zinc-400 text-sm">Engineers ask questions, challenge assumptions</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-purple-500/20 text-purple-400 font-semibold text-sm">4</span>
                    <div>
                      <h5 className="font-semibold text-white mb-1">Capacity Planning</h5>
                      <p className="text-zinc-400 text-sm">Team self-assigns based on realistic estimates (no manager pressure)</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-purple-500/20 text-purple-400 font-semibold text-sm">5</span>
                    <div>
                      <h5 className="font-semibold text-white mb-1">Acceptance Criteria</h5>
                      <p className="text-zinc-400 text-sm">Designer + SMEs define "done" together</p>
                    </div>
                  </li>
                </ol>
              </div>
            </section>

            {/* Results */}
            <section id="results" className="mb-16">
              <SectionHeader number="5" title="Results: Impact and Metrics" />
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <ResultCard 
                  title="User Growth"
                  metric="40x"
                  details={[
                    '5 → 200 active users',
                    'Expanded from 1 → 5 departments',
                    '60% → 85% retention rate'
                  ]}
                  gradient="from-blue-500 to-cyan-500"
                />
                <ResultCard 
                  title="Platform Capability"
                  metric="5x"
                  details={[
                    '2K → 10K documents indexed',
                    '5 live connectors added',
                    '~3 min avg response time'
                  ]}
                  gradient="from-purple-500 to-pink-500"
                />
                <ResultCard 
                  title="Team Performance"
                  metric="95%"
                  details={[
                    'On-time delivery rate',
                    '4 quarterly releases',
                    '10+ major features shipped'
                  ]}
                  gradient="from-emerald-500 to-teal-500"
                />
                <ResultCard 
                  title="Business Impact"
                  metric="$200K"
                  details={[
                    'Incremental funding secured',
                    '$1.2M contract expansion',
                    'Mission-critical for 5 depts'
                  ]}
                  gradient="from-amber-500 to-orange-500"
                />
              </div>

              <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-8">
                <h3 className="text-xl font-semibold text-white mb-4">User Feedback</h3>
                <div className="space-y-4">
                  <blockquote className="pl-4 border-l-2 border-purple-500">
                    <p className="text-zinc-300 italic mb-2">
                      "I love the structured responses and citations. That's the feature I use most."
                    </p>
                    <cite className="text-sm text-zinc-500">— Senior Research Scientist</cite>
                  </blockquote>
                  <blockquote className="pl-4 border-l-2 border-purple-500">
                    <p className="text-zinc-300 italic mb-2">
                      "The new UI makes it easy to move from A to B. I don't need training anymore."
                    </p>
                    <cite className="text-sm text-zinc-500">— Medical Researcher, 15 years experience</cite>
                  </blockquote>
                </div>
              </div>
            </section>

            {/* Failures */}
            <section id="failures" className="mb-16">
              <SectionHeader number="6" title="What Didn't Work: Lessons from Failure" />
              
              <div className="space-y-8">
                <FailureCard 
                  title="Failure #1: Over-Engineering the UI"
                  mistake="I spent 3 sprints designing a beautiful, modern interface with animations, color-coded categories, and visual flourishes."
                  reality="Users (40+ year old scientists) didn't care. They wanted speed-to-task, not aesthetics."
                  learning="Understand your persona's pain points and give them what they WANT, not what you think looks good. I learned to validate design decisions with actual user testing before investing engineering effort. Function beats form for enterprise tools, especially with older user demographics."
                />

                <FailureCard 
                  title="Failure #2: Underestimating Hardware Constraints"
                  mistake="I initially believed we could optimize our way to ChatGPT-level response speeds through better algorithms alone."
                  reality="We were constrained by on-premise infrastructure. No amount of agentic wizardry could overcome hardware limitations."
                  learning="Set realistic user expectations early. I framed 3-minute response times as: 'This ensures accuracy across 10,000 documents and live data sources—similar complex searches on ChatGPT also take time.' Users accepted the trade-off once they understood WHY we couldn't match consumer AI speed."
                />

                <div className="bg-red-950/20 border border-red-900/30 rounded-2xl p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-3 bg-red-500/20 rounded-xl">
                      <AlertCircle className="w-6 h-6 text-red-400" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-white mb-2">Failure #3: Not Future-Proofing Leadership Transitions</h3>
                      <p className="text-red-200">The project was shut down in early 2025 after a leadership change.</p>
                    </div>
                  </div>

                  <div className="space-y-6 text-zinc-300">
                    <div>
                      <h4 className="text-sm font-semibold text-red-300 uppercase tracking-wider mb-2">What Happened</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <span className="text-red-400 mt-1">1.</span>
                          <span>Original PO: Collaborative, exposed me to business stakeholders, trusted my judgment</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-400 mt-1">2.</span>
                          <span>New PO: Wanted "things delivered," minimal business interaction, didn't value discovery</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-400 mt-1">3.</span>
                          <span>New PO cut off direct business access</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-400 mt-1">4.</span>
                          <span>We couldn't ask probing questions to understand evolving needs</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-400 mt-1">5.</span>
                          <span>Built features based on assumptions rather than validated insights</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-400 mt-1">6.</span>
                          <span>User adoption dropped as we lost touch with actual pain points</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-400 mt-1">7.</span>
                          <span>Platform was eventually deprioritized and shut down</span>
                        </li>
                      </ul>
                    </div>

                    <div className="p-6 bg-black/40 rounded-xl border border-red-900/20">
                      <blockquote className="text-lg text-red-300 italic mb-4">
                        "A PM's effectiveness is only as good as the organizational support structure allows."
                      </blockquote>
                      
                      <h4 className="text-sm font-semibold text-red-300 uppercase tracking-wider mb-3">What I'd Do Differently</h4>
                      <ul className="space-y-2 text-sm text-zinc-400">
                        <li className="flex items-start gap-2">
                          <span className="text-red-400">•</span>
                          <span><strong className="text-zinc-300">Build stakeholder redundancy:</strong> Cultivate relationships with multiple business leaders, not just one PO</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-400">•</span>
                          <span><strong className="text-zinc-300">Document product principles:</strong> Create a clear product vision that survives leadership changes</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-400">•</span>
                          <span><strong className="text-zinc-300">Create user advisory board:</strong> Direct researcher access that doesn't depend on PO approval</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-400">•</span>
                          <span><strong className="text-zinc-300">Evangelize wins publicly:</strong> More visibility across org would have created protective momentum</span>
                        </li>
                      </ul>
                    </div>

                    <p className="text-zinc-400 text-sm pt-4 border-t border-red-900/30">
                      This failure taught me that <strong className="text-white">organizational dynamics matter as much as product execution</strong>. 
                      Great products can die if leadership doesn't champion them.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Takeaways */}
            <section id="takeaways" className="mb-16">
              <SectionHeader number="7" title="Key Takeaways" />
              
              <div className="space-y-8">
                <div className="bg-gradient-to-br from-emerald-950/40 to-teal-950/40 border border-emerald-800/30 rounded-2xl p-8">
                  <h3 className="text-2xl font-semibold text-white mb-4">What I'm Most Proud Of</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-emerald-300 mb-3">Technical Growth</h4>
                      <p className="text-zinc-300 mb-3">
                        Working on this project for 18 months transformed my understanding of AI product management. I can now:
                      </p>
                      <ul className="space-y-2 text-zinc-300">
                        <li className="flex items-start gap-3">
                          <span className="text-emerald-400">→</span>
                          <span>Evaluate LLM trade-offs (latency vs. accuracy vs. cost)</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-emerald-400">→</span>
                          <span>Design agentic systems (decomposition, routing, synthesis)</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-emerald-400">→</span>
                          <span>Optimize vector search and retrieval strategies</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-emerald-400">→</span>
                          <span>Balance user experience with technical constraints</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-emerald-300 mb-3">Leadership Growth</h4>
                      <p className="text-zinc-300">
                        I learned how to lead cross-functional teams without authority by creating alignment 
                        through shared understanding rather than hierarchy.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-8">
                  <h3 className="text-2xl font-semibold text-white mb-4">What I'd Do Differently</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-purple-300 mb-3">Balance Tech and CX</h4>
                      <p className="text-zinc-300 mb-3">
                        I initially over-indexed on customer experience (beautiful UI) without considering 
                        technical feasibility and user preferences. I'd now:
                      </p>
                      <ul className="space-y-2 text-zinc-400 text-sm">
                        <li>• Validate design decisions with user testing BEFORE engineering investment</li>
                        <li>• Involve engineers earlier in ideation (they spot technical constraints faster)</li>
                        <li>• Ship MVPs to learn, not polished features to impress</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-purple-300 mb-3">Build Organizational Resilience</h4>
                      <p className="text-zinc-300 mb-3">
                        I relied too heavily on one PO relationship. I'd now:
                      </p>
                      <ul className="space-y-2 text-zinc-400 text-sm">
                        <li>• Cultivate direct stakeholder relationships across the org</li>
                        <li>• Create formal user advisory boards</li>
                        <li>• Document product vision and strategy publicly (internal wiki, presentations)</li>
                        <li>• Evangelize wins to build political capital</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Footer CTA */}
            <div className="mt-20 pt-12 border-t border-zinc-800 text-center">
              <h3 className="text-2xl font-semibold text-white mb-4">
                Interested in discussing product strategy?
              </h3>
              <p className="text-zinc-400 mb-8 max-w-2xl mx-auto">
                I'd love to hear about your challenges with AI products, cross-functional leadership, 
                or building platforms at scale.
              </p>
              <Link 
                to="/#contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-zinc-100 transition-colors"
              >
                Let's Connect
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </article>
        </div>
      </div>
    </div>
  )
}

// Helper Components
const MetricCard = ({ icon: Icon, value, label, sublabel }) => (
  <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-4">
    <Icon className="w-5 h-5 text-purple-400 mb-2" />
    <div className="text-2xl font-bold text-white mb-1">{value}</div>
    <div className="text-sm text-zinc-400 mb-0.5">{label}</div>
    {sublabel && <div className="text-xs text-zinc-600">{sublabel}</div>}
  </div>
)

const BulletPoint = ({ children }) => (
  <div className="flex items-start gap-3">
    <span className="text-emerald-400 mt-1">✓</span>
    <span className="text-zinc-300">{children}</span>
  </div>
)

const SectionHeader = ({ number, title }) => (
  <div className="flex items-baseline gap-4 mb-8">
    <span className="text-5xl font-bold text-zinc-900">{number}</span>
    <h2 className="text-3xl font-semibold text-white">{title}</h2>
  </div>
)

const Callout = ({ icon: Icon, type = 'default', children }) => {
  const styles = {
    default: 'bg-zinc-950 border-zinc-800 text-zinc-300',
    insight: 'bg-blue-950/20 border-blue-900/30 text-blue-200',
    success: 'bg-emerald-950/20 border-emerald-900/30 text-emerald-200'
  }

  return (
    <div className={`flex gap-4 p-6 rounded-xl border ${styles[type]} my-6`}>
      {Icon && <Icon className="w-5 h-5 flex-shrink-0 mt-0.5" />}
      <div className="text-sm leading-relaxed">{children}</div>
    </div>
  )
}

const InsightCard = ({ title, quote, attribution, children, highlight }) => (
  <div className={`p-6 rounded-xl border ${
    highlight === 'error' 
      ? 'bg-red-950/20 border-red-900/30' 
      : 'bg-zinc-950 border-zinc-800'
  }`}>
    <h4 className="text-lg font-semibold text-white mb-3">{title}</h4>
    {quote && (
      <blockquote className="pl-4 border-l-2 border-purple-500 mb-4">
        <p className="text-zinc-300 italic mb-2">{quote}</p>
        {attribution && <cite className="text-sm text-zinc-500">— {attribution}</cite>}
      </blockquote>
    )}
    <p className="text-zinc-400 leading-relaxed">{children}</p>
  </div>
)

const OptionCard = ({ number, title, description, verdict, chosen }) => (
  <div className={`p-4 rounded-lg border ${
    chosen 
      ? 'bg-emerald-950/20 border-emerald-900/30' 
      : 'bg-zinc-900/50 border-zinc-800'
  }`}>
    <div className="flex items-start gap-3">
      <span className={`flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full text-xs font-semibold ${
        chosen 
          ? 'bg-emerald-500/20 text-emerald-400' 
          : 'bg-zinc-800 text-zinc-500'
      }`}>
        {number}
      </span>
      <div className="flex-1">
        <h5 className="font-semibold text-white mb-1">{title}</h5>
        <p className="text-zinc-400 text-sm mb-2">{description}</p>
        <p className={`text-xs ${
          chosen ? 'text-emerald-400' : 'text-zinc-500'
        }`}>
          {verdict}
        </p>
      </div>
    </div>
  </div>
)

const StatCard = ({ label, value }) => (
  <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-4 text-center">
    <div className="text-2xl font-bold text-white mb-1">{value}</div>
    <div className="text-xs text-zinc-500">{label}</div>
  </div>
)

const ApproachCard = ({ number, title, description }) => (
  <div className="flex gap-4 p-4 bg-zinc-950 border border-zinc-800 rounded-lg">
    <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-purple-500/20 text-purple-400 font-semibold text-sm">
      {number}
    </span>
    <div>
      <h5 className="font-semibold text-white mb-1">{title}</h5>
      <p className="text-zinc-400 text-sm">{description}</p>
    </div>
  </div>
)

const ResultCard = ({ title, metric, details, gradient }) => (
  <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-6">
    <div className={`inline-block px-3 py-1 rounded-full bg-gradient-to-r ${gradient} text-white font-semibold text-sm mb-4`}>
      {title}
    </div>
    <div className="text-4xl font-bold text-white mb-4">{metric}</div>
    <ul className="space-y-2">
      {details.map((detail, index) => (
        <li key={index} className="flex items-start gap-2 text-sm text-zinc-400">
          <span className="text-zinc-600 mt-0.5">•</span>
          <span>{detail}</span>
        </li>
      ))}
    </ul>
  </div>
)

const FailureCard = ({ title, mistake, reality, learning }) => (
  <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-6">
    <h3 className="text-xl font-semibold text-white mb-4">{title}</h3>
    
    <div className="space-y-4 text-sm">
      <div>
        <span className="text-red-400 font-semibold uppercase tracking-wider text-xs">The Mistake</span>
        <p className="text-zinc-400 mt-1">{mistake}</p>
      </div>
      
      <div>
        <span className="text-amber-400 font-semibold uppercase tracking-wider text-xs">The Reality</span>
        <p className="text-zinc-400 mt-1">{reality}</p>
      </div>
      
      <div className="pt-4 border-t border-zinc-800">
        <span className="text-emerald-400 font-semibold uppercase tracking-wider text-xs">The Learning</span>
        <p className="text-zinc-300 mt-1">{learning}</p>
      </div>
    </div>
  </div>
)

export default GenAICaseStudy
