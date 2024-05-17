import React from 'react';
import Button from './Button';

function Hamburger({ isTrue }) {
    return (
        <div className={`overflow-hidden w-full transition-max-height duration-500 ease-in-out ${isTrue ? 'max-h-96' : 'max-h-0'}`}>
            <nav className="mt-4 px-8 font-semibold flex flex-col gap-4 justify-start w-full md:hidden z-50">
                <a href="#home" className="hover:text-orange-600">Home</a>
                <a href="#about" className="hover:text-orange-600">About</a>
                <a href="#portfolio" className="hover:text-orange-600">Portfolio</a>
                <a href="#services" className="hover:text-orange-600">Services</a>
                <a href="#blog" className="hover:text-orange-600">Blog</a>
                <a href="#contact" className="hover:text-orange-600">Contact</a>
                <div className="w-1/2 pt-4 pb-2">
                    <Button title="Download CV" takeMe="#quality" />
                </div>
            </nav>
        </div>
    );
}

export default Hamburger;
