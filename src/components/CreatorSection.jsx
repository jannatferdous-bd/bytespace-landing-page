import React from 'react';
import { Link } from 'react-router-dom';

import lime101 from '../assets/lime101.png';
import frame1 from '../assets/Frame (1).png';
import coneLime102 from '../assets/Conelime102.png';
import coneWhite103 from '../assets/Conewhite103.png';
import lime104 from '../assets/lime104.png';
import maskGroup105 from '../assets/Mask Group105.png';
import maskGroup106 from '../assets/Mask Group106.png';

export default function CreatorSection() {
  return (
    <section
      id="creators"
      className="relative w-full overflow-hidden bg-[#0040E0] py-20 px-4 scroll-mt-24"
    >
      {/* Grid line background (Figma: ~120px cell) */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '120px 120px',
        }}
      ></div>

      {/* Decorations: LEFT group, browser er left edge e */}
      <div className="absolute inset-y-0 left-0 w-[720px] z-10 pointer-events-none hidden lg:block">
        <img src={lime101} alt="" className="absolute top-0 left-0 w-[226px] h-auto select-none" />
        <img src={frame1} alt="" className="absolute top-[3px] left-[178px] w-[177px] h-auto select-none" />

        {/* 106 = white cone, 105 = lime ring */}
        <img src={maskGroup106} alt="" className="absolute top-[227px] left-[7px] w-[133px] h-auto select-none" />
        <img src={maskGroup105} alt="" className="absolute bottom-[-27px] left-[27px] w-[347px] h-auto select-none" />
      </div>

      {/* Decorations: RIGHT group, browser er right edge e */}
      <div className="absolute inset-y-0 right-0 w-[720px] z-10 pointer-events-none hidden lg:block">
        <img src={coneLime102} alt="" className="absolute top-0 right-[165px] w-[198px] h-auto select-none" />
        <img src={coneWhite103} alt="" className="absolute top-[4px] right-[-48px] w-[218px] h-auto select-none" />
        <img src={lime104} alt="" className="absolute top-[294px] right-[1px] w-[330px] h-auto select-none" />
      </div>

      {/* Center content */}
      <div className="relative z-20 max-w-[1000px] mx-auto text-center flex flex-col items-center">
        <h2 className="text-3xl md:text-[44px] font-semibold text-white leading-[1.2] tracking-[-0.01em] font-poppins">
          Unlock Your Potential as a <br className="hidden md:block" />
          Creator with ByteSpace
        </h2>

        <p className="mt-12 text-base md:text-[18px] leading-[29px] text-white/90 font-satoshi">
          Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a <br className="hidden lg:block" />
          part of a community comprising over 10,000 local and international creators. Utilize our Course Editor, and showcase your <br className="hidden lg:block" />
          expertise by publishing your finest course on the ByteSpace Course Library.
        </p>

        {/* Register page e niye jabe */}
        <Link
          to="/register"
          className="mt-11 inline-flex items-center justify-center rounded-full bg-[#CBFC01] px-[23px] py-[11px] text-lg font-medium leading-[1.2] text-[#242528] font-satoshi transition hover:brightness-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          Join as Creator
        </Link>
      </div>
    </section>
  );
}