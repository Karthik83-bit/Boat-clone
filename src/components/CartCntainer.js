import React from 'react'
import Cart from './Cart'
import '../Styles/cart-container.css'
import { useNavigate } from 'react-router-dom'
import { StateContext, useStateValue } from './StateProvider'

export default function CartContainer() {
   const[state,dispatch]= useStateValue()

  var total=0,
  total= state.basket.reduce((acc,e)=>{console.log(e)
    return acc+e.off},0)
console.log('total',total)

const navigate=useNavigate();
  return (
    <div className='cart-wrap'>
        <div className='cart-header' style={{color:'white'}}>
            <div className='cart-top'>Your Cart{}<span onClick={()=>{document.querySelector('.cart-wrap').style.display='none';
            document.querySelector('.overlay').style.display='none';
            document.querySelector('#root').style.height='auto' 
            document.querySelector('#root').style.overflow='' 
            navigate("/")
            }} style={{marginLeft:'70%' ,marginRight:'0',color:'white'}} >X</span></div>
            <div className='cart-down'>Free Shipping sitewide|Cash On Delivery available for order value upto Rs3000</div>
        </div>
        <div className='cart-items-wrap'>
            <div className='cart-items'>
            {/* <Cart img={state.basket[0].img} name={state.basket[0].name} off={state.basket[0].off} org={state.basket[0].org}/> */}
                {state.basket.map((e)=>{console.log(e);return <Cart id={e.id} img={e.img} name={e.name} off={e.off} org={e.org}/>})}
            </div>
        </div>
        <div className='cart-content'>
            <div className='items-price'>
            <div className='cont-shipping'>
                <span className='shipping'>Shipping</span><span className='free'>Free</span>
            </div>
            <div className='cont-total'>
                <span className='total'>Total</span><span className='ammount'>{total}</span>
            </div>
            </div>
            <div className='secnd-row'>
                <div className='banner'>Or 3 interest-free payments of ₹ 1566 with zest  
</div>
                <p className='continue'>Continue Shopping  </p>
            </div>
            <button className='cod'>
                <p className='cod-bg'>CASH ON DELIVERY</p>
                <p className='cod-sm'>Pay via UPI & save Rs 15</p>
            </button>
            <button className='bycard'>
                <p className='card-bg'>PAY VIA CARD/OTHERS</p>
            </button>
           
        </div>

    </div>
  )
}
