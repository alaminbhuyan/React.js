import React from 'react'
import AddStudent from '../components/AddStudent'
import ListStudent from '../components/ListStudent'

const Home = () => {
    return (
        <React.Fragment>
            <div className="">
                <h1 className='text-center bg-info p-3'>React CRUD with API Call</h1>
                <div className="row justify-content-center">
                    <div className='col-md-6 col-sm-12'>
                        <AddStudent/>
                    </div>
                    <div className='col-md-6 col-sm-12'>
                        <ListStudent/>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Home;