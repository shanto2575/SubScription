import React from 'react'

const Workflow = () => {
    return (
        <div className='bg-linear-to-r from-indigo-600 to-purple-600 h-72 my-auto flex items-center justify-center mt-5'>
            <div className='flex flex-col justify-center items-center p-6 text-white space-y-4'>
                <h3 className='text-2xl lg:text-4xl font-bold'>Ready to Transform Your Workflow?</h3>
                <p className='text-gray-300 text-center'>Join thousands of professionals who are already using Digitools to work smarter.<br></br>Start your free trial today.</p>
                <div className='flex gap-5'>
                    <button className='btn rounded-full'>Explore Products</button>
                    <button className='btn btn-outline rounded-full'>View Pricing</button>
                </div>
                <p className='text-gray-300 text-center'>14-day free trial • No credit card required • Cancel anytime</p>
            </div>
        </div>
    )
}

export default Workflow