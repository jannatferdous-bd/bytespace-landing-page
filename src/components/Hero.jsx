import React from 'react';
import { Search } from 'lucide-react';

// Assets
import frameYellow from '../assets/Frame.png';
import frameWhite1 from '../assets/Frame (1).png';
import frameWhite2 from '../assets/Frame (2).png';
import donutShape from '../assets/Cone (1).png';
import yellowCone from '../assets/yellowcone.png';
import whiteTriangle from '../assets/Cone.png';
import heroPerson from '../assets/Imageperson.png';
import ellipseBlob from '../assets/Ellipse 7.png';

export default function Hero() {
  return (
    <section className="relative bg-[#003BE2] text-white pt-12 pb-0 text-center overflow-hidden min-h-[900px] flex flex-col justify-between">
      
      {/* === Background Decorative Shapes === */}
      <img src={frameYellow} alt="Yellow Shape" className="absolute top-[2%] lg:top-[5%] left-[-2%] lg:left-[0%] w-36 lg:w-48 z-0 pointer-events-none" />
      <img src={frameWhite1} alt="White Shape 1" className="absolute top-[32%] left-[8%] lg:left-[12%] w-24 lg:w-36 z-0 pointer-events-none" />
      <img src={yellowCone} alt="Yellow Cone" className="absolute top-[8%] right-[0%] lg:right-[2%] w-32 lg:w-44 z-0 pointer-events-none" />
      <img src={whiteTriangle} alt="White Triangle" className="absolute top-[28%] lg:top-[30%] right-[10%] lg:right-[15%] w-32 lg:w-40 z-20 pointer-events-none" />
      <img src={frameWhite2} alt="White Shape 2" className="absolute bottom-[20%] right-[2%] lg:right-[5%] w-28 lg:w-44 z-0 pointer-events-none" />

      {/* === Heading & Search Bar === */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-30 mt-4">
        <h1 className="font-poppins text-4xl sm:text-5xl lg:text-[56px] font-medium text-white tracking-[-0.01em] leading-[1.15] max-w-4xl mx-auto">
          Get Access to Hundreds <br />
          Courses Available
        </h1>

        <p className="font-satoshi text-blue-100/90 text-xs sm:text-sm lg:text-base mt-4 max-w-3xl mx-auto font-normal tracking-wide whitespace-nowrap">
          Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
        </p>

        <div className="mt-8 max-w-2xl mx-auto flex items-center gap-3">
          <div className="flex-1 bg-white rounded-full px-5 py-3.5 flex items-center shadow-lg z-30 relative">
            <Search className="w-5 h-5 text-gray-400 mr-3 flex-shrink-0" />
            <input 
              type="text" 
              placeholder="Course, topic, creator" 
              className="w-full text-gray-800 text-sm outline-none bg-transparent placeholder-gray-400 font-satoshi"
            />
          </div>
          <button className="bg-[#D4FB20] text-slate-900 px-8 py-3.5 rounded-full font-semibold text-sm hover:opacity-90 transition-opacity shadow-lg flex-shrink-0 font-satoshi relative z-30">
            Search
          </button>
        </div>
      </div>

      {/* === Hero Visual Section === */}
      <div className="relative w-full max-w-6xl mx-auto mt-16 h-[400px] lg:h-[540px] flex justify-center items-end z-10">
        
        {/* Exported Ellipse 7 Image - Height aro ektu choto kora hoyeche (h-[94%]) */}
        <img 
          src={ellipseBlob} 
          alt="Green Background Blob" 
          className="absolute bottom-0 h-[90%] lg:h-[84%] w-auto max-w-none z-0 pointer-events-none object-contain object-bottom"
        />

        {/* Main Person Image */}
        <img 
          src={heroPerson} 
          alt="Hero Student" 
          className="relative z-10 h-full w-auto object-contain bottom-0"
        />

        {/* Donut Shape (Cone1) */}
        <img 
          src={donutShape} 
          alt="Donut Shape" 
          className="absolute bottom-[10%] lg:bottom-[15%] left-[2%] lg:left-[4%] w-[180px] lg:w-[342px] z-20 pointer-events-none object-contain -translate-x-[40%]" 
        />

        {/* Floating Card 1: UI/UX Design */}
        <div className="absolute left-[12%] lg:left-[22%] top-[15%] lg:top-[25%] bg-white text-slate-900 rounded-xl px-4 py-3 shadow-xl z-30 text-left w-max">
          <p className="text-xs font-bold font-satoshi">UI/UX Design</p>
          <p className="text-[10px] text-gray-500 font-satoshi mt-1">200 Courses • 1000+ Students</p>
        </div>
       {/* Floating Card 2: Learning Progress 55% */}
        <div className="absolute right-[8%] lg:right-[22%] top-[30%] lg:top-[27%] bg-white text-slate-900 rounded-xl p-6 shadow-xl z-30 text-left w-max min-w-[240px]">
          <p className="text-sm text-gray-500 font-bold font-satoshi">Learning Progress</p>
          <p className="text-3xl font-bold text-slate-900 mt-1.5 font-poppins">55%</p>
          <div className="w-full bg-gray-200 h-2.5 rounded-full mt-3 overflow-hidden">
            <div className="bg-[#CBFC01] h-full w-[55%]"></div>
          </div>
        </div>

        {/* Floating Card 3: Happy Students */}
        <div className="absolute left-[25%] lg:left-[18%] bottom-[12%] lg:bottom-[15%] bg-white text-slate-900 rounded-2xl px-4 py-3 shadow-xl z-40 text-left w-max">
          <p className="text-[11px] text-gray-500 font-medium font-satoshi">Happy Students</p>
          <div className="flex items-center gap-1 mt-1">
            <span className="text-xs font-bold text-slate-800">4.5</span>
            <span className="text-yellow-400 text-xs">★</span>
            <span className="text-[10px] text-gray-400">(240)</span>
          </div>
          
          <div className="flex items-center mt-2">
            <div className="flex -space-x-2 overflow-hidden">
              <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="User 1" className="inline-block h-6 w-6 rounded-full ring-2 ring-white object-cover" />
              <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="User 2" className="inline-block h-6 w-6 rounded-full ring-2 ring-white object-cover" />
              <img src="https://randomuser.me/api/portraits/men/46.jpg" alt="User 3" className="inline-block h-6 w-6 rounded-full ring-2 ring-white object-cover" />
            </div>
            <div className="ml-3 bg-[#CBFC01] text-slate-900 text-[10px] font-bold px-2 py-0.5 rounded-full">
              2K+
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}