import React from 'react';

export default function Skills({ data }) {
  return (
    <>
      <h2 className='text-2xl text-center mb-5 font-semibold'>Skills</h2>
      <section className='grid grid-cols-1 sm:grid-cols-2 gap-5 container px-4 max-w-7xl mx-auto'>
        {data &&
          data.category.skills.map((info, index) => (
            <React.Fragment key={`skills-${info.id}`}>
              <div className='card bg-base-100 shadow-xl sm:[&:nth-of-type(5)]:col-span-2 border-2 hover:brightness-95'>
                <div className='card-body space-y-6'>
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
    </>
  );
}
