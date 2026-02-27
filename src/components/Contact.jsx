import { Mail, Linkedin, Github } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 lg:px-12 bg-zinc-950">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-5xl sm:text-6xl lg:text-7xl font-semibold mb-12 tracking-tight">
          Let's connect
        </h2>
        
        <p className="text-2xl sm:text-3xl text-zinc-400 mb-20 leading-relaxed">
          Open to product leadership roles.
        </p>

        {/* Contact Links - Apple Simple */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20">
          <a
            href="mailto:sharmashekhar992@gmail.com"
            className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-white text-black rounded-full text-lg font-semibold hover:bg-zinc-100 transition-smooth hover:scale-[1.02]"
          >
            <Mail size={22} />
            Email me
          </a>
          
          <a
            href="https://www.linkedin.com/in/sheksharma"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-10 py-5 border-2 border-zinc-700 text-white rounded-full text-lg font-semibold hover:border-zinc-500 hover:bg-zinc-900/50 transition-smooth hover:scale-[1.02]"
          >
            <Linkedin size={22} />
            LinkedIn
          </a>
          
          <a
            href="https://github.com/shekhar992"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-10 py-5 border-2 border-zinc-700 text-white rounded-full text-lg font-semibold hover:border-zinc-500 hover:bg-zinc-900/50 transition-smooth hover:scale-[1.02]"
          >
            <Github size={22} />
            GitHub
          </a>
        </div>

        <p className="text-zinc-600 text-sm">Mumbai, India</p>
      </div>
    </section>
  );
}