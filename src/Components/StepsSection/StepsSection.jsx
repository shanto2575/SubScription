import React from 'react'
import User from '../../assets/user.png'
import Package from '../../assets/package.png'
import Rocket from '../../assets/rocket.png'

const StepsSection = () => {
    return (
        <div className=' container mx-auto my-10 space-y-4'>
            <h3 className='text-5xl text-center font-bold'>Get Started in 3 Steps</h3>
            <p className='text-center text-gray-400'>Start using premium digital tools in minutes, not hours.</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-10 justify-items-center p-5 lg:p-0'>
                <div className="card bg-base-100 relative w-full h-80  shadow-[0_0_20px_rgba(0,0,0,0.15)]">
                    <div className="badge bg-linear-to-r from-indigo-500 to-purple-600 text-white absolute top-3 right-2 rounded-full h-8 w-8 p-2">01</div>
                    <figure className="px-10 pt-10">
                        <img
                            src={User}
                            alt="Users"
                            className="w-24 h-24 p-5 bg-purple-100 rounded-full object-cover" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title font-semibold">Create Account</h2>
                        <p className='text-gray-400'>Sign up for free in seconds. No credit card <br></br> required to get started.</p>
                    </div>
                </div>
                <div className="card bg-base-100 relative w-full shadow-[0_0_20px_rgba(0,0,0,0.15)]">
                    <div className="badge bg-linear-to-r from-indigo-500 to-purple-600 text-white absolute top-3 right-2 rounded-full h-8 w-8 p-2">02</div>
                    <figure className="px-10 pt-10">
                        <img
                            src={Package}
                            alt="Users"
                            className="w-24 h-24 p-5 bg-purple-100 rounded-full object-cover" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Choose Products</h2>
                        <p className='text-gray-400'>Browse our catalog and select the tools <br></br>that fit your needs.</p>
                    </div>
                </div>

                <div className="card bg-base-100 relative w-full shadow-[0_0_20px_rgba(0,0,0,0.15)]">
                    <div className="badge bg-linear-to-r from-indigo-500 to-purple-600 text-white absolute top-3 right-2 rounded-full h-8 w-8 p-2">03</div>
                    <figure className="px-10 pt-10">
                        <img 
                            src={Rocket}
                            alt="Users"
                            className="w-24 h-24 p-5 bg-purple-100 rounded-full object-cover" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Start Creating</h2>
                        <p className='text-gray-400'>Download and start using your premium <br></br> tools immediately.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StepsSection
