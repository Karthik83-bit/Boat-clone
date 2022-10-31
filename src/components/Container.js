import React from 'react'
import Card from './Card'
import {items, watches} from '../components/Items'
import '../Styles/container.css'
import ShopHover from './ShopHover'

export default function Container() {
  return (
    <div className='card-container'>
 
    <div className='header'>
    <header>Best Seller</header>
    </div>
    <div className='sec-wrap'>
    
    <div className='sec'>
    
    <div className='card-holder'>
  {items.map((e)=> <Card name={e.name} img={e.img} off={e.offprice} org={e.orgprice} stars={e.stars} reviews={e.reviewa}  />)}
      
        
        </div>
        </div>
    </div>
    <div className='header'>
    <header>SmartWatches</header>
    </div>
    <div className='sec-wrap'>
    <div className='sec'>
   
    
    <div className='card-holder'>
  {watches.map((e)=> <Card name={e.name} img={e.img} off={e.offprice} org={e.orgprice} stars={e.stars} reviews={e.reviewa}  />)}
      
        
        
        </div>
        </div>
        </div>
    </div>
  )
}
