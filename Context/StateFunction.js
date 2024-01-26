import { useState } from "react"
import PostContext from "./State"
import axios from "axios"

const ApiFunction = (props) => {
    const [MyPost, SetMyPost] = useState([])
    const [pageindex, SetPageindex] = useState(1)
    let pagesize = 10
    const [savePost, setSavePost] = useState([]);

    const addBookmark = (post) => {
        setSavePost((prev) => {
            const updatedPosts = [...prev, post];
            localStorage.setItem('bookmarks', JSON.stringify(updatedPosts));
            return updatedPosts;
          });
    };
    // console.log(savePost)
    const Get = async () => {
        try {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?_page=${pageindex}&_limit=${pagesize}`);
            SetMyPost(response.data)
        } catch (error) {
            alert(error)
        }
    }
    const Next = () => {
        SetPageindex(pageindex + 1)
    }
    const Back = () => {
        if (pageindex >= 1) {
            SetPageindex(pageindex - 1)
            Get()
        }
    }
    const Getbyid = async (id) => {
        try {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            // console.log(response.data)
            SetMyPost(response.data)

        } catch (error) {
            alert("No Data Found")
        }
    }
    const GetPostbyTitle = async (title) => {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?title=${title}`)
        SetMyPost(response.data)
    }

    return (
        <PostContext.Provider value={{ MyPost, Get, Next, pageindex, Back, Getbyid, GetPostbyTitle, savePost, addBookmark }}>
            {props.children}
        </PostContext.Provider>
    )
}

export default ApiFunction 