import React, { useState } from 'react';
import { ShoppingCart, Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className='fixed top-0 left-0 w-full z-50 bg-base-100 shadow-md'>
                <div className='container mx-auto flex justify-between items-center py-4 px-4 md:px-0'>
                    <div>
                        <a className='btn btn-ghost font-bold text-4xl text-purple-700'>DigiTools</a>
                    </div>

                    <ul className='hidden md:flex gap-8 items-center'>
                        <li><a href="">Products</a></li>
                        <li><a href="">Features</a></li>
                        <li><a href="">Pricing</a></li>
                        <li><a href="">Testimonials</a></li>
                        <li><a href="">FAQ</a></li>
                    </ul>

                    <div className='hidden md:flex gap-4 items-center'>
                        <ShoppingCart />
                        <button className='btn btn-ghost font-semibold'>Login</button>
                        <button className='btn btn-primary'>Get Started</button>
                    </div>

                    <div className='md:hidden flex items-center gap-2'>
                        <ShoppingCart />
                        <button onClick={() => setIsOpen(!isOpen)}>
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {isOpen && (
                    <div className='md:hidden bg-base-100 w-full px-4 pb-4'>
                        <ul className='flex flex-col gap-4'>
                            <li><a href="">Products</a></li>
                            <li><a href="">Features</a></li>
                            <li><a href="">Pricing</a></li>
                            <li><a href="">Testimonials</a></li>
                            <li><a href="">FAQ</a></li>
                            <div className='flex flex-col gap-2 mt-2'>
                                <button className='btn btn-ghost font-semibold'>Login</button>
                                <button className='btn btn-primary'>Get Started</button>
                            </div>
                        </ul>
                    </div>
                )}
            </div>

            <div className='h-24'></div>
        </>
    );
};

export default Navbar;