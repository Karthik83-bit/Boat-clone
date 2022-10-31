import React,{useContext,createContext,useReducer} from "react";

// const first = useContext(second)
// const [state, dispatch] = useReducer(/, second, third)


export const StateContext=React.createContext();

export const StateProvider =({reducer,initialState,children})=>(
    <StateContext.Provider value={useReducer(reducer,initialState)}>
        {children}
    </StateContext.Provider>
    
)
// console.log(useContext(StateContext))
export const useStateValue=()=>useContext(StateContext);
