import React from 'react'

const Loader = () => {
    return (
        <React.Fragment>
            <div className="d-flex justify-content-center my-5">
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Loader;
