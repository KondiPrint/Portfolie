import Image from 'next/image';
import Modal from '@/components/Modal';
import React, { useState } from 'react';

const Card = ({ data }) => {
  const [showModal, setShowModal] = useState(false);
  const [content, setContent] = useState('');
  const [headline, setHeadline] = useState('');

  const OpenModal = (mbool, readmore, headline) => {
    setContent(readmore);
    setHeadline(headline);
    setShowModal(mbool);
  };

  return (
    <>
      {data && (
        <>
          <div className='grid-row-2 shadow-[0px_0px_5px_0px] rounded-lg bg-[#60848B]'>
            <div className='text-[white] bg-[black] p-1 rounded-t-lg grid grid-cols-2'>
              <div className='w-80 font-bold'>{data.headline}</div>
            </div>

            <div className='grid grid-cols-1 p-1'>
              <div className='grid grid-row-2 text-sm'>
                <div className='h-20 text-white'>{`${data.content.substring(0, 60)} ...`}</div>

                <div className='text-left w-20 justify-self-end'>
                  <button
                    className='btn-read'
                    onClick={() => {
                      OpenModal(true, data.content, data.headline);
                    }}>
                    Læs mere
                  </button>
                </div>
              </div>
            </div>
          </div>

          <Modal show={showModal} content={content} headline={headline} open={OpenModal} />
        </>
      )}
    </>
  );
};

export default Card;
