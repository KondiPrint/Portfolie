import Link from 'next/link';
import ScrollToTop from '../ScrollToTop';

export default function Header() {
  return (
    <>
      <header>
        <nav className='navbar bg-neutral flex justify-center text-gray-200'>
          <div className='hover:brightness-150 text-xl font-bold'>Martin Kannegaard Nielsen</div>
        </nav>

        <div className='hidden sm:flex'>
          <ScrollToTop />
        </div>
      </header>
    </>
  );
}
