import React from 'react'
import Navbar from '../Components/Navbar'
import Post from './Post'
import { useNavigate } from 'react-router-dom'

export default function Home() {
  const navigate=useNavigate()
  return (
    <div>
      <Navbar/>
      <div className="container">
        {/* Navigate to BookMark page */}
        <button className='btn btn-primary mt-4' onClick={()=>navigate('BookMark')}>BookMark Post</button>
      </div>
      {/* Rendering Post component */}
      <Post/>
    </div>
  )
}
