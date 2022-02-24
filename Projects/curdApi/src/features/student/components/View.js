import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from "axios";

const View = () => {
    const { id } = useParams();

    const navigate = useNavigate();

    const [student, setStudent] = useState([]);

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
                            <h3 className="bg-success p-3 text-white text-center">Student Detail</h3>
                            <table className="table table-striped text-center">
                                <thead>
                                    <tr className='table-dark'>
                                        <th scope="col">ID</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Email</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">{student.id}</th>
                                        <td>{student.studentName}</td>
                                        <td>{student.studentEmail}</td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="d-grid gap-2 d-md-flex justify-content-md-center my-3">
                                <button className="btn btn-warning btn-sm me-md-2" type="submit" onClick={handleClick}>Back To Home</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default View;