import React, { useState } from 'react';
import { ShoppingCart, Menu, X } from 'lucide-react';

const Navbar = ({ selectCard }) => {
    const [isOpen, setIsOpen] = useState(false);
    // console.log(selectCard)

    return (
        <>
            <div className='fixed top-0 left-0 w-full z-50 bg-base-100 shadow-md'>
                <div className='container mx-auto flex justify-between items-center py-4 px-4 md:px-0'>
                    <div>
                        <h2 className='btn btn-ghost font-bold text-4xl text-purple-700'>DigiTools</h2>
                    </div>

                    <ul className='hidden md:flex gap-8 items-center'>
                        <li><button className='hover:text-purple-600'>Products</button></li>
                        <li><button className='hover:text-purple-600'>Features</button></li>
                        <li><button className='hover:text-purple-600'>Pricing</button></li>
                        <li><button className='hover:text-purple-600'>Testimonials</button></li>
                        <li><button className='hover:text-purple-600'>FAQ</button></li>
                    </ul>

                    <div className='hidden md:flex gap-4 items-center'>
                        <div className="relative">
                            <ShoppingCart />
                            {
                                selectCard.length > 0 && (<span className="absolute -top-2 -right-2 bg-red-700 text-white rounded-full px-2 text-xs">
                                    {selectCard.length}
                                </span>)
                            }
                        </div>
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
                            <li><button className='hover:text-purple-600'>Products</button></li>
                            <li><button className='hover:text-purple-600'>Features</button></li>
                            <li><button className='hover:text-purple-600'>Pricing</button></li>
                            <li><button className='hover:text-purple-600'>Testimonials</button></li>
                            <li><button className='hover:text-purple-600'>FAQ</button></li>
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