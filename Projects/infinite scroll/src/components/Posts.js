import React from 'react'

const Posts = ({item:{userId, title, body}}) => {
    return (
        <React.Fragment>
            <div className="container my-5 bg-info">
                <div className='p-4'>
                    <h3>{userId}</h3>
                    <h4>{title}</h4>
                    <p>{body}</p>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Posts;