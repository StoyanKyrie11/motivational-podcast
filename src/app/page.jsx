"use client";

import AboutMe from '@src/components/AboutMe';
import Footer from '@src/components/Footer';
import Partners from '@src/components/Partners';
import { lazy, useEffect, useState } from 'react';

const Navbar = lazy(() => import("@src/components/Navbar"));
const Hero = lazy(() => import("@src/components/Hero"));

export default function Home() {

  const [ mounted, setMounted ] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <Navbar />
      <Hero />
      <AboutMe />
      <Partners />
      <Footer />
    </>
  );
}
