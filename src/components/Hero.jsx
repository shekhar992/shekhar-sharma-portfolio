import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 sm:px-8 lg:px-12 relative">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-black to-black opacity-60"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center space-y-12">
          {/* Status Badge - Apple style */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-zinc-900/80 backdrop-blur-xl border border-zinc-800/50 rounded-full text-sm font-medium animate-fadeIn">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            <Sparkles size={15} className="text-zinc-400" />
            <span className="text-zinc-300">Available for Product Leadership</span>
          </div>

          {/* Massive Headline - Apple style */}
          <h1 className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-semibold leading-[0.95] tracking-tight animate-fadeInUp text-white" style={{ animationDelay: '0.1s' }}>
            Product Manager.
            <br />
            Builder.
            <br />
            <span className="text-zinc-500">Problem Solver.</span>
          </h1>

          {/* Clean Subheadline */}
          <p className="text-xl sm:text-2xl lg:text-3xl text-zinc-400 max-w-4xl mx-auto font-normal leading-relaxed animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            10 years of shipping products for Fortune 500 clients.<br className="hidden sm:block" />
            <span className="text-white">Built and scaled at Deloitte across healthcare, retail, and pharmaceutical sectors.</span>
          </p>

          {/* Clean CTAs - Apple style */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8 animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
            <a
              href="#about"
              className="group inline-flex items-center justify-center gap-2 px-10 py-5 bg-white text-black rounded-full text-lg font-semibold hover:bg-zinc-100 transition-smooth hover:scale-[1.02]"
            >
              View my work
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-transparent border-2 border-zinc-700 text-white rounded-full text-lg font-semibold hover:border-zinc-500 hover:bg-zinc-900/50 transition-smooth hover:scale-[1.02]"
            >
              Get in touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}