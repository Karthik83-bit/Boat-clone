import {React,useState}from 'react'
import { useLocation } from 'react-router-dom'
import {arr,headphn} from './Items'
import '../Styles/NavPage.css'
import NavProduct from './NavProduct'

function NavPage() {
    console.log("jfjkjfkjklj")
    const {state}=useLocation();
    const [Src, setSrc] = useState(state);
   
  
  console.log(state)
const filterShow=()=>{
    console.log("clivked")
    document.querySelector(".filtermodal").style.left="0";
    document.querySelector(".NavPage-wrap").classList.add("navpage-wrap-overlay")
}
   

  return (
    
    <div className='NavPage-wrap'>
    <div className='navPage-overlay'>   </div>
    <div className='filtermodal'></div>
   
       <div className='main-content'>
       <div className='head-img'>
            <img src={state[0].headimg}/>
        </div>
        <div className='product-container-wrap'>
            <div className='product-content'>
            <div className='filterwrap'>
            <button onClick={filterShow}>Filter</button>
            </div>
          <div className='dropdown-wrap'>
          <label for="sort">Sort By</label>
                <select name="sort">
                <option name="featured "  value="featured"></option>
                    <option name="featured "  value="featured"> <div style={{width:"1000px",height:"50px",backgroundColor:"red"}}>Featured</div></option>
                    <option value="bestselling">BestSelling</option>
                    <option value="alpha-a-z">Alphabetically A-z</option>
                    <option value="alpha-z-a">Alphabetically Z-A</option>
                    <option value="date-o-n">Date newset-oldest</option>
                    <option value="date-n-o">Date newes-oldest</option>
                    
                </select>
          </div>
            </div>
            <div className='product-container'>
                {Src.map((item,ind)=>{
              
                    if(ind!=0){
                        console.log(item)
                        return <NavProduct item={item}/>
                    }
                })}
            </div>
        </div>
        <div className='footer-wrap'>

        </div>
        
       </div>
    </div>
 
   
  )
}

export default NavPage