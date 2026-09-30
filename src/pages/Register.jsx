import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// Course card images
import frame4 from '../assets/Frame (4).png';
import frame5 from '../assets/Frame (5).PNG';
import vector7 from '../assets/Vector (7).png';
import ellipse2 from '../assets/Ellipse2.png';
import ellipse3 from '../assets/Ellipse3.png';
import ellipse4 from '../assets/Ellipse4.png';
import ellipse5 from '../assets/Ellipse5.png';

// 3D shapes (Cone501 = lime ring, Frame (1) = white squiggle)
import coneLime from '../assets/Conelime102.png'; // lime pyramid
import ring from '../assets/Cone501.png';         // lime ring
import squiggle from '../assets/Frame (1).png';   // white squiggle

import { registerUser, isLoggedIn } from '../utils/auth';

const faces = [ellipse2, ellipse3, ellipse4, ellipse5];

function Avatars() {
  return (
    <div className="flex items-center -space-x-2">
      {faces.map((src, i) => (
        <img key={i} src={src} alt="" className="w-7 h-7 rounded-full border-2 border-white object-cover" />
      ))}
      <div className="w-7 h-7 rounded-full bg-[#111] border-2 border-white flex items-center justify-center text-[9px] text-white font-bold">
        26+
      </div>
    </div>
  );
}

function Star({ className = 'w-[18px] h-[18px]', fill = '#CBFC01' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill={fill}>
      <path d="M12 2l2.9 6.6 7.1.6-5.4 4.7 1.6 7L12 17.3 5.8 20.9l1.6-7L2 9.2l7.1-.6L12 2z" />
    </svg>
  );
}

function Pills() {
  return (
    <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between gap-1.5">
      {['17 Lessons', '2 hours 16 mins', '59 Comments'].map((t) => (
        <span
          key={t}
          className="bg-slate-500/50 backdrop-blur-sm px-2.5 py-1 rounded-full text-[10px] font-medium text-white/90 whitespace-nowrap"
        >
          {t}
        </span>
      ))}
    </div>
  );
}

function Chip() {
  return (
    <div className="bg-[#F4F4F5] px-3 py-2 rounded-lg flex items-center gap-2 text-xs leading-4 font-medium text-slate-700">
      <img src={vector7} alt="" className="w-4 h-4 object-contain" />
      Beginner
    </div>
  );
}

