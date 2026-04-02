import React, { useState } from 'react'
import Features from './Features';
import { toast } from 'react-toastify';

const PricingCard = ({ price }) => {

    const { name, prices, billing, features, buttonText, subtitle, popular } = price;
    const isPopular = popular === true;

    const [purchased, setPurchased] = useState(false)

    const handlerPricingCard = () => {

        if (purchased) {
            toast.error(`${name} is already purchased !`, {
                position: 'top-right',
                theme:'colored'
            })
            return;    
        }
        setPurchased(true);
        toast.success(`${name} is Purchased Successfully !`,{
            position:'top-right',
            theme:'colored'
        })
    }

    return (
        <div className="h-full mt-7">
            <div
                className={`card relative h-full flex flex-col
                ${isPopular
                        ? "bg-linear-to-br from-indigo-600 to-purple-600 text-white shadow-[0_0_35px_rgba(99,102,241,0.5)]"
                        : "bg-base-100 shadow-[0_0_25px_rgba(0,0,0,0.15)]"
                    }`}
            >

                {isPopular && (
                    <span className="badge badge-warning absolute -top-3 left-1/2 -translate-x-1/2">
                        Most Popular
                    </span>
                )}
                <div className="card-body flex flex-col h-full">
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-3xl font-bold">{name}</h2>
                            <p className={`${isPopular ? "text-purple-200" : "text-gray-400"} text-xl`}>
                                {subtitle}
                            </p>
                        </div>
                        <span className="text-4xl font-bold">
                            ${prices}
                            <span className={`${isPopular ? "text-purple-200" : "text-gray-400"} text-sm`}>
                                /{billing}
                            </span>
                        </span>
                    </div>
                    <div className="p-5 mt-5 flex-1">
                        {
                            features.map((feature, index) =>
                                <Features key={index} features={feature} isPopular={isPopular} />
                            )
                        }
                    </div>
                    <div className="mt-auto pt-6">
                        <button type='button'
                            onClick={handlerPricingCard}
                            className={`btn btn-block rounded-full p-6 text-xl
                            ${isPopular
                                    ? "bg-white text-purple-700 hover:bg-gray-200 border-0"
                                    : "btn-primary"}
                            `}
                        >
                            {purchased ? 'Purchased' : buttonText}
                        </button>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default PricingCard;