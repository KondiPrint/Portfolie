// usePhoneLink.js

import Link from 'next/link';
import { useMemo } from 'react';
import { isMobile } from 'react-device-detect';

const usePhoneLink = (phoneNumber) => {
  const phoneLink = useMemo(() => {
    return isMobile ? (
      <Link className='hover:text-gray-300' href={`tel:${phoneNumber}`}>
        {phoneNumber}
      </Link>
    ) : (
      phoneNumber
    );
  }, [phoneNumber]);

  return phoneLink;
};

export default usePhoneLink;
