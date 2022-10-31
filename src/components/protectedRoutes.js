

import { Outbound } from '@mui/icons-material';
import React from 'react'
import { Navigate,useNavigate,Outlet } from 'react-router-dom'
import { useStateValue } from './StateProvider';





function ProtectedRoutes() {
    const navigate=useNavigate();
    const [state,dispatch]=useStateValue();
    const isAuth=()=>{
        console.log(state.user)
        if(state.user.id)return true;
        return true;
    }
  return (
    <div>
      {isAuth()?<Outlet/>:<Navigate to="/login"/>}
    </div>
  )
}

export default ProtectedRoutes




