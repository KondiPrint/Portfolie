import CountdownTimer from './Countdown';

export default function InfoText({ data }) {
  return (
    <>
      <section className='container px-4 max-w-7xl mx-auto space-y-10 text-gray-200'>
        <aside className='space-y-5 '>
          <h2 className='text-3xl md:text-6xl text-center font-semibold'>{data.currently.title}</h2>
          <p className='text-xl italic text-center'>{data.currently.content}</p>
        </aside>
        <div className='text-center space-y-3'>
          <CountdownTimer />
          <p className='text-2xl font-semibold'>Until I'm done!</p>
        </div>
      </section>
    </>
  );
}
