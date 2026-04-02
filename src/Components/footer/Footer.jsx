import React from 'react'
import { Fa500Px, FaFacebook, FaInstagram, FaTwitter, FaXRay } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="bg-[#101727] text-white w-full">
            <footer className="footer sm:footer-horizontal container mx-auto p-10 ">
                <aside className='space-y-3'>
                    <h2 className='text-4xl font-bold'>DigiTools</h2>
                    <p>
                        Premium digital tools for creators,<br></br> professionals, and businesses. Work smarter<br></br> with our suite of powerful tools.
                    </p>
                </aside>

                <div className='flex justify-center gap-20'>
                    <nav className='flex flex-col space-y-3'>
                        <h6 className="footer-title">Services</h6>
                        <p className="link link-hover">Branding</p>
                        <p className="link link-hover">Marketing</p>
                        <p className="link link-hover">Design</p>
                        <p className="link link-hover">Advertisement</p>
                    </nav>

                    <nav className='flex flex-col space-y-3'>
                        <h6 className="footer-title">Company</h6>
                        <p className="link link-hover">About us</p>
                        <p className="link link-hover">Contact</p>
                        <p className="link link-hover">Jobs</p>
                        <p className="link link-hover">Press kit</p>
                    </nav>
                    <nav className='flex flex-col space-y-3'>
                        <h6 className="footer-title">Resources</h6>
                        <p className="link link-hover">Documentation</p>
                        <p className="link link-hover">Help Center</p>
                        <p className="link link-hover">Community</p>
                        <p className="link link-hover">Contact</p>
                    </nav>
                </div>

                <nav className='flex flex-col justify-center items-center'>
                    <h6 className="footer-title">Social</h6>
                    <div className="grid grid-flow-col gap-4">
                        <button><FaFacebook></FaFacebook></button>
                        <button><FaInstagram></FaInstagram></button>
                        <button><FaTwitter></FaTwitter></button>
                    </div>
                </nav >
            </footer>
            <div className="container mx-auto">
                <div className="divider before:bg-gray-600 after:bg-gray-600"></div>
            </div>
            <div className='flex justify-between items-center container mx-auto p-3 lg:p-5'>
                <p className='text-sm lg:text-xl text-center'>© 2026 Digitools. All rights reserved.</p>
                <div className='flex justify-between gap-3 lg:gap-5 text-sm '>
                    <button>Privacy Policy</button>
                    <button>Terms of Service </button>
                    <button>Cookies</button>
                </div>
            </div>
        </div>
    )
}

export default Footer