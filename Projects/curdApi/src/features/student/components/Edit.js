import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from "axios";

const Edit = () => {
    const { id } = useParams();

    const navigate = useNavigate();

    // !declare state
    const [student, setStudent] = useState({
        studentName: "",
        studentEmail: ""
    });

    // !Fetching single Data
    useEffect(() => {
        async function getStudentData() {
            try {
                const student = await axios.get(`http://localhost:3333/student/${id}`);
                // console.log(student.data);
                setStudent(student.data);
            } catch (error) {
                console.log("Something is Wrong");
            }
        };
        getStudentData();
    }, [id]);

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
            await axios.put(`http://localhost:3333/student/${id}`, student);
        } catch (error) {
            console.log("Something is wrong");
        }
        navigate('/');
    };

    // !Navigate method
    function handleClick() {
        navigate('/');
    }

    return (
        <React.Fragment>
            <div>
                <h1 className='text-center bg-info p-3'>React CRUD with API Call</h1>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8 col-sm-12">
                            <h3 className="bg-success p-3 text-white text-center">Edit Student (ID: {id})</h3>
                            <form className='my-5'>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Name</label>
                                    <input type="text" value={student.studentName} className="form-control" id="name" name='studentName' aria-describedby="emailHelp" placeholder='***Name' onChange={e => onTextFieldChange(e)} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input type="email" value={student.studentEmail} className="form-control" id="email" name='studentEmail' aria-describedby="emailHelp" placeholder='***Email' onChange={e => onTextFieldChange(e)} />
                                </div>
                                <div className="d-grid gap-2 ">
                                    <button className="btn btn-primary" type="submit" onClick={event => onFormSubmit(event)}>Update</button>
                                </div>
                                <div className="d-grid gap-2 d-md-flex justify-content-md-center my-3">
                                    <button className="btn btn-warning btn-sm me-md-2" type="submit" onClick={handleClick}>Back To Home</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Edit;