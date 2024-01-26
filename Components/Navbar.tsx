import React, { useContext, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import PostContext from '../Context/State'

export default function Navbar() {
    const context = useContext(PostContext)
    const { GetPostbyTitle } = context
    const location = useLocation()
  
    const [Searchvalue, SetSearchValue] = useState<any>('')

    const SearchModel = (value: String) => {
        SetSearchValue(value)
    }

    const Search = (e: any) => {
        let clear = document.getElementById('clear')
        let submit = document.getElementById('submit')

        if (clear && submit) {
            clear.style.display = 'block';
            submit.style.display = "none"
        }
        e.preventDefault()
        GetPostbyTitle(Searchvalue)

    };
    const ClearSearch = () => {
        SetSearchValue('')
        window.location.reload()
    }

    return (
        <div>
            <nav className="navbar" style={{ boxShadow: "0px 2px 4px blue" }}>
                <div className="container">
                    <NavLink to="/" className="navbar-brand text-primary nav-heading">Post Manager</NavLink>
                    {
                        location.pathname =="/" && (
                            <form className="d-flex" role="search">
                            <input
                                className='me-2 px-2 rounded-2'
                                style={{ border: '1px solid blue', outline: 'none' }}
                                placeholder='Search'
                                onChange={(e) => SearchModel(e.target.value)}
                            />
                            <button className="btn btn-outline-primary" type="submit" onClick={Search}>
                                Search
                            </button>
                            {Searchvalue && (
                                <button onClick={ClearSearch} className="btn btn-outline-primary">
                                    Clear
                                </button>
                            )}
                        </form>
                        )
                    }
                </div>
            </nav>
        </div>
    )
}
