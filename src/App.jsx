import React, { Suspense } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import HeroSection from './Components/HeroSection/HeroSection'
import HeroActive from './Components/HeroSection/HeroActive'
import StepsSection from './Components/StepsSection/StepsSection'
import PricingSection from './Components/PricingSection/PricingSection'
import ProductSection from './Components/ProductCardSection/ProductSection'
import { ToastContainer } from 'react-toastify';
import Workflow from './Components/WorkFlow/Workflow'
import Footer from './Components/footer/Footer'


//Pricing Section
const fetchPricing=async()=>{
    const res=await fetch('/pricingSection.json')
    return res.json()
}

//Product Section
const fetchProduct=async()=>{
    const res=await fetch('/ProductCard.json')
    return res.json()
}

const App = () => {
    const pricingPromise=fetchPricing()

    const productPromise=fetchProduct()
    return (
        <div>
            <Navbar></Navbar>
            <HeroSection></HeroSection>
            <HeroActive></HeroActive>
            <StepsSection></StepsSection>
            <Suspense fallback={<p>Pricing Section Loading....</p>}>
                <PricingSection pricingPromise={pricingPromise}></PricingSection>
            </Suspense>
            <Suspense fallback={<p>Product Section Card Loading...</p>}>
                <ProductSection productPromise={productPromise}></ProductSection>
            </Suspense>
            <Workflow></Workflow>
            <Footer></Footer>

            <ToastContainer />
        </div>
    )
}

export default App
