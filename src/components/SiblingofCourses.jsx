import React from 'react';
import frame3 from '../assets/Frame (3).jfif';
import vector7 from '../assets/Vector (7).png';
import vector8 from '../assets/Vector (8).png';
import ellipse2 from '../assets/Ellipse2.png';
import ellipse3 from '../assets/Ellipse3.png';
import ellipse4 from '../assets/Ellipse4.png';
import ellipse5 from '../assets/Ellipse5.png';
import ellipse6 from '../assets/Ellipse6.png';
import frame15 from '../assets/Frame (15).png'; // আপনার ফাইলের আসল নাম অনুযায়ী এটি পাল্টে নিতে পারেন
import Imageperson from '../assets/Imageperson.png'; 



import Imagegirl from '../assets/Imagegirl.png';
import rangebar from '../assets/rangebar.png';
import frame16 from '../assets/Frame (16).png';
import autoLayoutVertical from '../assets/Auto Layout Vertical.png';
import Ellipse21 from '../assets/Ellipse21.png';
import Ellipse22 from '../assets/Ellipse22.png';
import Ellipse23 from '../assets/Ellipse23.png';
import Ellipse24 from '../assets/Ellipse24.png';
import Ellipse25 from '../assets/Ellipse25.png';
import Ellipse26 from '../assets/Ellipse26.png';
import Ellipse27 from '../assets/Ellipse27.png';
import Ellipse28 from '../assets/Ellipse28.png';

import checkIcon from '../assets/Style=Filled.png';

const checklist = [
  'Share Your Expertise',
  'Monetize Your Passion',
  'Flexibility and Autonomy',
  'Build a Community',
];



const avatars = [Ellipse21, Ellipse22, Ellipse23, Ellipse24, Ellipse25, Ellipse26, Ellipse27];

