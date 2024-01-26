import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Post from '../Pages/Post'
import ApiFunction from '../Context/StateFunction'
import Detail from '../Pages/Detail'
import BookMark from '../Pages/BookMark'

export default function Router() {
  return (
    <ApiFunction>
        <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='BookMark' element={<BookMark/>}/>
        <Route path='Detail/:id' element={<Detail/>}/>
      </Routes>
      
      </BrowserRouter>
    </div>
    </ApiFunction>
  )
}
