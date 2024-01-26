import React, { useContext, useEffect } from 'react'
import Navbar from '../Components/Navbar'
import { useParams } from 'react-router-dom'
import PostContext from '../Context/State'

export default function Detail() {
    const context=useContext(PostContext)
    const {Getbyid,MyPost}=context
    const param=useParams()
   

    useEffect(()=>{
        Getbyid(param.id)
    })
  return (
    <div>
      <Navbar/>
        <div className='container pt-5 mb-4'>
                <div>
                    <h1 className='text-danger mb-5'>Post Details</h1>
                    <h3 className='mb-4'><span className='text-primary'>Title : </span>{MyPost.title}</h3>
                    <h6><span className='text-primary'>Body : </span>{MyPost.body}</h6>
                </div>
        </div>
    </div>
  )
}
