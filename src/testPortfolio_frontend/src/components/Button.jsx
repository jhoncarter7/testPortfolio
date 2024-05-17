import React from 'react'

function Button({title, takeMe}) {
  return (
    <a href="#quality" className="text-orange-600 border border-orange-600 px-4 py-2 rounded-full ransition-colors duration-300 ease-in-out hover:bg-orange-400 hover:text-white">{title}</a>
  )
}

export default Button