import React, { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { FaFacebook, FaTwitter, FaLinkedin, FaBehance } from 'react-icons/fa';
import Button from './Button';
import Hamburger from './Hamburger';

function Home() {
    const [isTrue, setIsTrue] = useState(false);

    return (
        <div className="min-h-screen flex flex-col items-center md:bg-[url('/background.jpg')] bg-cover">
            <header className="text-center w-full py-4 shadow flex justify-between px-2">
                <div className="text-4xl font-bold text-orange-600"><span className="text-black">Diz</span>Me</div>
                <nav className="mt-4 space-x-4 font-medium hidden md:inline">
                    <a href="#home" className="text-gray-700 hover:text-orange-600">Home</a>
                    <a href="#about" className="text-gray-700 hover:text-orange-600">About</a>
                    <a href="#portfolio" className="text-gray-700 hover:text-orange-600">Portfolio</a>
                    <a href="#services" className="text-gray-700 hover:text-orange-600">Services</a>
                    <a href="#blog" className="text-gray-700 hover:text-orange-600">Blog</a>
                    <a href="#contact" className="text-gray-700 hover:text-orange-600">Contact</a>
                    <Button title="Download CV" takeMe="#quality" />
                </nav>
                <GiHamburgerMenu className={`text-4xl md:hidden text-gray-700 ${isTrue ? "hidden" : "inline"}`} onClick={() => setIsTrue((prev) => !prev)} />
                <RxCross2 className={`text-4xl md:hidden text-gray-700 ${isTrue ? "inline" : "hidden"}`} onClick={() => setIsTrue((prev) => !prev)} />
            </header>
            <Hamburger isTrue={isTrue} />
            <main className="flex flex-col-reverse md:flex-row items-center mt-12 w-full px-6 md:px-12 z-10">
                <div className="flex flex-col items-center md:items-start md:w-1/2 mt-12 pl-8">
                    <div className='flex flex-col gap-4'>
                        <span className="text-3xl font-semibold text-orange-600 pl-14 md:pl-2">Hello, I'm</span>
                        <h1 className="text-5xl font-bold text-gray-800">Nikhil Rai</h1>
                    </div>
                    <p className='text-2xl mt-2 pt-9'>A
                        <span className="text-2xl text-green-600 "> Creative Designer </span>
                        From
                        <span className='text-2xl mt-2 text-purple-600'> India</span>
                    </p>
                    <p className="text-gray-500 mt-4 text-left text-xl font-normal pb-8">I'm a creative designer based in New York, and I'm very passionate and dedicated to my work.</p>
                    <div className='flex gap-4 justify-center'>
                        <button className="mt-6 bg-orange-600 text-white px-6 py-4 rounded-full hover:bg-orange-700">About Me</button>
                        <div className="flex space-x-4 mt-10">
                            <FaFacebook className="text-2xl text-gray-600 hover:text-blue-600" />
                            <FaTwitter className="text-2xl text-gray-600 hover:text-blue-400" />
                            <FaLinkedin className="text-2xl text-gray-600 hover:text-blue-700" />
                            <FaBehance className="text-2xl text-gray-600 hover:text-blue-500" />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center md:w-1/2 mt-12 md:mt-0">
                    <img src='/profile.jpg' alt="James Smith" className="w-72 h-72 rounded-full object-cover shadow-lg" />
                </div>
            </main>
            <a href='#about' className=' pt-6 lg:pt-0 cursor-pointer'>
                <svg
                    width="26px"
                    height="100%"
                    viewBox="0 0 247 390"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    style={{ fillRule: 'evenodd', clipRule: 'evenodd', strokeLinecap: 'round', strokeLinejoin: 'round', strokeMiterlimit: 1.5 }}
                >
                    <path
                        id="wheel"
                        d="M123.359,79.775l0,72.843"
                        style={{ fill: 'none', stroke: '#000', strokeWidth: 20 }}
                    />
                    <path
                        id="mouse"
                        d="M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z"
                        style={{ fill: 'none', stroke: '#000', strokeWidth: 20 }}
                    />
                </svg>
            </a>
        </div>
    );
}

export default Home;