export default function SiblingofCoursesSection() {
  return (
    <section id="siblingofCourses" className="relative w-full py-24 px-4 sm:px-6 lg:px-8 bg-white/40 backdrop-blur-3xl overflow-hidden border-y border-white/60 shadow-[0_8px_32px_0_rgba(31,38,135,0.05)]">
      
      {/* 1. TOP PART: Right-side middle-er dike Blue, Left-side Lime */}
      <div className="absolute top-10 right-1/4 w-[420px] h-[420px] bg-[#3b82f6] rounded-full blur-[130px] opacity-40 pointer-events-none z-0"></div>
      <div className="absolute top-10 left-10 w-[450px] h-[450px] bg-[#d4fb20] rounded-full blur-[140px] opacity-70 pointer-events-none z-0"></div>

      {/* 2. MIDDLE PART: Right side Blue */}
      <div className="absolute top-1/2 -translate-y-1/2 right-10 w-[400px] h-[400px] bg-[#d4fb20] rounded-full blur-[140px] opacity-70 pointer-events-none z-0"></div>

      {/* 3. BOTTOM PART: Right corner-e Blue, Left corner-e Lime */}
      <div className="absolute bottom-5 right-5 w-[450px] h-[450px] bg-[#3b82f6] rounded-full blur-[130px] opacity-40 pointer-events-none z-0"></div>
      <div className="absolute bottom-5 left-5 w-[500px] h-[500px] bg-[#d4fb20] rounded-full blur-[140px] opacity-75 pointer-events-none z-0"></div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto p-4 md:p-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side Content */}
          <div className="flex flex-col gap-6">
            {/* Headline */}
            <h2 className="text-3xl md:text-[42px] font-medium text-slate-900 leading-[1.2] font-poppins">
              Your Path to Professional Growth Starts Here!
            </h2>

            {/* Subheading with exact line breaks */}
            <p className="text-sm md:text-base text-[#4B4C53] font-satoshi leading-[1.7]">
              Explore our curated selection of courses tailored to enhance <br className="hidden md:block" />
              your capabilities and accelerate your career journey. <br className="hidden md:block" />
              Whether you are looking to sharpen specific skills, gain <br className="hidden md:block" />
              industry expertise, or embark on a new career path entirely, <br className="hidden md:block" />
              we have the resources you need.
            </p>

            {/* Stats Section */}
            <div className="flex items-center justify-between pt-4 max-w-md">
              <div className="flex flex-col">
                <span className="text-[40px] md:text-[48px] font-medium text-blue-600 font-poppins leading-none">12K</span>
                <span className="text-lg font-large text-slate-700 font-satoshi mt-2">Students</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[40px] md:text-[48px] font-medium text-blue-600 font-poppins leading-none">70+</span>
                <span className="text-lg font-large text-slate-700 font-satoshi mt-2">Courses</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[40px] md:text-[48px] font-medium text-blue-600 font-poppins leading-none">16</span>
                <span className="text-lg font-large text-slate-700 font-satoshi mt-2">Creators</span>
              </div>
            </div>
          </div>

         {/* Right Side Course Card with Overlapping Imageperson & Progress Card */}
          <div className="flex justify-center lg:justify-start relative py-12 px-6">
            
            {/* Base Course Card */}
            <div className="bg-white/90 backdrop-blur-md border border-[#E4E4E7] rounded-[24px] p-4 w-full max-w-[380px] shadow-sm relative z-10">
              <div>
                {/* Course Image Wrapper */}
                <div className="relative w-full h-[195px] rounded-[16px] overflow-hidden mb-4">
                  <img 
                    src={frame3} 
                    alt="Learn Figma from Basic" 
                    className="w-full h-full object-cover"
                  />
                  
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-2">
                    <span className="bg-white/60 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-medium text-slate-800 shadow-sm">
                      17 Lessons
                    </span>
                    <span className="bg-white/60 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-medium text-slate-800 shadow-sm">
                      2 hours 16 mins
                    </span>
                    <span className="bg-white/60 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-medium text-slate-800 shadow-sm">
                      59 Comments
                    </span>
                  </div>
                </div>

                {/* Title and Rating */}
                <div className="flex items-start justify-between gap-2 mb-1">
                  <h3 className="font-satoshi text-[18px] font-bold text-slate-900 leading-snug">
                    Learn Figma from Basic
                  </h3>
                  <div className="flex items-center gap-1 text-slate-700 font-medium text-sm flex-shrink-0 mt-1">
                    <span>4.5</span>
                    <img src={vector8} alt="Star" className="w-3.5 h-3.5 object-contain grayscale opacity-70" />
                  </div>
                </div>

                {/* Subtitle */}
                <p className="font-satoshi text-xs text-gray-500 mb-3">
                  by purepearl studio
                </p>

                {/* Level and Avatars */}
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-[#F4F4F5] px-3.5 py-2 rounded-lg flex items-center gap-2 text-xs font-medium text-slate-700">
                    <img src={vector7} alt="Beginner Icon" className="w-4 h-4 object-contain" />
                    <span>Beginner</span>
                  </div>

                  <div className="flex items-center -space-x-2">
                    <img src={ellipse2} alt="Avatar 2" className="w-7 h-7 rounded-full border-2 border-white object-cover" />
                    <img src={ellipse3} alt="Avatar 3" className="w-7 h-7 rounded-full border-2 border-white object-cover" />
                    <img src={ellipse4} alt="Avatar 4" className="w-7 h-7 rounded-full border-2 border-white object-cover" />
                    <img src={ellipse5} alt="Avatar 5" className="w-7 h-7 rounded-full border-2 border-white object-cover" />
                    <img src={ellipse6} alt="Avatar 6" className="w-7 h-7 rounded-full border-2 border-white object-cover" />
                    <div className="w-7 h-7 rounded-full bg-[#CBFC01] border-2 border-white flex items-center justify-center text-[9px] text-slate-900 font-bold">26+</div>
                  </div>
                </div>
              </div>

              {/* Price Section */}
              <div className="pt-2 flex items-center justify-between">
                <div>
                  <span className="font-satoshi text-xl font-bold text-blue-600">$25</span>
                  <span className="font-satoshi text-xs text-gray-400 ml-1">/lifetime</span>
                </div>
              </div>
            </div>

           {/* Overlapping Imageperson shifted precisely to the left */}
            <div className="absolute top-16 left-20 z-20 pointer-events-none w-[540px] md:w-[700px]">
              <img 
                src={Imageperson} 
                alt="Creator Person" 
                className="w-full h-auto object-contain drop-shadow-2xl" 
              />
            </div>

          {/* Overlapping Learning Progress 55% Card */}
            <div className="absolute top-[260px] -right-[80px] z-30 bg-white/95 backdrop-blur-xl border border-white/80 rounded-3xl p-5 shadow-xl w-[220px]">
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-medium text-slate-500 font-satoshi">Learning Progress</span>
              </div>
              <div className="text-4xl font-bold text-slate-900 font-poppins mb-3">55%</div>
              <div className="w-full bg-gray-100 h-2.5 rounded-full overflow-hidden">
                <div className="bg-[#CBFC01] h-full w-[55%] rounded-full"></div>
              </div>
            </div>
            {/* Overlapping Frame (15) */}
            <div className="absolute top-[100px] -right-[140px] z-40 pointer-events-none w-[230px]">
              <img
                src={frame15}
                alt=""
                className="w-full h-auto object-contain select-none"
              />
            </div>

            

            
          </div>

          

          



        </div>

        {/* 2nd section: girl + text, pashapashi */}
       <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mt-[150px]">

          {/* Left: girl block */}
          <div className="relative w-[541px] h-[596px]">

            {/* Imagegirl */}
            <img
              src={Imagegirl}
              alt="Creator"
              className="absolute top-0 left-[15px] z-20 w-[545px] max-w-none h-auto pointer-events-none"
            />

            {/* Total Revenue card */}
            <div className="absolute top-[44px] left-0 z-10 w-[230px] rounded-2xl bg-[#0040E0] p-[15px] text-[#F5F5F6]">
              <h4 className="text-base leading-5 font-medium font-satoshi">Total Revenue</h4>
              <p className="text-xs leading-4 text-white/80 font-satoshi">July 1-28</p>
              <p className="mt-0.5 text-[24px] leading-8 font-semibold tracking-[-0.01em] font-poppins whitespace-nowrap">$120.29</p>
              <img src={rangebar} alt="" className="mt-2 block w-[200px] h-2" />
            </div>

            {/* Year to Date card */}
            <div className="absolute top-[194px] left-0 z-10 w-[135px] rounded-2xl bg-[#0040E0] p-[15px] text-[#F5F5F6]">
              <h4 className="text-base leading-5 font-medium font-satoshi whitespace-nowrap">Year to Date</h4>
              <p className="text-xs leading-4 text-white/80 font-satoshi">2023</p>
              <p className="mt-0.5 text-[24px] leading-8 font-semibold tracking-[-0.01em] font-poppins whitespace-nowrap">$1,200.38</p>
              <img src={autoLayoutVertical} alt="" className="mt-2 block h-6 w-auto" />
            </div>

            {/* Happy Students card */}
            <div className="absolute top-[390px] left-[290px] z-30 w-[257px] rounded-2xl bg-white p-[15px] shadow-xl">
              <h4 className="text-[15px] leading-5 font-medium text-slate-900 font-satoshi">Happy Students</h4>
              <p className="text-[10px] font-satoshi">
                <span className="font-semibold text-slate-800">4.5</span>{' '}
                <span className="text-slate-400">(240)</span>{' '}
                <span className="text-yellow-400">★</span>
              </p>
              <div className="mt-3 flex items-center -space-x-2">
                {avatars.map((src, i) => (
                  <img key={i} src={src} alt="" className="w-9 h-9 rounded-full object-cover" />
                ))}
                <img src={Ellipse28} alt="2K+" className="w-10 h-10 rounded-full object-cover" />
              </div>
            </div>

            {/* Overlapping Frame (16) */}
            <img
              src={frame16}
              alt=""
              className="absolute top-[110px] left-[295px] z-30 w-[215px] h-auto pointer-events-none select-none"
            />
          </div>

          {/* Right: Create & Manage text content */}
          <div className="flex flex-col justify-center w-full max-w-[560px] lg:ml-10">

            {/* Heading */}
            <h2 className="max-w-[391px] text-3xl md:text-[44px] font-semibold text-[#242528] leading-[1.2] tracking-[-0.01em] font-poppins">
              Create &amp; Manage Courses Easily.
            </h2>

            {/* Subheading */}
            <p className="mt-10 text-[17px] leading-[29px] text-slate-500 font-satoshi">
              <span className="font-semibold text-[#242528]">ByteSpace</span> supports
              individuals or entities in the creation, publication, and administration
              of educational courses.
            </p>

            {/* Checklist */}
            <ul className="mt-12 flex flex-col gap-[18px]">
              {checklist.map((item) => (
                <li key={item} className="flex items-center gap-2.5">
                  <img src={checkIcon} alt="" className="w-[22px] h-[22px] shrink-0" />
                  <span className="text-lg font-medium leading-[1.2] text-[#242528] font-satoshi">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          </div>

      </div>


      
    </section>
  );
}