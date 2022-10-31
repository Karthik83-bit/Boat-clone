import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router ,Routes,Route } from 'react-router-dom';
// import { Route,Routes } from 'react-router-dom';
// import { Router } from 'react-router-dom';
import './index.css';
import App from './App';
import { StateProvider } from './components/StateProvider';
import reducer, { initialState } from './components/Reducer';

import Nav from './components/Nav';
import Login from './components/Login';
import Product from './components/Product';
import ProtectedRoutes from './components/protectedRoutes';
import NavPage from './components/NavPage';
// console.log()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <React.StrictMode>
   <StateProvider  initialState={initialState} reducer={reducer}>
 
  <Router>
  <div className='overlay'></div>
  <Nav/>
  <Routes> 

  

  <Route path='/' element={<App/>

}/>
<Route path='/login' element={<Login/>}/>
<Route element={<ProtectedRoutes/>}>
<Route path='/cart' element={<App/>}></Route>
  <Route path='/product' element={<Product/>}/>
</Route>
<Route path="/AirDopes" element={<NavPage/>}/>
</Routes>
 

</Router>
</StateProvider>
  </React.StrictMode>
);


