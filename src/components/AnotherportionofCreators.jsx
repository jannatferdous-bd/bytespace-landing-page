import React from 'react';

import sarah from '../assets/Sarah M..png';
import james from '../assets/James L..png';
import alex from '../assets/Alex B..png';

const testimonials = [
  {
    name: 'Sarah M.',
    role: 'Enthusiastic Learner',
    avatar: sarah,
    quote: `"ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning."`,
  },
  {
    name: 'James L.',
    role: 'Lifelong Learner',
    avatar: james,
    quote: `"I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development."`,
  },
  {
    name: 'Alex B.',
    role: 'Inspired Creator',
    avatar: alex,
    quote: `"As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally."`,
  },
];

export default function AnotherportionofCreators() {
  return (
    <section
      id="testimonials"
      className="relative w-full overflow-hidden bg-white pt-[74px] pb-[58px] px-4 sm:px-6 scroll-mt-24"
    >
      {/* Glow background (glass morphism): lime, blue, white */}
      {/* top-center/right: lime behind paragraph */}
      <div className="absolute top-[10px] left-[548px] w-[520px] h-[300px] bg-[#d4fb20] rounded-full blur-[140px] opacity-70 pointer-events-none z-0"></div>
      {/* right edge: lime */}
      <div className="absolute top-[40px] right-[-60px] w-[360px] h-[460px] bg-[#d4fb20] rounded-full blur-[140px] opacity-70 pointer-events-none z-0"></div>
      {/* bottom-right: faint blue */}
      <div className="absolute bottom-[20px] right-[40px] w-[320px] h-[260px] bg-[#3b82f6] rounded-full blur-[130px] opacity-20 pointer-events-none z-0"></div>

      {/* bottom-left blue glow: browser er left border theke shuru, uporer dike light, niche jete jete deep */}
      <div
        className="absolute left-0 bottom-0 w-[1100px] h-[560px] pointer-events-none z-0"
        style={{
          background:
            'radial-gradient(ellipse 55% 100% at 30% 100%, rgba(59,130,246,0.55) 0%, rgba(59,130,246,0.38) 25%, rgba(59,130,246,0.18) 55%, rgba(59,130,246,0.06) 80%, rgba(59,130,246,0) 100%)',
        }}
      ></div>

      <div className="relative z-10 max-w-[1200px] mx-auto">
        {/* Header row */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12 lg:mb-[72px]">
          <h2 className="lg:w-[577px] text-3xl md:text-[44px] font-semibold text-black leading-[1.2] tracking-[-0.01em] font-poppins">
            Discover What Our <br />
            Community Is Saying
          </h2>

          <p className="lg:w-[568px] text-base md:text-[18px] leading-[29px] text-[#4B4C53] font-satoshi">
            At ByteSpace, our vibrant community of learners and creators is at the <br className="hidden lg:block" />
            heart of what we do. Hear directly from those who have experienced the <br className="hidden lg:block" />
            transformative journey of learning and creating on our platform. Explore <br className="hidden lg:block" />
            testimonials that reflect the diverse perspectives of enthusiastic learners <br className="hidden lg:block" />
            and accomplished creators.
          </p>
        </div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="bg-white rounded-[24px] p-6 shadow-[0_2px_20px_rgba(0,0,0,0.04)]"
            >
              <img
                src={item.avatar}
                alt={item.name}
                className="w-20 h-20 rounded-full object-cover"
              />

              <h3 className="mt-5 text-xl leading-7 font-semibold text-black font-poppins">
                {item.name}
              </h3>
              <p className="mt-0.5 text-base leading-5 font-medium text-[#0040E0] font-satoshi">
                {item.role}
              </p>

              <p className="mt-7 max-w-[320px] text-[18px] leading-[29px] text-[#4B4C53] font-satoshi">
                {item.quote}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}