import React from 'react'
import '../Styles/cart.css'
import Del from '@mui/icons-material/DeleteOutline'
import { useStateValue } from './StateProvider'

export default function Cart( {id,img,name,off,org,}) {
  console.log('name',img.img)
  const [state,dispatch]=useStateValue();
  const removeItem=(e)=>{
    console.log(id)
    e.preventDefault()
    dispatch({
      type:"removeFromCart",
      payload:id,
    })
  }
  return (
    <div className='cart-item'>
        <div className='item-img-wrap'>
        <img className='item-img' src={img}></img>

        </div>
        <div className='item-details'>
            <p className='cart-item-name'>{name}</p>
            <p className='item-price'><span className='off-price'>Rs{off}</span><span className='org-price' style={{textDecoration:'line-through'}}>Rs{org}</span></p>
            <div className='item-count'>
            <div style={{display:'flex'}}>
                <div className='incre-btn'>+</div>
                <span className='count'>1</span>
                <div className='decre-btn'>-</div>
                </div>
                <p className='item-color'>teal</p>
                <button className='item-del'><Del onClick={removeItem}/></button>
            </div>
        </div>
    
    </div>
  )
}
