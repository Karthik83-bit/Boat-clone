import { CompressOutlined } from '@mui/icons-material';
import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../Styles/shop.css'
import { shop } from './Items'
import {AirDopes,RockerzWireless,BassHeadWired,SmartWatches,Gamin,StoneSpeakers,HomeAudio,MobileAccessories,TrebelWomen,Trimmer,Limited} from './Items'

export default function ShopHover() {
  const [data, setdata] = useState()
  const navigate=useNavigate();
  const handleClick=(e)=>{
    console.log(e) 
    
      navigate("/AirDopes",{state:e.Array})
    
  }
  return (
   
    <div className='shophover '>
      {
       
        shop.map(e=>
        <div className='shop-im-wrap' >
        <img className='shop-img  ' src={e.img} onClick={()=>{
          console.log(e)
          console.log("jhfjkhfkk");
          handleClick(e)}}/>
        </div>
        )
      }
    </div>
  )
}
