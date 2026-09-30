import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import LogoSection from '../components/LogoSection';
import Courses from '../components/Courses';
import SiblingofCourses from '../components/SiblingofCourses';
import CreatorSection from '../components/CreatorSection';
import AnotherportionofCreators from '../components/AnotherportionofCreators';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans antialiased">
      <Navbar />
      <main>
        <Hero />
        <LogoSection />
        <Courses />
        <SiblingofCourses />
        <CreatorSection />
        <AnotherportionofCreators />
        <Footer />
      </main>
    </div>
  );
}