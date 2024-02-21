import Link from 'next/link';
import { FaFacebookF, FaLinkedinIn, FaGithub } from 'react-icons/fa';

export default function Footer() {
  return (
    <>
      <footer className='footer items-center p-4 bg-neutral text-neutral-content'>
        <aside className='items-center grid-flow-col'>
          <img src='../../../assets/img/ChimpAi_White.svg' alt='' className='h-20 w-20' />
          <p>Copyright © 2024 - All rights reserved by Martin K. Nielsen</p>
        </aside>
        <nav className='grid-flow-col md:place-self-center md:justify-self-end gap-5'>
          <Link href='https://www.facebook.com/martin.nielsen.73113' target='_blank'>
            <FaFacebookF className='h-8 w-8 hover:brightness-150' />
          </Link>
          <Link href='https://github.com/KondiPrint' target='_blank'>
            <FaGithub className='h-8 w-8 hover:brightness-150' />
          </Link>
          <Link href='https://www.linkedin.com/in/martin-nielsen-b483a72b6/' target='_blank'>
            <FaLinkedinIn className='h-8 w-8 hover:brightness-150' />
          </Link>
        </nav>
      </footer>
    </>
  );
}
