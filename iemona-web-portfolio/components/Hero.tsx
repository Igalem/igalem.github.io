import React, { useState, useEffect } from 'react';
import { Send, Linkedin, Github, MessageCircle } from 'lucide-react';

// Custom Medium Icon SVG
const MediumIcon = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.82 6.82 0 010 12a6.82 6.82 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.41-3.38 6.41s-3.38-2.87-3.38-6.41 1.51-6.41 3.38-6.41 3.38 2.87 3.38 6.41zM24 12c0 3.17-.53 5.75-1.19 5.75s-1.19-2.58-1.19-5.75.53-5.75 1.19-5.75S24 8.83 24 12z" />
  </svg>
);

export const Hero: React.FC = () => {
  // Assuming the user has placed the new image as profile.png in the root
  const imgSrc = '/profile.png';

  const [text, setText] = useState('');
  const [isNameDone, setIsNameDone] = useState(false);
  const [showDesc, setShowDesc] = useState(false);
  const fullText = "Hi, I am Igal ";
  const fullDesc = "I design and implement scalable Big Data ecosystems on cloud infrastructure, blending technical precision in distributed computing and serverless architecture with strategic insight into autonomous AI agents and intelligent workflows.";

  useEffect(() => {
    // Name typing animation
    let currentText = '';
    let nameIndex = 0;
    const nameIntervalId = setInterval(() => {
      if (nameIndex < fullText.length) {
        currentText += fullText[nameIndex];
        setText(currentText);
        nameIndex++;
      } else {
        clearInterval(nameIntervalId);
        setIsNameDone(true);
      }
    }, 100);

    // Parallel fade-in for description
    const timeoutId = setTimeout(() => {
      setShowDesc(true);
    }, 500);

    return () => {
      clearInterval(nameIntervalId);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <section id="home" className="relative min-h-screen bg-brand-blue pt-12 lg:pt-20 overflow-hidden flex flex-col justify-center lg:justify-start">
      {/* Background Decorative Blobs */}
      <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-blue-400 rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-2000"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10 flex flex-col justify-center lg:grid lg:grid-cols-12 gap-2 lg:gap-8 items-center lg:items-center h-full flex-grow pt-4 lg:pt-0">

        {/* Center Image - User Profile - RE-FRAMED MEDIUM SHOT */}
        {/* On mobile, this will appear after socials (order-3) */}
        <div className="lg:col-span-6 flex justify-center items-end relative order-3 lg:order-2 h-[45vh] md:h-[60vh] lg:h-full z-10 self-end mt-8 lg:mt-0">
          <div className="relative w-full h-full flex items-end justify-center">
            {/* Abstract Circle behind head */}
            <div className="absolute bottom-0 w-[280px] h-[280px] md:w-[600px] md:h-[600px] bg-white/5 rounded-full blur-3xl mb-[-50px] lg:mb-[-100px]"></div>

            <img
              src={imgSrc}
              alt="Igal Emona - AI & Big Data Engineer"
              className="relative z-10 object-contain object-bottom h-full w-auto scale-[1.1] md:scale-[1.8] lg:scale-[1.1] origin-bottom transition-all duration-700 ease-in-out"
              style={{
                filter: 'drop-shadow(0 20px 30px rgba(0,0,0,0.5)) drop-shadow(0 10px 10px rgba(0,0,0,0.3))'
              }}
            />
          </div>
        </div>

        {/* Combined Title Content - Top on Mobile (order-1) */}
        <div className="lg:col-span-3 flex flex-col justify-center order-1 lg:order-1 relative text-center lg:text-left z-20 mt-2 md:mt-8 lg:mt-0">
          <div className="mb-2 lg:mb-6">
            <h3 className="text-xl md:text-2xl font-bold text-brand-yellow uppercase tracking-widest inline-block min-h-[1.5em]">
              {text}
              {!isNameDone && <span className="animate-pulse">|</span>}
            </h3>
          </div>

          <h1 className="text-3xl md:text-6xl lg:text-7xl font-black text-white leading-[0.85] tracking-tighter mb-4 lg:mb-8 drop-shadow-2xl">
            AI & BIG DATA
            <br />
            <span className="text-white/90">ENGINEER</span>
          </h1>

          <div className="text-white max-w-sm mx-auto lg:mx-0">
            <p className={`text-xs md:text-sm lg:text-lg leading-relaxed font-light min-h-[4em] transition-all duration-1000 ease-out ${showDesc ? 'opacity-90 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              {fullDesc}
            </p>
          </div>
        </div>

        {/* Right Content - Socials (order-2) */}
        <div className="lg:col-span-3 flex flex-col justify-center items-center lg:items-end text-center lg:text-right order-2 relative mt-4 lg:mt-0 z-20">

          <div className="mb-4 lg:mb-0 flex flex-col items-center lg:items-end">
            <span className="text-white text-xs lg:text-lg font-bold lg:font-black tracking-widest lg:tracking-[0.2em] mb-2 lg:mb-4">FOLLOW ME</span>
            <div className="flex space-x-3 lg:space-x-4">
              {[
                { Icon: Linkedin, href: 'https://www.linkedin.com/in/igalemona' },
                { Icon: Github, href: 'https://github.com/Igalem' },
                { Icon: MediumIcon, href: 'https://medium.com/@igal.emona' },
                { Icon: MessageCircle, href: 'https://wa.me/972507193667' },
                { Icon: Send, href: 'https://t.me/+972507193667' }
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 lg:w-12 lg:h-12 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-brand-yellow hover:text-brand-blue hover:border-brand-yellow transition-all transform hover:scale-110 shadow-lg"
                >
                  <social.Icon size={18} className="lg:hidden" />
                  <social.Icon size={24} className="hidden lg:block" />
                </a>
              ))}
            </div>

          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-1.5 bg-brand-yellow rounded-full"></div>
        </div>
      </div>
    </section>
  );
};