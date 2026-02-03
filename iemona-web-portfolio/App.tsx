import React, { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-brand-blue font-sans selection:bg-brand-yellow selection:text-brand-blue">
      <Navbar />
      <main>
        <div className="reveal">
          <Hero />
        </div>
        <div className="reveal">
          <Services />
        </div>
        <div className="reveal">
          <Projects />
        </div>
        <div className="reveal">
          <Contact />
        </div>
      </main>
    </div>
  );
}

export default App;