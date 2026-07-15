/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import ServiceArea from './components/ServiceArea';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-brand-white text-zinc-900 selection:bg-brand-orange selection:text-brand-black">
      {/* Navigation Header */}
      <Header />

      {/* Hero Welcome banner */}
      <Hero />

      {/* Main Container / Content Sections */}
      <main>
        {/* About Us section */}
        <AboutUs />

        {/* Services Grid */}
        <Services />

        {/* Why Choose Us */}
        <WhyChooseUs />

        {/* Service Area mapping & city badges */}
        <ServiceArea />

        {/* Dynamic process timeline */}
        <Process />

        {/* Form contact entry and direct action buttons */}
        <Contact />
      </main>

      {/* Standard brand footer */}
      <Footer />
    </div>
  );
}
