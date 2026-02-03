import React from 'react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-brand-blue text-white text-center">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl md:text-7xl font-black mb-8">
          LET'S WORK <br className="md:hidden" /> TOGETHER
        </h2>
        <p className="text-xl md:text-2xl opacity-80 max-w-2xl mx-auto mb-12">
          Need help optimizing your data infrastructure or building a new pipeline?
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <a
            href="mailto:igal.emona@gmail.com"
            className="inline-block bg-brand-yellow text-brand-blue text-xl font-bold px-10 py-5 rounded-full hover:bg-white transition-all transform hover:scale-105 shadow-2xl"
          >
            SAY HELLO 👋
          </a>
          <a
            href="https://wa.me/972507193667"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-500 text-white text-xl font-bold px-10 py-5 rounded-full hover:bg-green-600 transition-all transform hover:scale-105 shadow-2xl"
          >
            WHATSAPP ME 📱
          </a>
        </div>

        <div className="mt-20 pt-10 border-t border-white/20 flex flex-col md:flex-row justify-between items-center text-sm opacity-60">
          <p>© 2026 Igal Emona.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="https://t.me/+972507193667" target="_blank" rel="noopener noreferrer" className="hover:text-brand-yellow">Telegram</a>
            <a href="https://www.linkedin.com/in/igalemona" target="_blank" rel="noopener noreferrer" className="hover:text-brand-yellow">LinkedIn</a>
            <a href="https://github.com/Igalem" target="_blank" rel="noopener noreferrer" className="hover:text-brand-yellow">GitHub</a>
            <a href="https://medium.com/@igal.emona" target="_blank" rel="noopener noreferrer" className="hover:text-brand-yellow">Medium</a>
          </div>
        </div>
      </div>
    </section>
  );
};