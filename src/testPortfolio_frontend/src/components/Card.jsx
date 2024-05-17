import React from 'react'

function Card({title, description, price}) {
  return (
    <div className="flex items-center justify-center w-full lg:w-[45%] ">
      <div className="tilt-card p-16  mx-auto bg-white rounded-xl shadow-md overflow-hidden transform transition-transform duration-300 hover:rotate-3 hover:shadow-lg">
        <div className="flex gap-4">
          <div className="shrink-0">
            <img className="h-16 w-16" src="https://via.placeholder.com/150" alt="Placeholder image" />
          </div>
          <div className="ml-4">
            <div className="text-3xl font-semibold text-black pb-4">{title}</div>
            <div className='text-xl font-semibold pb-6'>Starts from <span className='text-orange-600'>${price}</span></div>
            <p className="text-gray-500 text-xl font-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores ducimus debitis obcaecati repellendus magnam, praesentium voluptatem dolorem odio aliquam adipisci dolores doloribus, similique iusto veritatis accusantium magni molestiae repudiandae voluptatibus! Cupiditate inventore magnam itaque!.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card

