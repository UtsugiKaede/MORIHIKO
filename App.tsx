
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ChatWidget from './components/ChatWidget';
import { PRODUCTS, GALLERY } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <Hero />

      {/* Concept Quote */}
      <section className="py-32 px-6 bg-slate-50 border-y border-stone-100">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-stone-400 text-xs tracking-[0.5em] uppercase block mb-8">Philosophy</span>
          <p className="text-stone-800 text-2xl md:text-3xl font-serif leading-[2] mb-4">
            「一杯のコーヒーが、北国の厳しい冬を少しだけ優しくする。森彦はそんな場所でありたいと願っています。」
          </p>
          <div className="w-12 h-px bg-stone-300 mx-auto mt-12"></div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-xl">
              <h2 className="text-stone-400 text-xs tracking-[0.5em] uppercase mb-4">Winter Collection</h2>
              <h3 className="text-stone-900 text-4xl md:text-5xl font-serif">季節を味わう、。</h3>
            </div>
            <p className="text-stone-500 text-sm md:text-base font-light max-w-sm">
              森彦が誇る深煎り「森の雫」をはじめ、冬の円山でしか味わえない限定メニュー。
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-20">
            {PRODUCTS.map((product) => (
              <div key={product.id} className="group cursor-pointer">
                <div className="relative aspect-[4/5] overflow-hidden mb-8 shadow-sm">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000 ease-out"
                  />
                  <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/10 transition-colors duration-500"></div>
                </div>
                <div className="space-y-3">
                  <h4 className="font-serif text-xl text-stone-900 tracking-wide">{product.name}</h4>
                  <p className="text-stone-500 text-sm font-light leading-relaxed">{product.description}</p>
                  <div className="pt-2">
                    <span className="text-stone-900 font-medium text-sm tracking-widest">{product.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-32 px-6 bg-stone-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-stone-500 text-xs tracking-[0.5em] uppercase mb-4">The Moments</h2>
            <h3 className="text-white text-4xl md:text-5xl font-serif">冬の断片。</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {GALLERY.map((item, idx) => (
              <div key={item.id} className={`relative overflow-hidden group ${idx % 3 === 1 ? 'md:mt-12' : ''}`}>
                <div className="aspect-[3/4] overflow-hidden">
                  <img 
                    src={item.url} 
                    alt={item.alt} 
                    className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105"
                  />
                </div>
                <div className="mt-4 opacity-60 group-hover:opacity-100 transition-opacity">
                  <p className="text-white text-[10px] tracking-[0.3em] uppercase font-light">{item.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Access Section */}
      <section id="access" className="py-32 px-6 bg-white relative">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
          <div className="w-full lg:w-3/5">
            <div className="relative group overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1482062364825-616fd23b8fc6?auto=format&fit=crop&q=80&w=1200" 
                alt="Maruyama Sapporo Street in Winter" 
                className="w-full h-[600px] object-cover transition-transform duration-[3s] group-hover:scale-110"
              />
              <div className="absolute inset-0 border-[20px] border-white/10"></div>
            </div>
          </div>
          <div className="w-full lg:w-2/5">
            <h2 className="text-stone-300 text-xs tracking-[0.5em] uppercase mb-6">Location</h2>
            <h3 className="text-stone-900 text-4xl md:text-5xl font-serif mb-16 leading-[1.4]">
              円山の路地裏に、<br />静かに佇む。
            </h3>
            
            <div className="space-y-12">
              <div className="flex items-start gap-8">
                <span className="text-[10px] text-stone-300 uppercase tracking-widest pt-2">Add.</span>
                <p className="text-stone-800 text-lg font-light leading-relaxed">
                  〒064-0802<br />
                  北海道札幌市中央区南2条西26丁目2-18
                </p>
              </div>

              <div className="flex items-start gap-8">
                <span className="text-[10px] text-stone-300 uppercase tracking-widest pt-2">Open.</span>
                <p className="text-stone-800 text-lg font-light leading-relaxed">
                  10:00 — 21:00 (L.O. 20:30)<br />
                  <span className="text-stone-400 text-sm mt-2 block italic">※年末年始を除き無休</span>
                </p>
              </div>

              <div className="flex items-start gap-8">
                <span className="text-[10px] text-stone-300 uppercase tracking-widest pt-2">Tel.</span>
                <p className="text-stone-800 text-lg font-light">
                  011-622-8880
                </p>
              </div>

              <div className="pt-8">
                <a 
                  href="https://maps.google.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-6 text-stone-900 group"
                >
                  <span className="text-xs font-semibold tracking-[0.3em] uppercase border-b border-stone-900 pb-1">View Map</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-50 py-24 border-t border-stone-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="mb-12">
            <h2 className="text-3xl font-serif font-bold tracking-[0.5em] text-stone-900 mb-2">MORIHIKO</h2>
            <span className="text-[10px] text-stone-400 tracking-[0.8em] uppercase">The Art of Coffee</span>
          </div>
          <div className="flex justify-center space-x-12 mb-16">
            {['Instagram', 'Facebook', 'Online Store'].map(link => (
              <a key={link} href="#" className="text-stone-500 text-xs tracking-widest hover:text-stone-900 transition-colors uppercase">{link}</a>
            ))}
          </div>
          <p className="text-stone-400 text-[10px] tracking-widest">
            &copy; {new Date().getFullYear()} MORIHIKO. ALL RIGHTS RESERVED.
          </p>
        </div>
      </footer>

      <ChatWidget />
    </div>
  );
};

export default App;
