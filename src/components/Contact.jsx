import { Mail, Linkedin, Github, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary to-purple-600 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold mb-6">
          Let's Build Something Great
        </h2>
        <p className="text-xl text-blue-100 mb-12">
          Looking for a Senior Product Manager who can drive strategy AND ship products?
          Let's connect.
        </p>

        {/* Contact Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <a
            href="mailto:sharmashekhar992@gmail.com"
            className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all group"
          >
            <Mail className="mx-auto mb-3 group-hover:scale-110 transition-transform" size={32} />
            <p className="font-semibold">Email</p>
            <p className="text-sm text-blue-100">sharmashekhar992@gmail.com</p>
          </a>

          <a
            href="https://www.linkedin.com/in/sheksharma"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all group"
          >
            <Linkedin className="mx-auto mb-3 group-hover:scale-110 transition-transform" size={32} />
            <p className="font-semibold">LinkedIn</p>
            <p className="text-sm text-blue-100">/in/sheksharma</p>
          </a>

          <a
            href="https://github.com/shekhar992"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all group"
          >
            <Github className="mx-auto mb-3 group-hover:scale-110 transition-transform" size={32} />
            <p className="font-semibold">GitHub</p>
            <p className="text-sm text-blue-100">/shekhar992</p>
          </a>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <MapPin className="mx-auto mb-3" size={32} />
            <p className="font-semibold">Location</p>
            <p className="text-sm text-blue-100">Mumbai, India</p>
          </div>
        </div>

        {/* Additional CTA */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
          <p className="text-lg mb-4">Interested in hiring or collaborating?</p>
          <a
            href="mailto:sharmashekhar992@gmail.com?subject=Let's Connect - Product Role"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary rounded-lg hover:bg-gray-100 transition-all font-semibold shadow-lg hover:shadow-xl hover:scale-105"
          >
            Get in Touch
            <Mail size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}