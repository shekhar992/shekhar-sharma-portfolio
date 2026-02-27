import { ArrowRight, Linkedin, Github, FileText } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary font-medium text-sm">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
            Available for Product Leadership Roles
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
            Product Manager
            <br />
            <span className="text-primary">Who Builds Products</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto">
            9+ years defining products at <span className="font-semibold">Deloitte, Pfizer, Kroger, and Eli Lilly</span>.
            <br />
            Built enterprise tools using AI-powered vibecoding — no dev team required.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <a
              href="#product"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-hover transition-all font-semibold shadow-lg hover:shadow-xl hover:scale-105"
            >
              See What I Built
              <ArrowRight size={20} />
            </a>
            <a
              href="#journey"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-900 rounded-lg hover:bg-gray-50 transition-all font-semibold border-2 border-gray-300"
            >
              My Journey
            </a>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-6 pt-8 text-gray-600">
            <a
              href="https://www.linkedin.com/in/sheksharma"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Linkedin size={20} />
              LinkedIn
            </a>
            <a
              href="https://github.com/shekhar992"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Github size={20} />
              GitHub
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 hover:text-primary transition-colors"
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