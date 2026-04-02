import { ShoppingCart } from 'lucide-react';
import React from 'react'
import { toast } from 'react-toastify';

const CartSection = ({ selectCard, setselectCard }) => {

    const handlerDeleteBtn = (card) => {
        const filterCard = selectCard.filter((cards) => cards.name !== card.name)
        setselectCard(filterCard)

        toast.warn(`${card.name} is Removed!`, {
            position: 'top-right',
            theme: 'light'
        })
    };

    const handlerCheckOut = () => {
        setselectCard([])
        toast.success('Checkout Completed!!', {
            position: "top-right",
            theme: 'colored',
        });
    }

    const total = selectCard.reduce((sum, item) => sum + item.price, 0)

    return (
        <div className='rounded-2xl shadow-[0_0_15px_rgba(0,0,0,0.15)] my-15 p-5'>
            <h3 className='text-3xl font-bold'>Your Cart</h3>

            {selectCard.length === 0 ? (
                <div className='h-96 flex justify-center items-center flex-col text-2xl font-semibold text-gray-400'>
                    <ShoppingCart className="w-20 h-20" />
                    <p>Your Card is Empty</p>
                </div>
            ) : (
                <>
                    {selectCard.map((card, index) => (
                        <div key={index} className='flex justify-between items-center gap-7 rounded-2xl bg-gray-200 p-5 my-4'>
                            <div className='flex gap-7'>
                                <img src={card.icon} alt={card.name} className='h-12 w-auto' />
                                <div>
                                    <h3 className='text-xl font-semibold'>{card.name}</h3>
                                    <p>${card.price}</p>
                                </div>
                            </div>

                            <button
                                onClick={() => handlerDeleteBtn(card)}
                                className='btn text-red-600 rounded-full'>
                                Remove
                            </button>
                        </div>
                    ))}

                    <div className='flex justify-between items-center bg-pink-300 rounded-full p-4 mb-5'>
                        <p className='text-xl font-bold'>Total:</p>
                        <p className='text-2xl font-bold'>${total}</p>
                    </div>
                    <button
                        onClick={handlerCheckOut}
                        className='btn bg-linear-to-r from-indigo-600 to-purple-600 text-white text-xl rounded-full w-full'>
                        Proceed to Checkout
                    </button>
                </>
            )}
        </div>
    )
}

export default CartSection