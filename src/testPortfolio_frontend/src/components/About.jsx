import React from 'react'
import Button from './Button'

function About() {
  return (
    <section id='about' className='flex flex-col md:flex-row  gap-x-24 gap-y-8 md:gap-y-0  h-full p-2  md:p-24 text-center md:text-start'>
        <div className='md:w-1/2'>
            <img src="/about.jpg" alt="" />
        </div>
        <div className='md:w-1/2'>
            <h4 className='text-orange-600 font-medium text-2xl pb-3'>I'm a Designer</h4>
            <h1 className='text-5xl font-semibold pb-8 leading-snug'>I Can Design Anything You Want</h1>
            <p className='text-2xl font-normal text-gray-400'>Hello there! I'm a web designer, and I'm very passionate and dedicated to my work. With 20 years experience as a professional web developer, I have acquired the skills and knowledge necessary to make your project a success. I enjoy every step of the design process, from discussion and collaboration.</p>
            <div className="pt-11">

            <Button title="Hire Me" take="#hire" />
            </div>
        </div>
        
    </section>
  )
}

export default About