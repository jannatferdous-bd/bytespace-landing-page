import React, { useState } from 'react';
import { Star, Clock, BookOpen } from 'lucide-react';



// Course images import
import frame3 from '../assets/Frame (3).jfif';
import frame4 from '../assets/Frame (4).png';
import frame5 from '../assets/Frame (5).PNG';
import frame6 from '../assets/Frame (6).png';
import frame7 from '../assets/Frame(7).png';
import frame8 from '../assets/Frame (8).png';

// Icons & Ellipse avatars import
import vector7 from '../assets/Vector (7).png'; // Beginner icon
import vector8 from '../assets/Vector (8).png'; // Star rating icon
import ellipse2 from '../assets/Ellipse2.png';
import ellipse3 from '../assets/Ellipse3.png';
import ellipse4 from '../assets/Ellipse4.png';
import ellipse5 from '../assets/Ellipse5.png';
import ellipse6 from '../assets/Ellipse6.png';

// Category icons import (ফাইল নামের স্পেস রিমুভ করে ফোল্ডারের সাথে হুবহু মিল করা হয়েছে)
import frame9 from '../assets/Frame (9).png';
import frame10 from '../assets/Frame(10).png';
import frame11 from '../assets/Frame(11).png';
import frame12 from '../assets/Frame(12).png';
import frame13 from '../assets/Frame(13).png';
import frame14 from '../assets/Frame(14).png';

