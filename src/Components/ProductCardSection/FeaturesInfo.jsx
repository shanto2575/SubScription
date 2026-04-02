import { Check } from 'lucide-react'
import React from 'react'

const FeaturesInfo = ({feature}) => {
    // console.log(feature)
    return (
        <div>
            <div className='my-3'>
                <p className='flex gap-4 '><Check className='text-green-600'></Check>{feature}</p>
            </div>
        </div>
    )
}

export default FeaturesInfo