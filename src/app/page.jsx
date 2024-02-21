'use client';

import data from '@/data/data.json';
import Projects from '@/components/Projects/Projects';
import Jobs from '@/components/Jobs/Jobs';
import Skills from '@/components/Skills/Skills';
import Hero from '@/components/Hero';
import InfoText from '@/components/InfoText';

export default function Home() {
  return (
    <>
      <Hero data={data} />

      <div className='divider divider-accent my-10'></div>

      <InfoText data={data} />

      <div className='divider divider-accent my-10'></div>

      <Skills data={data} />

      <div className='divider divider-accent my-10'></div>

      <Projects data={data} />

      <div className='divider divider-accent my-10'></div>

      <Jobs data={data} />

      <div className='divider divider-accent my-10'></div>
    </>
  );
}
