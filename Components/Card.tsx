import React, { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom'
import BookmarkIcon from '@mui/icons-material/Bookmark';
import PostContext from '../Context/State';
type def = {
  Postobj:any
}


export default function Postitem(props: def) {
  const context = useContext(PostContext);
  const { savePost, addBookmark } = context;

  let { title, body, id } = props.Postobj;
  const isBookmarked = savePost.some((obj:any) => obj.id === id);

  const BookMark = () => {
    if (!isBookmarked) {
      addBookmark(props.Postobj);
    }
  };
  
  return (
    <div className="card">
        <div className="card-body">
          <h5 className="card-title d-flex justify-content-between">
          <span className='text-primary'>Title: {title?title.slice(0,10):"No Title"}.....</span> <span><BookmarkIcon style={{cursor:"pointer"}} onClick={BookMark}/></span></h5>
          <p className="card-text">{body?body.slice(0,80):"No Body"}....</p>
          <NavLink to={`Detail/${id}`} className="text-primary fs-5 py-2">View Details</NavLink>
        </div>
      </div>
  )
}

