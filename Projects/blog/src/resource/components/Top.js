import React from 'react'
import { NavLink } from "react-router-dom";
import laptoImg from "../../images/laptop.jpg"

const Top = () => {
    return (
        <React.Fragment>
            <div className="container my-5">
                <div className="row">
                    <div className="col-sm-6 pe-0 mt-5">
                        <div className="row">
                            <div className="col-md-12 col-sm-12">
                                <h3>
                                    Welcome to <span style={{ color: "#4F46E5" }}>CodeWithAlamin</span>
                                </h3>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <p className="text-muted">Confused on which course to take? I have got you covered. Browse courses and find out the best course for you. Its free! Code With Harry is my attempt to teach basics and those coding techniques to people in short time which took me ages to learn.</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <NavLink to="/blog" className="btn btn-outline-success btn-sm">Explore Blog</NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 ps-0">
                        <div className='d-none d-md-block d-lg-block'>
                            <img className='w-100 opacity-75' src={laptoImg} alt="" style={{ clipPath: "polygon(10% 0, 100% 0%, 100% 98%, 0 100%)" }} />
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Top;