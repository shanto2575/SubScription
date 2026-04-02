import React, { useState } from 'react'
import FeaturesInfo from './FeaturesInfo';
import { toast } from 'react-toastify';

const ProductCard = ({ product,selectCard,setselectCard }) => {
    const [isSelected, setisSelected] = useState(false)

    const handerSelectCard=()=>{
        const isExist=selectCard.find(items=>items.id===product.id)

        if(isExist){
            toast.error(`${product.name} is already added!`,{
                position:'top-right',
                theme:'dark'
            } )
            return;
        }
        toast.success(`${product.name} is selected`,{
            position:'top-right',
            theme:'dark'
        });
        setisSelected(true)
        setselectCard([...selectCard,product])
    }

    // console.log(product)
    const { name, price, period, features, description, tag, tagType,icon } = product;

    const tagColor = {
        popular: "badge-primary rounded-full text-white",
        new: "badge-success rounded-full text-white",
        best: "badge-warning rounded-full text-white"
    };

    return (
        <div className="">
            <div className="card relative bg-base-100 shadow-[0_0_25px_rgba(0,0,0,0.15)] ">
                <span className={`badge ${tagColor[tagType]} absolute top-3 right-4 `} >
                    {tag}
                </span>
                <div className="card-body">
                    <div className="space-y-6">

                        <div className='space-y-3 mt-6'>
                            <img src={icon} alt={name} />
                            <h2 className="text-3xl font-bold">{name}</h2>
                            <p className="text-gray-500">{description}</p>
                        </div>
                        <span className="text-4xl font-bold">
                            ${price}
                            <span className="text-gray-400 text-sm">/{period}</span>
                        </span>
                    </div>
                    <div className="p-5 mt-5 flex-1">
                        {
                            features.map((feature,index)=><FeaturesInfo key={index} feature={feature}></FeaturesInfo>)
                        }
                    </div>
                    <div className="mt-6">
                        <button type='button' 
                        onClick={handerSelectCard}
                        className={`btn ${isSelected ? 'bg-green-400':'bg-linear-to-r from-indigo-600 to-purple-600'} text-white w-full rounded-full text-lg`}>
                            {isSelected ? 'Add To Cart' : 'Buy Now'}
                        </button>
                    </div>
                </div>
            </div>

        </div>
        
    )
}

export default ProductCard;