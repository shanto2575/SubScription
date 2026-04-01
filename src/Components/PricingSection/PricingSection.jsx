import React, { use } from 'react'
import PricingCard from './PricingCard'

const PricingSection = ({pricingPromise}) => {
    const pricingData=use(pricingPromise)
    // console.log(pricingData)
    return (
        <div>
            <div className='my-20 space-y-4'>
                <h2 className='text-5xl font-bold text-center'>Simple, Transparent Pricing</h2>
                <p className='text-gray-400 text-center'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 items-stretch  container mx-auto p-5 lg:p-0'>
                    {
                        pricingData.map(price=><PricingCard key={price.id} price={price}></PricingCard>)
                    }
                </div>
            </div>
        </div>
    )
}

export default PricingSection