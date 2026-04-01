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
                        <a className="link link-hover">Branding</a>
                        <a className="link link-hover">Design</a>
                        <a className="link link-hover">Marketing</a>
                        <a className="link link-hover">Advertisement</a>
                    </nav>

                    <nav className='flex flex-col space-y-3'>
                        <h6 className="footer-title">Company</h6>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Contact</a>
                        <a className="link link-hover">Jobs</a>
                        <a className="link link-hover">Press kit</a>
                    </nav>
                    <nav className='flex flex-col space-y-3'>
                        <h6 className="footer-title">Resources</h6>
                        <a className="link link-hover">Documentation</a>
                        <a className="link link-hover">Help Center</a>
                        <a className="link link-hover">Community</a>
                        <a className="link link-hover">Contact</a>
                    </nav>
                </div>

                <nav className='flex flex-col justify-center items-center'>
                    <h6 className="footer-title">Social</h6>
                    <div className="grid grid-flow-col gap-4">
                        <a href=''><FaFacebook></FaFacebook></a>
                        <a href=''><FaInstagram></FaInstagram></a>
                        <a href=''><FaTwitter></FaTwitter></a>
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