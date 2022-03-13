import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Cart from '../components/Cart'
import Products from '../pages/Products'

function RouterManager() {
  return (
    
    <Routes>
        <Route path='/' element={<Products/>}/>
        <Route path='/cart' element={<Cart/>}/>

    </Routes>
  )
}

export default RouterManager