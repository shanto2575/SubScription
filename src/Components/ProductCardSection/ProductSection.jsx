import React, { use} from 'react'
import Product from './Product'
import CartSection from './CartSection'

const ProductSection = ({ productPromise,selectCard,setselectCard ,selectType, setselectType}) => {
    const productData = use(productPromise)
    // console.log(productData);

    // const [selectType, setselectType] = useState('product')

    // const [selectCard, setselectCard] = useState([])

    return (
        <div className='container mx-auto space-y-4 my-10 lg:my-20'>
            <h2 className='text-5xl font-bold text-center'>Premium Digital Tools</h2>
            <p className='text-xl text-gray-400 text-center'>Choose from our curated collection of premium digital products designed <br></br> to boost your productivity and creativity.</p>

            <div className='flex items-center justify-center gap-3'>
                <button
                onClick={()=>setselectType('product')}
                className={`btn ${selectType==='product'? 'bg-linear-to-r from-indigo-600 to-purple-600 text-white':''} rounded-full`}>Products</button>
                <button
                onClick={()=>setselectType('Cart')}
                className={`btn ${selectType==='Cart'? 'bg-linear-to-r from-indigo-600 to-purple-600 text-white':''} rounded-full`}>Cart ({selectCard.length})</button>
            </div>

            {selectType==='product'?<Product productData={productData} selectCard={selectCard} setselectCard={setselectCard}></Product>:<CartSection selectCard={selectCard} setselectCard={setselectCard}></CartSection>}
        </div>
    )
}

export default ProductSection
