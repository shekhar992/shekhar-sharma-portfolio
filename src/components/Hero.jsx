import { ArrowRight, Linkedin, Github, FileText, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated background orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 glass glass-hover rounded-full font-medium text-sm animate-fadeInUp">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            <Sparkles size={16} className="text-purple-400" />
            Open to Product Leadership
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
            Deep Problem Solver.
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">Fast Builder. Proven Shipper.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            I solve problems by getting uncomfortably deep into the details—then building the solution when it doesn't exist.
            <br />
            <span className="text-white font-semibold mt-2 block">7 years at Deloitte building products for Fortune 500 clients:</span> Led GenAI platform serving 500+ researchers • Secured $200K funding • Scaled patient app to 3,000 users in 8 weeks (3x faster than target)
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 pt-4 animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
            <a
              href="#product"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl hover:shadow-2xl hover:shadow-purple-500/50 transition-all font-semibold hover:scale-105"
            >
              See What I Built
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 px-8 py-4 glass glass-hover rounded-xl font-semibold hover:scale-105"
            >
              My Story
            </a>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-6 pt-8 text-gray-400 animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
            <a
              href="https://www.linkedin.com/in/sheksharma"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-purple-400 transition-all hover:scale-110"
            >
              <Linkedin size={20} />
              LinkedIn
            </a>
            <a
              href="https://github.com/shekhar992"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-purple-400 transition-all hover:scale-110"
            >
              <Github size={20} />
              GitHub
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 hover:text-purple-400 transition-all hover:scale-110"
            >
              <FileText size={20} />
              Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}