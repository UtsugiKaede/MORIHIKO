
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1511084901824-1c57f5a16c98?auto=format&fit=crop&q=80&w=2000" 
          alt="Snowy Window" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-stone-900/40 bg-snow-gradient"></div>
      </div>
      
      <div className="relative z-10 text-center px-6">
        <div className="mb-8 opacity-0 animate-[fadeIn_1s_ease-out_forwards]">
          <h2 className="text-white text-xs tracking-[0.8em] uppercase font-light">EST. 1996 | SAPPORO MARUYAMA</h2>
        </div>
        <h1 className="text-white text-5xl md:text-8xl font-serif mb-8 leading-tight opacity-0 animate-[fadeIn_1.5s_ease-out_0.5s_forwards]">
          森彦の冬、<br />温もりの時間。
        </h1>
        <p className="text-stone-100 max-w-xl mx-auto text-lg leading-relaxed font-light mb-12 opacity-0 animate-[fadeIn_2s_ease-out_1s_forwards]">
          古民家の温もり、窓の外に降り積もる雪。<br />
          深い琥珀色の一杯に、心を委ねる贅沢。
        </p>
        <div className="opacity-0 animate-[fadeIn_2.5s_ease-out_1.5s_forwards]">
          <a 
            href="#products" 
            className="inline-block border border-white text-white px-12 py-4 text-xs tracking-[0.3em] uppercase hover:bg-white hover:text-stone-900 transition-all duration-700"
          >
            Explore Menu
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}} />
    </section>
  );
};

export default Hero;
