import { Play } from 'lucide-react'
import banner from "../../assets/banner.png" 

const HeroSection = () => {
    return (
        <div className='flex flex-col-reverse lg:flex-row md:mt-10 lg:mt-24  container mx-auto justify-between items-center'>
            <div className='space-y-5 flex flex-col justify-center items-center lg:items-start'>
                <div className="badge bg-purple-100 text-purple-500 rounded-full p-3 ">
                    New: AI-Powered Tools Available
                </div>
                <h2 className='text-5xl lg:text-8xl font-bold text-center lg:text-start'>Supercharge Your <br></br>Digital Workflow</h2>
                <p className='lg:text-2xl text-gray-400 text-center lg:text-start'>Access premium AI tools, design assets, templates, and productivity<br></br>
                    software—all in one place. Start creating faster today.<br></br>
                    Explore Products
                </p>
                <div className='flex gap-6'>
                    <button className='btn bg-purple-600 rounded-full text-white'>Explore Products</button>
                    <button className='flex gap-2 btn btn-outline rounded-full text-purple-800'><Play></Play> Watch Demo</button>
                </div>
            </div>
            <div>
                <img src={banner} alt="banner" className='p-5' />
            </div>
        </div>
    )
}

export default HeroSection
