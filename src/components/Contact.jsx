import { Mail, Linkedin, Github, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-pink-600/10 to-blue-600/10"></div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-4xl sm:text-5xl font-bold mb-6">
          Let’s Build Something Great
        </h2>
        <p className="text-lg text-gray-300 mb-12">
          Looking for a PM who drives strategy <span className="text-purple-400 font-semibold">AND</span> ships code? Let’s connect.
        </p>

        {/* Contact Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <a
            href="mailto:sharmashekhar992@gmail.com"
            className="group glass glass-hover rounded-2xl p-6 hover:scale-105 transition-all"
          >
            <Mail className="mx-auto mb-3 group-hover:scale-110 transition-transform text-purple-400" size={32} />
            <p className="font-semibold">Email</p>
            <p className="text-sm text-gray-400 truncate">sharmashekhar992@gmail.com</p>
          </a>

          <a
            href="https://www.linkedin.com/in/sheksharma"
            target="_blank"
            rel="noopener noreferrer"
            className="group glass glass-hover rounded-2xl p-6 hover:scale-105 transition-all"
          >
            <Linkedin className="mx-auto mb-3 group-hover:scale-110 transition-transform text-blue-400" size={32} />
            <p className="font-semibold">LinkedIn</p>
            <p className="text-sm text-gray-400">/in/sheksharma</p>
          </a>

          <a
            href="https://github.com/shekhar992"
            target="_blank"
            rel="noopener noreferrer"
            className="group glass glass-hover rounded-2xl p-6 hover:scale-105 transition-all"
          >
            <Github className="mx-auto mb-3 group-hover:scale-110 transition-transform text-pink-400" size={32} />
            <p className="font-semibold">GitHub</p>
            <p className="text-sm text-gray-400">/shekhar992</p>
          </a>

          <div className="glass rounded-2xl p-6">
            <MapPin className="mx-auto mb-3 text-cyan-400" size={32} />
            <p className="font-semibold">Location</p>
            <p className="text-sm text-gray-400">Mumbai, India</p>
          </div>
        </div>

        {/* CTA */}
        <div className="glass rounded-2xl p-8">
          <p className="text-lg mb-4">Interested in hiring or collaborating?</p>
          <a
            href="mailto:sharmashekhar992@gmail.com?subject=Let's Connect - Product Role"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl hover:shadow-2xl hover:shadow-purple-500/50 transition-all font-semibold hover:scale-105"
          >
            Get in Touch
            <Mail size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}