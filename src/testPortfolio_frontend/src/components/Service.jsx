import React from 'react'
import Card from './Card'

function Service() {
    return (
        <section id='services' className=" flex flex-col items-center gap-0 md:gap-8 lg:gap-16 w-full my-24 pb-16 bg-contain h-full bg-center bg-[url('/services.png')]">
            <div className=' w-1/2 text-center'>
                <h4 className='text-orange-600 font-medium text-lg md:text-2xl pb-3'>Services</h4>
                <h1 className='text-xl md:text-3xl lg:text-5xl font-semibold pb-3 md:pb-8 leading-snug'>What I Do for Clients</h1>
                <p className='text-lg md:text-2xl font-normal pb-7 text-gray-500'>Most common methods for designing websites that work well on desktop is responsive and adaptive design</p>

            </div>
            <div className="flex  flex-wrap gap-5 md:gap-10 w-full px-2 md:px-10 lg:px-28 items-center justify-center ">
                <Card title="Frontend dev" description="" price="20" />
                <Card title="Backend dev" price="40" />
                <Card title="Web3" price="100" />
                <Card title="FullStack" price="60" />

            </div>
        </section>
    )
}

export default Service