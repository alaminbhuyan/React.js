import React from 'react'


const Course = (props) => {
    return (
        <React.Fragment>
            <div className="col">
                <div className="card shadow-sm">
                    <img src={props.information.image} alt="" />
                    <div className="card-body">
                        <p className='fw-bold'>{props.information.title}</p>
                        <p className="card-text text-muted">{props.information.body}</p>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="">
                                <a href={props.information.urlLink} className='btn btn-outline-dark btn-sm' >Explore</a>
                            </div>
                            <small className="text-muted">9 mins</small>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Course;