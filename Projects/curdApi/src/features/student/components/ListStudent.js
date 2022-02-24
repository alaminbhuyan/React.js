import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from "axios";


const ListStudent = () => {
    const [students, setStudents] = useState([]);

    // !Fetching Data
    useEffect(() => {
        async function getAllStudentList() {
            try {
                const students = await axios.get("http://localhost:3333/student");
                // console.log(students.data);
                setStudents(students.data);
            } catch (error) {
                console.log("Something is Wrong");
            }
        }
        getAllStudentList();
    }, []);

    // !Delete method
    const handleDelete = async id => {
        await axios.delete(`http://localhost:3333/student/${id}`);
        var newStudent = students.filter((item) => {
            return item.id !== id;
        });
        setStudents(newStudent);
    };

    return (
        <React.Fragment>
            <h3 className="bg-danger text-white p-3 text-center">List Students</h3>
            <table className="table table-striped text-center">
                <thead>
                    <tr>
                        <th scope="col">No</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        students.map((student, i) => {
                            return (
                                <tr key={i}>
                                    <th scope="row">{i + 1}</th>
                                    <td>{student.studentName}</td>
                                    <td>{student.studentEmail}</td>
                                    <td>
                                        <Link to={`/view/${student.id}`} className='btn btn-warning btn-sm me-1'>View</Link>
                                        <Link to={`/edit/${student.id}`} className='btn btn-success btn-sm me-1'>Edit</Link>
                                        <button className='btn btn-danger btn-sm' onClick={() => handleDelete(student.id)}>Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </React.Fragment>
    )
}

export default ListStudent;