import React from 'react'

function Quality() {
  return (
    <section id='quality' className='bg-white pt-56 flex gap-36 px-6 align-middle justify-center pb-36 flex-col md:flex-row'>
        <div className=' flex flex-col items-center gap-y-6 px-8 text-center'>
            <img className='size-28 justify-self-center' src="/logo1.png" alt="" />
            <h1 className='text-2xl font-semibold text-slate-950'>Pixel Perfect</h1>
            <p className='text-xl text-gray-500 font-medium'>Most common methods for designing websites that work well on desktop is responsive and adaptive design.</p>
        </div>
        <div className=' flex flex-col items-center gap-y-6 text-center'>
            <img className='size-28 justify-self-center' src="/logo2.png" alt="" />
            <h1 className='text-2xl font-semibold text-slate-950'>High Quality</h1>
            <p className='text-xl text-gray-500 font-medium'>Most common methods for designing websites that work well on desktop is responsive and adaptive design.</p>
        </div>
        <div className=' flex flex-col items-center gap-y-6 text-center'>
            <img className='size-28 justify-self-center' src="/logo3.png" alt="" />
            <h1 className='text-2xl font-semibold text-slate-950'>Awesome Idea</h1>
            <p className='text-xl text-gray-500 font-medium'>Most common methods for designing websites that work well on desktop is responsive and adaptive design.</p>
        </div>
    </section>
  )
}

export default Quality