import React from 'react';


const Contact = () => {
    document.title = "Contact-Page"
    return (
        <React.Fragment>
            <div className="container my-4">
                <div className="row justify-content-center">
                    <div className="col-sm-10">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="username" className="form-label">Username</label>
                                <input type="text" className="form-control" id="username" placeholder='**Enter your username' />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='**Enter your email' />
                                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="floatingTextarea2" className="form-label">Comments</label>
                                <textarea className="form-control" placeholder="**Leave a comment here..." id="floatingTextarea2" rows="12"></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary btn-sm">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Contact;