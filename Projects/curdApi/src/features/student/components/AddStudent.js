import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import Home from '../pages/Home';

const AddStudent = () => {
    const [student, setStudent] = useState({
        studentName: "",
        studentEmail: ""
    });

    const [status, setStatus] = useState();

    const navigate = useNavigate();

    // !Take input form field
    function onTextFieldChange(e) {
        setStudent({
            ...student,
            [e.target.name]: e.target.value
        });
        // console.log(student);
    };

    // !Add Student form handle method
    async function onFormSubmit(event) {
        event.preventDefault();
        try {
            await axios.post(`http://localhost:3333/student`, student);
            setStatus(true);
            
        } catch (error) {
            console.log("Something is wrong");
        }
    };

    // ! Refresh the data for showing after add new data
    // if (status) {
    //     navigate('/');
    // }
    return (
        <React.Fragment>
            <h3 className="bg-success p-3 text-white text-center">Add Student</h3>
            <form>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" name='studentName' id="name" aria-describedby="emailHelp" placeholder='***Name' onChange={(e) => onTextFieldChange(e)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" name='studentEmail' id="email" placeholder='***Email' onChange={e => onTextFieldChange(e)} />
                </div>
                <div className="d-grid">
                    <button className="btn btn-primary" type="submit" onClick={(event) => onFormSubmit(event)}>Add</button>
                </div>
            </form>
        </React.Fragment>
    )
}

export default AddStudent;