export default function Courses() {
  const categoryRows = [
    ['Featured', 'Music', 'Drawing & Painting', 'Marketing', 'Animation', 'Social Media', 'UI/UX Design', 'Creative Marketing'],
    ['Digital Illustration', 'Film & Video', 'Crafts', 'Freelance & Entrepreneurship', 'Graphic Design', 'Photography'],
    ['Productivity', 'Web Development', 'Data Science', 'Cooking', '+ More']
  ];
const categoriesList = [
    { name: "Design", icon: frame9 },
    { name: "Development", icon: frame10 },
    { name: "IT & Software", icon: frame11 },
    { name: "Business", icon: frame12 },
    { name: "Marketing", icon: frame13 },
    { name: "Photography", icon: frame14 },
  ];
  // Course cards data (৬টি কার্ডের জন্য নির্দিষ্ট হেডলাইন সহ)
  const courseData = [
    {
      id: 1,
      image: frame3,
      title: "Learn Figma from Basic",
      subtitle: "by purepearl studio",
      rating: "4.5",
      level: "Beginner",
      price: "$25",
      priceType: "/lifetime"
    },
    {
      id: 2,
      image: frame4,
      title: "Build Digital Asset",
      subtitle: "by purepearl studio",
      rating: "4.5",
      level: "Beginner",
      price: "$25",
      priceType: "/lifetime"
    },
    {
      id: 3,
      image: frame5,
      title: "the Power of Big Data",
      subtitle: "by purepearl studio",
      rating: "4.5",
      level: "Beginner",
      price: "$25",
      priceType: "/lifetime"
    },
    {
      id: 4,
      image: frame6,
      title: "Balancing Productivity and Self-Care",
      subtitle: "by purepearl studio",
      rating: "4.5",
      level: "Beginner",
      price: "$25",
      priceType: "/lifetime"
    },
    {
      id: 5,
      image: frame7,
      title: "Mastering Money Management",
      subtitle: "by purepearl studio",
      rating: "4.5",
      level: "Beginner",
      price: "$25",
      priceType: "/lifetime"
    },
    {
      id: 6,
      image: frame8,
      title: "From Idea to Startup Success",
      subtitle: "by purepearl studio",
      rating: "4.5",
      level: "Beginner",
      price: "$25",
      priceType: "/lifetime"
    }
  ];

  return (
   <section id="courses" className="bg-white py-16 md:py-20 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-[920px] mx-auto text-center flex flex-col items-center justify-center gap-5 mb-14">
          
          {/* Headline (From 4th SS) - Extrabold, dark color, tight leading */}
          <h2 className="text-4xl md:text-[48px] font-semibold text-[#0F172A] font-poppins leading-[1.15] tracking-tight">
            Discover Your Passion,<br /> Build Your Skills
          </h2>
          
          {/* Paragraph (From 3rd SS) - Light gray color, relaxed line-height */}
          <p className="text-sm md:text-base text-[#71717A] font-satoshi leading-[1.6] max-w-[850px] mx-auto">
            At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life.
          </p>
          
        </div>

       {/* Categories Section (Tabs) */}
        <div className="flex flex-col items-center justify-center gap-4 mb-16 w-full overflow-hidden">
          {categoryRows.map((row, rowIndex) => (
            // flex-wrap er bodole flex-nowrap dewa hoyeche jate ek line ei thake
            <div key={rowIndex} className="flex flex-nowrap justify-start md:justify-center items-center gap-x-2 md:gap-x-4 gap-y-4 w-full overflow-x-auto scrollbar-hide py-1">
              
              {row.map((item, itemIndex) => {
                const isFeatured = item === 'Featured';
                const isMore = item === '+ More';

                return (
                  <button
                    key={itemIndex}
                    type="button"
                    // whitespace-nowrap ebong flex-shrink-0 add kora hoyeche jate button choto ba bhenge na jay
                    className={`font-satoshi text-[15px] md:text-[16px] leading-[1.2] font-medium transition-colors duration-200 cursor-pointer flex items-center justify-center whitespace-nowrap flex-shrink-0
                      ${isFeatured 
                        ? 'bg-[#CBFC01] text-slate-900 px-5 md:px-6 py-2.5 rounded-full' 
                        : isMore 
                          ? 'text-blue-600 hover:text-blue-800 px-2 py-2.5 bg-transparent' 
                          : 'bg-[#F4F4F5] text-[#4B4C53] px-4 md:px-5 lg:px-6 py-2.5 rounded-full hover:bg-gray-200' 
                      }
                    `}
                  >
                    {item}
                  </button>
                );
              })}
              
            </div>
          ))}
        </div>

       {/* Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courseData.map((course) => (
            <div 
              key={course.id} 
              className="bg-white border border-[#E4E4E7] rounded-[24px] p-4 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div>
               {/* Course Image Wrapper */}
                <div className="relative w-full h-[195px] rounded-[16px] overflow-hidden mb-4">
                  <img 
                    src={course.image} 
                    alt={course.title} 
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Transparent/Translucent pill badges with backdrop blur */}
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
                    {course.title}
                  </h3>
                  <div className="flex items-center gap-1 text-slate-700 font-medium text-sm flex-shrink-0 mt-1">
                    <span>{course.rating}</span>
                    <img src={vector8} alt="Star" className="w-3.5 h-3.5 object-contain grayscale opacity-70" />
                  </div>
                </div>

                {/* Subtitle */}
                <p className="font-satoshi text-xs text-gray-500 mb-3">
                  {course.subtitle}
                </p>

                {/* Level and Ellipse Avatars - Gap reduced here using mb-4 instead of mb-6 */}
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-[#F4F4F5] px-3.5 py-2 rounded-lg flex items-center gap-2 text-xs font-medium text-slate-700">
                    <img src={vector7} alt="Beginner Icon" className="w-4 h-4 object-contain" />
                    <span>{course.level}</span>
                  </div>

                  {/* Overlapping Ellipse Avatars */}
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

              {/* Price Section - Extra border-t line removed and top padding optimized */}
              <div className="pt-2 flex items-center justify-between">
                <div>
                  <span className="font-satoshi text-xl font-bold text-blue-600">{course.price}</span>
                  <span className="font-satoshi text-xs text-gray-400 ml-1">{course.priceType}</span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Explore Diverse Learning Paths Section */}
        <div className="w-full pt-16 md:pt-24 border-t border-gray-100">
          <div className="max-w-[920px] mx-auto text-center flex flex-col items-center justify-center gap-4 mb-14">
            <h2 className="text-3xl md:text-[40px] font-semibold text-slate-900 font-poppins leading-tight">
              Explore Diverse Learning Paths at Bytespace
            </h2>
            <p className="text-sm md:text-base text-slate-600 font-satoshi leading-[1.6] max-w-[850px] mx-auto">
              At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories.
            </p>
          </div>

          {/* 6 Category Boxes in One Line */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {categoriesList.map((cat, index) => (
              <div 
                key={index}
                className="bg-white border border-[#E4E4E7] rounded-2xl p-6 flex flex-col items-center justify-center gap-4 text-center hover:shadow-md transition-shadow duration-300 cursor-pointer"
              >
                <div className="w-[60px] h-[60px] rounded-full bg-[#D4FB20] flex items-center justify-center p-3.5">
                  <img src={cat.icon} alt={cat.name} className="w-full h-full object-contain" />
                </div>
                <h3 className="font-satoshi text-base font-semibold text-slate-900">
                  {cat.name}
                </h3>
              </div>
            ))}
          </div>
        </div>



      </div>
    </section>
  );
}

