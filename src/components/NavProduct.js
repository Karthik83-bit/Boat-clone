import React from 'react'
import '../Styles/Navproduct.css'
import Star from '@mui/icons-material/Star'

function NavProduct({item}) {
  return (
    <div className="navproduct">
        <div className='nav-img-wrap'>
            <img  className='navproduct-img' src={item.img}/>
        </div>
        <div className='navproduct-content'>
            <section class='navproduct-section' style={{borderBottom:"1px solid grey"}}>  <h4 style={{color:"red",fontWeight:"700"}}>{item.name}</h4>
            <div><h6><Star/>{item.rating}</h6></div></section>
            <section class='navproduct-section'>{item.salePrice}{item.orgPrice}</section>
            <section class='navproduct-section  nav-btn-wrap'>
                <button>ADD TO CART</button>
            </section>
        </div>
                          
    </div>
  )
}

export default NavProduct