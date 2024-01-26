import React, { useContext, useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import { NavLink, useNavigate } from 'react-router-dom'

export default function BookMark() {
   const [PostModel,SetPostModel]=useState<any>([])
   const navigate=useNavigate() 

  useEffect(()=>{
    const storedBookmarks = JSON.parse(localStorage.getItem('bookmarks') || '[]');
    SetPostModel(storedBookmarks)
  },[])
      
    return (
        <div>
            <Navbar />
            <div className="container pt-5">
            <h1 className='text-primary pb-5'>BookMark Post</h1>
                <div className='row'>
                    {
                        PostModel.map((obj: any, i: any) => {
                            return(
                                <div className="col-md-6 col-sm-12 mb-3" key={i}>
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title d-flex justify-content-between">
                                            <span className='text-primary'>Title: {obj.title ? obj.title.slice(0, 10) : "No Title"}.....</span></h5>
                                        <p className="card-text">{obj.body ? obj.body.slice(0, 80) : "No Body"}....</p>
                                       <button onClick={()=>navigate(`/Detail/${obj.id}`)} className='btn btn-primary'>view</button>
                                    </div>
                                </div>
                            </div>
                            )
                        })
                    }
                </div>
            </div>

        </div>
    )
}
