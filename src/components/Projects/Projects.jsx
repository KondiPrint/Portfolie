import React from 'react';
import Link from 'next/link';

export default function Projects({ data }) {
  return (
    <>
      <h2 className='text-2xl text-center mb-5 font-semibold'>Projects</h2>
      <section className='grid grid-cols-1 sm:grid-cols-2 gap-5 container px-4 max-w-7xl mx-auto'>
        {data &&
          data.category.projects.map((info, index) => (
            <React.Fragment key={`projects-${info.id}`}>
              <div className='card bg-base-100 shadow-xl border-2 hover:brightness-95'>
                <div className='card-body space-y-6'>
                  <h2 className='text-center text-xl font-semibold'>{info.headline}</h2>
                  <div className='card-actions justify-center items-end h-full'>
                    <button className='btn w-full' onClick={() => document.getElementById(`projects-${info.id}`).showModal()}>
                      Read more
                    </button>
                  </div>
                </div>
              </div>
              <dialog id={`projects-${info.id}`} className='modal'>
                <div className='modal-box'>
                  <h3 className='font-bold text-lg text-center'>{info.headline}</h3>
                  <p className='py-4'>{info.content}</p>
                  <div className='modal-action'>
                    <Link href={info.links[0].github} target='_blank' className='btn'>
                      Github link
                    </Link>
                    <form method='dialog'>
                      <button className='btn'>Close</button>
                    </form>
                  </div>
                </div>
              </dialog>
            </React.Fragment>
          ))}
      </section>
    </>
  );
}
