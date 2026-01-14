import React from 'react'
import './Card.css'

const Card = () => {
  return (
    <div className='card'>
        <img className='pizzaimage' src="https://media.dodostatic.net/image/r:1875x1875/0195f0ff3ee0726a8389bda7e4d9062a.avif" alt="" />
        <h3 className='pizzaname'>3 пиццы 30 см</h3>
        <p className='description'>Три удовольствия в нашем меню — это 3 средние пиццы на ваш выбор. Цена комбо зависит от выбранных пицц и может быть увеличена</p>
        <div className='blockchoice'>
            <div>
                <p className='price'>1499 рублей</p>
                <p className='price'>1679 рублей</p>
            </div>
            <button className='choice'>Выбрать</button>
        </div>
    </div>

  )
}

export default Card