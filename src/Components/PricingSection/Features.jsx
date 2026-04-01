import { Check, CircleCheckBig } from 'lucide-react'
import React from 'react'

const Features = ({ features }) => {
    console.log(features)
    return (
        <div>
            <div className='my-4'>
                <p className='flex'><Check className='mr-4 text-green-500'></Check> {features}</p>
            </div>
        </div>
    )
}

export default Features
