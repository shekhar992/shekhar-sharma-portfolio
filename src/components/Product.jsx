import { ExternalLink, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Product() {

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
            <Link
              to="/smart-release-planner"
              className="inline-flex items-center gap-2 px-10 py-5 border-2 border-purple-700 text-purple-300 rounded-full text-lg font-semibold hover:border-purple-500 hover:bg-purple-900/20 transition-smooth hover:scale-[1.02]"
            >
              Full story
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>

        {/* App Screenshots Marquee */}
        <div className="mb-20 relative overflow-hidden">
          <div className="text-center mb-8">
            <p className="text-zinc-400 text-sm font-medium">Hover to pause</p>
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
                        loading="lazy"
                        decoding="async"
                        width="600"
                        height="400"
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
                        loading="lazy"
                        decoding="async"
                        width="600"
                        height="400"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>



      </div>
    </section>
  );
}