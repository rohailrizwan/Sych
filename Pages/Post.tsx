import React, { useContext, useEffect } from 'react'
import PostContext from '../Context/State'
import Postitem from '../Components/Card'

export default function Post() {
    const context = useContext(PostContext)
    const { MyPost, Get, Next ,pageindex,Back} = context
    useEffect(() => {
        Get()
    }, [pageindex])

    return (
        <div>
            <div className="container pt-5 pb-5">
                <div className="row">
                    {
                       MyPost.length>0?(
                        MyPost.map((obj: any, i: any) => {
                            return (
                                <div className="col-md-4 col-sm-12 mb-4" key={i}>
                                    <Postitem Postobj={obj} key={obj.id} />
                                </div>
                            )
                        })
                       ):<p className='mb-2'>Loading</p>
                    }
                    <div className="col-md-12">
                        <div className='d-flex justify-content-between'>
                            <div > <button className="btn btn-danger" onClick={Back} disabled={pageindex<=1}>Back</button></div>
                            <div><button className="btn btn-success" onClick={Next} disabled={pageindex>=10}>Next</button></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
