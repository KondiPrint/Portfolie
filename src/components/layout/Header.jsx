import Link from 'next/link';

export default function Header() {
  return (
    <>
      <header>
        <nav className='navbar bg-neutral text-neutral-content flex justify-center'>
          <Link href='#' className='hover:brightness-150 text-xl font-bold'>
            Martin Kannegaard Nielsen
          </Link>
        </nav>
      </header>
    </>
  );
}
