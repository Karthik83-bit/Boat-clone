import React,{useState,useRef,useEffect} from 'react'
import { items } from './Items';
import { StateProvider } from './StateProvider'
import '../Styles/product.css'
import { Link } from 'react-router-dom';
import { Star,ArrowDropDownCircleOutlined, Earbuds, CommentsDisabledOutlined} from '@mui/icons-material';
import { areArraysEqual } from '@mui/base';
import logo1 from '../images/product1/p-bnav-l1.webp'
import logo2 from '../images/product1/p-bnav-l2.webp'
import logo3 from '../images/product1/p-bnav-l3.webp'
import logo4 from '../images/product1/p-bnav-l4.webp'
import Battery from '@mui/icons-material/Battery2Bar'
import Music from '@mui/icons-material/MusicNote'
import Bluetooth from '@mui/icons-material/BluetoothSearching'
import EarBuds from '@mui/icons-material/Earbuds'
import anim1c1 from '../images/product1/anim1-col1-img.webp'
import animc2 from '../images/product1/anim1-col2-img.webp'
import earfeather from '../images/product1/ear-feather.webp'
import model from '../images/product1/model1.webp'
import earbudsg from '../images/product1/ear-buds-grey.webp'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger';
// gsap.plugins(ScrollTrigger);


