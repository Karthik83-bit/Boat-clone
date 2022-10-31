import React,{useContext} from 'react'
import Star from '@mui/icons-material/Star'
import img from '../images/card1-1.webp'
import '../Styles/card.css'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { StateContext, StateProvider, useStateValue } from './StateProvider'
import  {v4} from 'uuid'



import reducer, { initialState} from '../components/Reducer';


export default function  Card({id,name,img,off,org,stars,reviews}) {

console.log()
// console.log(v4())

    const [state,dispatch]=useStateValue();
    console.log(state);
    const navigate=useNavigate();
    const addCart=()=>{
        if(!state.user.id){
            navigate("/login")
        }
        else{
        console.log('clicked')
        console.log(dispatch)
        dispatch({
            type:'Add_To_Basket',
            payload:{
                id:v4(),
                name:name,
                img:img,
                off:off,
                org:org,
                stars:stars,
                reviews:reviews
            }
        })}
    }
  return (
    
    <div className='card'>
    <span className='card-off'>
        YOU SAVE 58%
    </span>
    <div className='card-img-wrap'>
        <img className='card-img' src={img}/>
    </div>
    <div className='card-content'>
    <Link className='link' to="/product">
        <div className='cont-row'>
            <p className='item-name'>{name}</p>
            <div className='item-rating'>
                <span><Star style={{color:'red'}}/>{stars}|{reviews}Review</span>
              
            </div>
        </div>
        <div className='cont-row'>
        <div className='price'>
            <span className='off-price'>${off}</span><span className='org-price' style={{textDecoration:'line-through'}}>${org}</span>
            <div className='save'><p>`You Save :${org-off}({(org-off)/org*100})</p></div>
            </div>
           
        </div>
        </Link>
        <div className='cont-row'>
            <button className='add-cart' onClick={addCart} >ADD TO CART</button>
        </div>
    </div>
</div>
    
  )
}
// case 'removeFromCart':
//     return {
//         ...state,
//         basket:state.basket.filter((items)=>{
//             if(items.id!=action.payload){
//                 return items;
//             }
//         })
//     }
//     break;