export default function Register() {
  const navigate = useNavigate();
  const loggedIn = isLoggedIn(); // inside the component, so it is re-checked on every render
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [popup, setPopup] = useState(null); // { ok: boolean, title: string, text: string }

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const res = registerUser(form);

    // An account with this email already exists
    if (res.status === 'exists') {
      setPopup({
        ok: false,
        title: 'Account already exists',
        text: 'This email is already registered. Please log in.',
      });
      return;
    }

    // Success: show popup (auto-redirects to Login after 5 seconds)
    setPopup({
      ok: true,
      title: 'Welcome to ByteSpace!',
      text: 'Your account is ready. Taking you to Login...',
    });
  };

  // OK button: close the popup right away (success also goes to Login)
  const handleOk = () => {
    const wasSuccess = popup?.ok;
    setPopup(null);
    if (wasSuccess) navigate('/login');
  };

  // If OK is not clicked, close (or redirect) automatically after 5 seconds
  useEffect(() => {
    if (!popup) return;
    const timer = setTimeout(() => {
      setPopup(null);
      if (popup.ok) navigate('/login');
    }, 5000);
    return () => clearTimeout(timer);
  }, [popup, navigate]);

  const inputClass =
    'h-[52px] w-full rounded-lg border border-[#E4E4E7] bg-white px-6 text-base sm:text-[18px] text-[#242528] font-satoshi placeholder:text-[#A1A1AA] outline-none focus:border-[#0040E0] transition';

  return (
    <div
      className="min-h-screen w-full text-white relative overflow-hidden bg-[#0040E0]"
      style={{
        backgroundImage:
          'linear-gradient(rgba(255,255,255,0.14) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.14) 1px, transparent 1px)',
        backgroundSize: '100px 100px',
      }}
    >
      {/* Popup (success / error) */}
      {popup && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 px-4">
          <div className="w-full max-w-sm rounded-2xl bg-white p-6 text-center text-[#242528] shadow-xl">
            <p className={`text-xl font-semibold font-poppins ${popup.ok ? 'text-[#0040E0]' : 'text-red-600'}`}>
              {popup.title}
            </p>
            <p className="mt-2 text-sm text-slate-600 font-satoshi">{popup.text}</p>
            <button
              type="button"
              onClick={handleOk}
              className="mt-5 rounded-full bg-[#CBFC01] px-8 py-2 text-sm font-medium font-satoshi transition hover:brightness-95"
            >
              OK
            </button>
          </div>
        </div>
      )}

      <div className="mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-[120px] pt-8 lg:pt-[34px] pb-12 lg:pb-[100px]">
        {/* Top bar: Logo (left) + Login button / Back to Home (right) */}
        <div className="flex items-center justify-between">
          <Link to={loggedIn ? '/' : '/register'} aria-label="ByteSpace" className="inline-block w-fit">
            <svg className="h-8 w-auto" viewBox="120 33 33 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M132.5 45.5C132.5 39.701 127.799 35 122 35V56C122 61.799 126.701 66.5 132.5 66.5V45.5Z" fill="#D4FB20" />
              <path d="M140.375 45.5C146.174 45.5 150.875 50.201 150.875 56H143C137.201 56 132.5 51.299 132.5 45.5L140.375 45.5Z" fill="#D4FB20" />
              <path d="M140.375 66.5C146.174 66.5 150.875 61.799 150.875 56H143C137.201 56 132.5 60.701 132.5 66.5L140.375 66.5Z" fill="#D4FB20" />
            </svg>
          </Link>

          <div className="flex items-center gap-3">
            {/* Existing user: goes to Login */}
            <Link
              to="/login"
              className="inline-flex items-center rounded-full bg-[#CBFC01] px-6 py-2 text-sm font-medium text-[#242528] font-satoshi transition hover:brightness-95"
            >
              Login
            </Link>

            {/* Only shown when logged in */}
            {loggedIn && (
              <Link
                to="/"
                className="inline-flex items-center gap-2 rounded-full border border-white/40 px-5 py-2 text-sm font-medium text-white font-satoshi transition hover:bg-white hover:text-[#0040E0]"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
                Back to Home
              </Link>
            )}
          </div>
        </div>

        <div className="mt-10 lg:mt-[53px] grid grid-cols-1 lg:grid-cols-[1fr_579px] gap-12 lg:gap-8 items-start">
          {/* LEFT: text + illustration */}
          <div className="flex flex-col">
            <h2 className="text-xl lg:text-[20px] font-semibold font-poppins leading-[30px]">
              Sign up and come in
            </h2>
            <p className="mt-3 text-base lg:text-[18px] leading-[1.6] text-white/90 font-satoshi lg:whitespace-nowrap">
              The registration process is straightforward, uncomplicated,
              <br className="hidden lg:block" />{' '}
              and efficient, allowing users to sign up quickly, easily, and at
              <br className="hidden lg:block" />{' '}
              no cost
            </p>

            {/* Illustration (desktop only) */}
            <div className="relative hidden lg:block mt-[60px] w-[500px] h-[570px]">
              {/* Back card: Build Digital Asset */}
              <div className="absolute z-10 left-0 top-[88px] w-[370px] bg-white rounded-3xl p-4 text-[#0F172A]">
                <div className="relative w-full h-[200px] rounded-2xl overflow-hidden">
                  <img src={frame4} alt="" className="w-full h-full object-cover" />
                  <span className="absolute bottom-2.5 left-2.5 bg-slate-500/50 px-2.5 py-1 rounded-full text-[10px] text-white/90">
                    17 Lessons
                  </span>
                </div>
                <h3 className="mt-4 text-[20px] leading-[30px] font-semibold font-poppins whitespace-nowrap">
                  Build Digital Asset
                </h3>
                <p className="mt-px text-xs leading-4 text-slate-500 font-satoshi">
                  by <span className="text-[#0040E0]">purepearl studio</span>
                </p>
                <div className="mt-[18px] flex items-center gap-3">
                  <Chip />
                  <Avatars />
                </div>
                <p className="mt-[13px] text-[#0040E0] font-bold text-lg leading-[26px] font-satoshi">
                  $25<span className="text-xs font-normal text-slate-400">/lifetime</span>
                </p>
              </div>

              {/* Front card: the Power of Big Data */}
              <div className="absolute z-20 left-[111px] top-0 w-[370px] bg-white rounded-3xl p-4 text-[#0F172A] shadow-xl">
                <div className="relative w-full h-[194px] rounded-2xl overflow-hidden">
                  <img src={frame5} alt="" className="w-full h-full object-cover" />
                  <Pills />
                </div>
                <div className="mt-5 flex items-center justify-between">
                  <h3 className="text-[20px] leading-[30px] font-semibold font-poppins">the Power of Big Data</h3>
                  <div className="flex items-center gap-1 text-base text-slate-500 font-satoshi">
                    4.5 <Star />
                  </div>
                </div>
                <p className="mt-px text-xs leading-4 text-slate-500 font-satoshi">
                  by <span className="text-[#0040E0]">purepearl studio</span>
                </p>
                <div className="mt-[18px] flex items-center gap-3">
                  <Chip />
                  <Avatars />
                </div>
                <p className="mt-4 text-[#0040E0] font-bold text-lg leading-[26px] font-satoshi">
                  $25<span className="text-xs font-normal text-slate-400">/lifetime</span>
                </p>
              </div>

              {/* Happy Students */}
              <div className="absolute z-30 left-[224px] top-[432px] w-[258px] rounded-2xl bg-[#CBFC01] p-4 text-[#0040E0] shadow-lg">
                <p className="text-base leading-6 font-medium font-satoshi">Happy Students</p>
                <p className="text-[10px] leading-[14px] flex items-center gap-1 text-slate-700">
                  4.5 <span className="text-slate-500">(240)</span>
                  <Star className="w-3 h-3" fill="#0040E0" />
                </p>
                <div className="mt-2 flex items-center -space-x-1.5">
                  {[ellipse2, ellipse3, ellipse4, ellipse5, ellipse2, ellipse3, ellipse4].map((src, i) => (
                    <img key={i} src={src} alt="" className="w-[34px] h-[34px] rounded-full border-2 border-[#CBFC01] object-cover" />
                  ))}
                  <div className="w-[34px] h-[34px] rounded-full bg-[#111] border-2 border-[#CBFC01] flex items-center justify-center text-[10px] text-white font-bold">
                    2K+
                  </div>
                </div>
              </div>

              {/* 3D shapes */}
              <img src={ring} alt="" className="absolute z-40 left-[12px] top-[9px] w-[165px] pointer-events-none" />
              <img src={coneLime} alt="" className="absolute z-40 left-[-27px] top-[394px] w-[188px] pointer-events-none" />
              <img src={squiggle} alt="" className="absolute z-40 left-[346px] top-[322px] w-[177px] pointer-events-none" />
            </div>
          </div>

          {/* RIGHT: form card */}
          <div className="w-full flex justify-center lg:justify-end">
            <div className="w-full max-w-[579px] lg:min-h-[781px] bg-white rounded-3xl px-8 pt-10 pb-8 sm:px-12 sm:pt-14 lg:px-16 lg:pt-16 lg:pb-12 flex flex-col text-[#242528]">
              <p className="text-base sm:text-[18px] leading-[26px] text-[#0040E0] font-satoshi">Create an Account</p>
              <h1 className="text-[32px] sm:text-[44px] leading-[1.2] font-semibold font-poppins text-[#242528]">
                Welcome to
                <br />
                ByteSpace
              </h1>

              <form onSubmit={handleSubmit} className="mt-10 flex flex-col gap-5">
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm leading-5 font-medium font-satoshi">Full Name</label>
                  <input id="name" name="name" type="text" required value={form.name} onChange={handleChange} placeholder="Jamie Davis" className={inputClass} />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm leading-5 font-medium font-satoshi">Email</label>
                  <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} placeholder="designer@example.com" className={inputClass} />
                </div>
                <div>
                  <label htmlFor="password" className="block mb-2 text-sm leading-5 font-medium font-satoshi">Password</label>
                  <input id="password" name="password" type="password" required minLength={6} value={form.password} onChange={handleChange} placeholder="********" className={inputClass} />
                </div>

                <div className="flex justify-end mt-2">
                  <button
                    type="submit"
                    className="h-[45px] rounded-full bg-[#CBFC01] px-6 text-base sm:text-[18px] font-medium leading-none text-[#242528] font-satoshi transition hover:brightness-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0040E0]"
                  >
                    Continue
                  </button>
                </div>
              </form>

              <p className="mt-auto pt-10 text-center text-base text-slate-600 font-satoshi">
                Already have an account?{' '}
                <Link to="/login" className="text-[#0040E0] hover:underline">Login</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}