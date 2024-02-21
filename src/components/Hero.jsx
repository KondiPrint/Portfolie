export default function Hero({ data }) {
  return (
    <>
      <div className='hero min-h-screen text-gray-200'>
        <div className='hero-content text-center'>
          <div className='max-w-5xl'>
            <h1 className='text-4xl md:text-6xl font-bold'>Welcome to my portfolio</h1>
            <p className='py-6'>{data.intro.content}</p>
          </div>
        </div>
      </div>
    </>
  );
}