const product=items[0];
export default function Product() {
//    const [state,dispatch]= StateProvider();
const headerRef=useRef(null);
const feathimg=useRef(null);
const animCol2=useRef(null);
const moderef=useRef(null)
gsap.registerPlugin(ScrollTrigger);
        const [index, setindex] = useState(0)
        const [colorname, setcolorname] = useState(product.colors[0].name)
        const [img, setimg] = useState(product.imglist[0])
        const [num, setnum] = useState(1)
 let imgseen=0;

    useEffect(() => {
        console.log(feathimg)
        // gsap.fromTo(headerRef.current,{
        //     // duration:2,
        //     opacity:0,
        //     x:"0px"
        // },{
        //     duration:3,
        // opacity:1,
        //     ease:'ease-in',
        //     // delay:5,
        // //    autoAlpha:1,
        //    x:"10px"
    
        // })
        
        gsap.fromTo(feathimg.current,{
            // duration:2,
            opacity:0,
            y:"100px"
        },{
            duration:1,
        opacity:1,
            ease:'none',
            // delay:5,
        //    autoAlpha:1,
           y:"-50px",
           scrollTrigger:{
            trigger:feathimg.current,
            // target:feathimg.current,
            start:"top center+=300",
            toggleActions:"play ",
            markers:true,
        
           }
    
        })

        gsap.fromTo(moderef.current,{
            // duration:2,
            opacity:0,
            x:"100px"
        },{
            duration:1,
        opacity:1,
            ease:'none',
            // delay:5,
        //    autoAlpha:1,
           x:"-50px",
           scrollTrigger:{
            trigger:moderef.current,
            // target:feathimg.current,
            start:"top center+=300",
            toggleActions:"play ",
            markers:true,
        
           }
    
        })
        

      
        gsap.fromTo(animCol2.current,{
            // duration:2,
            opacity:0,
            x:"100px"
        },{
            duration:1,
        opacity:1,
            ease:'none',
            // delay:5,
        //    autoAlpha:1,
           x:"-10px",
           scrollTrigger:{
            trigger:animCol2.current,
            // target:feathimg.current,
            
            start:"top center+=300",
            toggleActions:"play ",
            markers:true,
        
           }
    
        })
    
    }, [])
    

  return (
    <div className='product-page' >
    <div className='heading'>
        <Link className='link p-link' to="/">Home/</Link><p className='ph-name'>{product.name}</p>
    </div>
    <div className='body-wrap'>
        <div className='product-img-wrap'>
            <div className='img-list'>
                {product.imglist.map((item,ind)=><div className='list-img-wrap' ><img data-number={ind} className='list-img' src={item} onClick={(e)=>{setimg(item)
                setcolorname(product.colors[0].name)}}/></div>)}
            </div>
            <div className='img-wrap' ref={headerRef}>
                <img src={img
                }></img>
            </div>
        
        
            </div>
        <div className='product-content'>
            <div className='p-details'>
                <div className='p-name-wrap'><p className='p-name'>{product.name}</p></div>
                <p className='p-category' style={{fontSize:"1.2em",fontWeight:"300"}}>Wireless Buds</p>
                
                {new Array(product.stars).fill().map(e=><Star style={{color:"red"}}/>)}
                <span>{product.stars}|{product.reviewa}</span>
            </div>
            <div className='pay-wrap'>
            <div className='p-color-wrap'>
                <div className='p-color'>
                <div className='color-name'><span className='c-name'>Color:{colorname}</span><ArrowDropDownCircleOutlined className='down' onClick={()=>{
                    document.querySelector(".p-color-imgwrap").classList.toggle("p-color-imgwraptoggle")
                    document.querySelector(".down").classList.toggle("rot")
                }}/></div>
               
                <div className='p-color-imgwrap'>
                {
                    product.colors.map(e=><div className='p-color-img' onClick={()=>{setcolorname(e.name)
                    setimg(e.img)}}><img className='p1-choose-img' src={e.img}></img></div>)
                }
                </div>
                </div>
                <div className='p-emi-info'>
                <p className='p1-emi'>3 interest-free EMIs of ₹ 366.33 with<span>walnut 365</span></p>
                <div></div>
                <p className='p2-emi'>3 interest-free EMIs of ₹ 366.33 with Z ZEST</p>
            </div>
            </div>
               <div className='payment-card'>
                    <span className='off-price p-off'>Rs{product.offprice}</span><span className='org-price p-org'>Rs{product.orgprice}</span>
                    <div className='card-cont'> <span className='save green'>You save rs {product.orgprice-product.offprice} ({(Math.round(product.orgprice-product.offprice)/product.orgprice*100)}%)</span><span style={{color:'black'}}>Inclusive of all Taxes</span>
                    </div>
                    <div className='card-cont stck-wrap'>
                   <span className='green stock'>Instock:</span><span style={{color:'red'}}>Currently in 40 carts</span>
                   </div>
                    <div className='qty-wrap'>
                    <div className='qty-btn'>
                        <button className='i-btn' onClick={()=>{setnum(num+1)}}>+</button>
                        <p className='qty-n'>{num}</p>
                        <button className='d-btn' onClick={()=>{setnum(num-1)}}>-</button>
                    </div>
                    <span className='q-nqme'>Quantity</span>
                    </div>
                    <div className='btn-wrap'>
                        <button className='a-to-c'>Add to cart</button>
                        <button className='buy-now'>Buy Now</button>
                    </div>
              
               </div>
            </div>
            
            </div>
          
        </div>
        <div className='logo-nav'>
        <div className='p-logo-wrap'>
                <img className='logo-1' src={logo1}/><span>1 Yeear Waranty</span></div>
                <div className='p-logo-wrap'>
                <img className='logo-2' src={logo2}/><span>7 Days Replacement</span></div>
                <div className='p-logo-wrap'>
                <img className='logo-3' src={logo3}/><span>Free Shipping</span></div>
                <div className='p-logo-wrap'>
                <img className='logo-4' src={logo4}/><span>Secure CheckOut</span></div>
            </div>
            <div className='sub-page'>
                <nav className='sp-nav'>
                <span className='desc'>DESCRIPTION</span>
                    <span >SPECIFICATION</span>
                    <span >REVIEWS</span>
                </nav>
                <div className='desc-row'>
                    <div className='dr-col1'>
                        <p>EXPERIENCE
                        THE MAGIC</p>
                    </div>
                    <div className='dr-col2'>
                      <Battery  style={{fontSize:'100',transform:'Rotate(90deg)',color:'black'}}/><span>Non-Stop 12hrs</span>
                    </div>
                    <div className='dr-col3'>
                    <Music style={{fontSize:    '100',color:'black'}}/><span>Designed for music lovers</span>
                    </div>
                    <div className='dr-col4'>
                    <Bluetooth style={{fontSize:'100',color:'black'}}/><span>Bluetoth V5.0</span>
                    </div>
                    <div className='dr-col5'>
                    <Earbuds  style={{fontSize:'100',color:'black'}}/><span>650mAh pocket friendly charging case</span>
                    </div>
                </div>
                <div className='p-info'>
                    <p className='p-info-header'>{product.name}</p>
                    <p>
                    Sleek. Comfortable. Stylish. And a Splash of Incredible Colours. Bring alive your favourite sounds with these true wireless earbuds Equipped with 13mm drivers for the magical boAt signature sound. Designed for supreme ease with Insta Wake N’ Pair technology that auto connects the moment it’s out of the case and Type C Charging. Tws earbuds to drown all the sounds you don’t need and live every moment. With a battery capacity of 40mAh for each earbud, indulge in a blissful audio experience for up to 3 hours in a go. Tap into instant wireless functionality with optimum Bluetooth V5.0
                    </p>
                </div>
                <div className='anim1-wrap'>
                    <section className='anim1-col1' >
                        <img src={anim1c1}/>
                        <div className='a1c1-cont'>
                        <h2>Connected every Moment</h2>
                        
                        <p>Never lose a second with seamless Bluetooth 5.0 and Insta’ Wake n Pair, that connects your phone to your earbuds the moment they leave the charging case. Charge your tws bluetooth earphones with Type C for great speed.</p>
                        </div>
                    </section>
                    <section className='anim1-col2' >
                        <img className='anim1-col2-img' ref={animCol2} src={animc2}/>
                    </section>
                </div>
                <div className='earbuds-col red'>
                    <div className='feather-img-wrap'>
                        <img className='feather-img' ref={feathimg} src={earfeather}/>
                    </div>
                    <div className='er-content '>
                   <h2> Featherweight for comfort all-day</h2>
<p>Feel your music, never the weight of your earbuds. Wireless earbuds designed for ease and flexibility.</p>
                    </div>
                </div>
                <div className='earbuds-col mar' >
                <div className='er-row1'>
                    <div className='blck-board'>
                    <p className='er-opt'>Headphone Type    <span>In-ear</span></p>

                    <p className='er-opt'>HD Sound

<span>Yes</span></p>

<p className='er-opt'>Bluetooth Version
<span>
V5.0+EDR</span></p>

<p className='er-opt'>Driver Size

<span>13mm x 2 Drivers</span></p>

<p className='er-opt'>Bluetooth Profiles

<span>HSP, HFP, A2DP, AVRCP</span></p>

<p className='er-opt'>Frequency

<span>20Hz-20KHz</span></p>

<p className='er-opt'>Voice Assistant

<span>Yes</span></p>

<p className='er-opt'>Charging Voltage

<span>5VDC</span></p>

<p className='er-opt'>Earphone battery capacity

<span>3.7V, 40mAh x 2 buds</span></p>

<p className='er-opt'>Talk time/music time

<span>3 Hours per bud</span></p>

<p className='er-opt'>Charging Time

<span>2 Hours</span></p>

<p className='er-opt'>Standby Time

<span>100 Hours</span></p>

<p className='er-opt'>Bluetooth Range

<span>10M</span></p>

<p className='er-opt'>Country Of Origin

<span>China</span></p>
                    </div>
                </div>
                <div className='er-row2'>
                    <img className='model' ref={moderef} src={model}/>
                </div>
            
                </div>  
                <div className='earbuds-col'>
                    <div className='er3-col1'>
                        <img className='model'  src={earbudsg}/>
                        <p>
Upto 12 hours playback time</p>
<p>Experience nonstop playback with 3 hours of sound per charge and overall 12 hours of playback time. Bluetooth earbuds with mic that come with a 650mAh Carry cum Charging case giving up to 4 times the charge.</p>
                    </div>
                    <div className='er3-col2+'>

                    </div>
                </div>         </div>

    </div>
  )
}
