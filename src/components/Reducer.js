// import { StateContext } from "./Context"
import { items } from "./Items";

// const [state, dispatch] = useReducer(first, second, third)
export const initialState={
    user:{id:null,name:null},
    basket:[],
}
 const reducer=(state,action)=>{
    switch(action.type){
    case 'Add_To_Basket':
        return{
            ...state,
            basket:[...state.basket,action.payload]
        }
        break;
    case 'removeFromCart':
        return {
            ...state,
            basket:state.basket.filter((items)=>{
                if(items.id!=action.payload){
                    return items;
                }
            })
        }
    case "setUser":
        return{
            ...state,user:action.payload}
 
        break;
   
    
    default:
        return state;
  


}

}
export default reducer;