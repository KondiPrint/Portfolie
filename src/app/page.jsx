'use client';

import data from '@/data/data.json';
import React from 'react';

export default function Home() {
  return (
    <>
      <div className='hero min-h-screen'>
        <div className='hero-content text-center'>
          <div className='max-w-md'>
            <h1 className='text-4xl font-bold'>Velkommen til min portfolie</h1>
            <p className='py-6'>{data.intro.content}</p>
          </div>
        </div>
      </div>

      <p>sm: 640px // md: 768px // lg: 1024px // xl: 1280px // 2xl: 1536px</p>

      <div className='divider divider-accent my-10'></div>
      <h2 className='text-2xl text-center mb-5 font-semibold'>Previous work</h2>
      <section className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
        {data &&
          data.category.job.map((info, index) => (
            <React.Fragment key={`job-${info.id}`}>
              <div className='card bg-base-100 shadow-xl sm:[&:nth-of-type(5)]:col-span-2 border-2 hover:brightness-95'>
                <div className='card-body'>
                  <h2 className='text-center text-xl font-semibold'>{info.headline}</h2>
                  <div className='card-actions justify-center items-end h-full'>
                    <button className='btn w-full' onClick={() => document.getElementById(`job-${info.id}`).showModal()}>
                      Read more
                    </button>
                  </div>
                </div>
              </div>
              <dialog id={`job-${info.id}`} className='modal'>
                <div className='modal-box'>
                  <h3 className='font-bold text-lg text-center'>{info.headline}</h3>
                  <p className='py-4'>{info.content}</p>
                  <div className='modal-action'>
                    <form method='dialog'>
                      <button className='btn'>Close</button>
                    </form>
                  </div>
                </div>
              </dialog>
            </React.Fragment>
          ))}
      </section>

      <div className='divider divider-accent my-10'></div>

      <h2 className='text-2xl text-center mb-5 font-semibold'>Skills</h2>
      <section className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
        {data &&
          data.category.skills.map((info, index) => (
            <React.Fragment key={`skills-${info.id}`}>
              <div className='card bg-base-100 shadow-xl sm:[&:nth-of-type(5)]:col-span-2 border-2 hover:brightness-95'>
                <div className='card-body'>
                  <h2 className='text-center text-xl font-semibold'>{info.headline}</h2>
                  <div className='card-actions justify-center items-end h-full'>
                    <button className='btn w-full' onClick={() => document.getElementById(`skills-${info.id}`).showModal()}>
                      Read more
                    </button>
                  </div>
                </div>
              </div>
              <dialog id={`skills-${info.id}`} className='modal'>
                <div className='modal-box'>
                  <h3 className='font-bold text-lg text-center'>{info.headline}</h3>
                  <p className='py-4 text-justify'>{info.content}</p>
                  <div className='modal-action'>
                    <form method='dialog'>
                      <button className='btn'>Close</button>
                    </form>
                  </div>
                </div>
              </dialog>
            </React.Fragment>
          ))}
      </section>

      <div className='divider divider-accent my-10'></div>
    </>
  );
}
