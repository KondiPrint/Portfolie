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
        <nav className='grid-flow-col gap-10 md:place-self-center md:justify-self-end'>
          <Link href='https://github.com/KondiPrint' target='_blank'>
            <FaGithub className='h-8 w-8 hover:brightness-150' />
          </Link>
          <a>
            <FaLinkedinIn className='h-8 w-8 hover:brightness-150' />
          </a>
          <Link href='https://www.facebook.com/martin.nielsen.73113' target='_blank'>
            <FaFacebookF className='h-8 w-8 hover:brightness-150' />
          </Link>
        </nav>
      </footer>
    </>
  );
}
