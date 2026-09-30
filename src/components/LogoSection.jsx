import React from 'react';

// Vector assets import kora holo
import vector1 from '../assets/Vector.png';
import vector2 from '../assets/Vector (1).png';   // 2nd logo top part
import vector6 from '../assets/Vector (6).png';   // 2nd logo bottom part
import vector3 from '../assets/Vector (2).png';
import vector4 from '../assets/Vector (3).png';
import vector5 from '../assets/Vector (4).png';

export default function LogoSection() {
  const logos = [
    { icon: vector1, id: 1 },       
    { id: 2, isCombined: true },    // 2nd logo combined
    { icon: vector3, id: 3 },       
    { icon: vector4, id: 4 },       
    { icon: vector5, id: 5 },       
  ];

  return (
   <section className="bg-[#F5F5F6] py-10 md:py-14 w-full border-b border-gray-100/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Logos container */}
        <div className="flex flex-wrap justify-center lg:justify-between items-center gap-10 lg:gap-6">
          
          {logos.map((logo) => (
            <div key={logo.id} className="flex items-center gap-2.5 opacity-80 hover:opacity-100 transition-opacity duration-300 cursor-pointer">
              
              {/* Vector icon rendering */}
              {logo.isCombined ? (
                // Ekhane w-6 md:w-7 theke w-5 md:w-6 kora hyeche size choto korar jonno
                <div className="flex flex-col items-center justify-center w-5 md:w-6 flex-shrink-0">
                  {/* Top part (vector2) */}
                  <img src={vector2} alt="Logo Top" className="w-full h-auto block relative z-0" />
                  {/* Bottom part (vector6) - overlap korar jonno -mt-[2px] */}
                  <img src={vector6} alt="Logo Bottom" className="w-full h-auto block relative z-10 -mt-[2px]" />
                </div>
              ) : (
                // Baki normal logo gulor jonno
                <img 
                  src={logo.icon} 
                  alt="Logo Vector" 
                  className="h-6 md:h-7 w-auto object-contain flex-shrink-0" 
                />
              )}
              
              {/* Logoipsum text */}
              <span className="font-satoshi text-xl md:text-[22px] font-extrabold text-slate-700 tracking-tight mt-1">
                Logoipsum
              </span>
              
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}