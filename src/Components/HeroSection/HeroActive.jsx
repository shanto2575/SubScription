import React from 'react'

const HeroActive = () => {
    return (
        <div>
            <div className='h-50 bg-linear-to-r from-indigo-600 to-purple-600 my-10 lg:my-20 text-center text-white flex items-center justify-center gap-20 lg:gap-64'>
                
                    <div className='space-y-3 '>
                        <h3 className='font-bold text-5xl'>50K+</h3>
                        <p className='text-xl'>Active Users</p>
                    </div>
                    
                    <div className='space-y-3 '>
                        <h3 className='font-bold text-5xl'>200+</h3>
                        <p className='text-xl'>Premium Tools</p>
                    </div>
                    <div className='space-y-3 '>
                        <h3 className='font-bold text-5xl'>4.9</h3>
                        <p className='text-xl'>Rating</p>
                    </div>
            </div>
        </div>
    )
}

export default HeroActive