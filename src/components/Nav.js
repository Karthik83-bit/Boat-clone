import React,{useState} from 'react'
import logo from '../images/Boat-Logo_200x_200x_f9c79bf9-9c9a-477d-ab6a-7c889a1f2f70_170x.webp'
import '../Styles/Nav.css'
import Person from '@mui/icons-material/Person'
import Gift from '@mui/icons-material/Redeem'
import Cart from '@mui/icons-material/ShoppingCart'
import Src from '@mui/icons-material/Search'
import { useStateValue } from './StateProvider'
import {Link, useNavigate,NavLink} from 'react-router-dom'

const openCart=()=>{
  // alert('clicked')
  document.querySelector('.cart-wrap').style.display='inline';
  // document.querySelector('.overlay').style.display='inline';
  document.querySelector('#root').style.height='100vh'
  document.querySelector('#root').style.overflow='hidden'
}
export default function Nav() {
  // const [state,dispatch]=useStateValue()
  const [srch, setSrch] = useState("")
  const inputHandler=(e)=>{
    e.preventDefault();
    
  }
  const close=(e)=>{
    e.stopPropagation();
    console.log(document.querySelector(".login-info"))
    document.querySelector(".login-info").style.display="none"
  }
  const open=()=>{
    console.log("jhjkljkl")
    document.querySelector(".login-info").style.display="flex"
  }
  // const navigate=useNavigate(); 
  const [cartOpen, setcartOpen] = useState(true)
    const [state,dispatch]=useStateValue()
    const handletouch=()=>{
      console.log( document.querySelector('.shophover'))
        document.querySelector('.shophover').style.display='flex';
        // document.querySelector('.item-shop').style.height='100vw'
        // document.querySelector('.nav-overlay').style.display='inline'
        document.querySelectorAll('.item').forEach(e=>{
          if(!e.classList.contains('item-shop')){
          e.addEventListener(
            'mouseover',()=>{
              document.querySelector('.shophover').style.display='none'
            }
          )}
        })
       
        document.querySelector('.card-holder').addEventListener('mouseover',()=>{
          console.log('')
          document.querySelector('.shophover').style.display='none'
        })
        document.querySelectorAll('.hover').forEach(e=>{
          e.addEventListener('mouseover',()=>{
            console.log('jkjkj')
            document.querySelector('.shophover').style.display='none'
          })
        })
    }  
    // document.querySelector('.nav').addEventListener('mouseover',()=>{
    //   document.querySelector('.shop').classList.remove('shophover')
    // })
    // document.querySelector('.nav').addEventListener("onmouseover",()=>{
    //   document.querySelector('.shop').classList.remove('.shopover')
    // })                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
    document.querySelectorAll(".item").forEach(e=>e.addEventListener('mouseenter',()=>{
      // alert("hello");
      console.log("hkjhjk");
      
   
    }))
    // document.querySelector('body').addEventListener()
    const mouseLeave=()=>{
       document.querySelector('.shop').classList.remove('shophover')
    }
    const logOutHandler=()=>{
      dispatch({
        type:"setUser",
        payload:{
          id:null,
          name:null
        },
      })
    }
  return (
    <div className='nav'>
    <div className='nav-overlay'></div>
        <div className='nav-top'>
          <p>Keep up with your rythm with Boat Rockerz and its 30HRS playback.Shop now!</p>
        </div>
        <div className='nav-bottom'>
          <div className='logo-wrap hover'>
            <img className='logo' src={logo}/>
          </div>
          <div className='nav-item'>
            <p className='item item-shop' onMouseEnter={handletouch}   >Shop
            <div className='nav-border'></div>
            </p>
  
            <p className='item item-boat'>boAt|DC
            <div className='nav-border'></div></p>
            <p className='item item-offer'>offerzone
            <div className='nav-border'></div></p>
            <p className='item item-more'>More
            <div className='nav-border'></div></p>
          </div>
          <div className='nav-src hover' >

            <input className='src' name='src' type='text' onChange={inputHandler} required/>
            <label className='src-plc' htmlFor='src' ><Src/>Search</label>
          </div>
          <div className='nav-info hover'>
 <div  className='login-link' onClick={open}><Person style={{height:'1.2em',width:'1.2em'}}/><div className='login-info' >
 <button className='close-login' style={{width:"fit-content", height:"fit-content"}} onClick={close} >X</button>
 <Link className='link ' to='login'>
 {state.user.id?<div>
  <p>Welcom {state.user.name}</p>
  <p>Orders</p>
  <button onClick={logOutHandler}>Logout</button>
 </div>:<button onClick={()=>{}}> login</button>}</Link></div>
           </div>
            <Gift style={{height:'1.2em',width:'1.2em'}}/>
            <div className='cart-logowrap'><NavLink to="/cart"><Cart style={{height:'1.2em',width:'1.2em'}} onClick={openCart}/></NavLink>
       {state.basket.length>0? <div className='cart-count'>{state.basket.length}</div>:''} 
         </div>
             </div>
        </div>
       
    </div>
  )
}
