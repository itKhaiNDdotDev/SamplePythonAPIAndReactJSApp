import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getStudents, deleteStudent } from '../services/studentService';

function StudentList() {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        getStudents().then(response => {
            setStudents(response.data);
        }).catch(error => {
            console.error(error);
        });
    }, []);

    return (
        <div>
            <button className="btn" onClick={() => { alert("CLICKED!")}}>My button</button>
            <h2>Student List</h2>
            <Link to="/add-student" className="btn btn-primary mb-3">Add Student</Link>
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Gender</th>
                        <th>Class</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map(student => (
                        <tr key={student._id}>
                            <td>{student.name}</td>
                            <td>{student.gender}</td>
                            <td>{student.student_class}</td>
                            <td>
                                <Link to={`/student/${student._id}`} className="btn btn-info">View</Link>
                                <Link to={`/edit-student/${student._id}`} className="btn btn-warning">Edit</Link>
                                <button className="btn btn-danger" onClick={() => handleDelete(student._id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );

    function handleDelete(id) {
        deleteStudent(id).then(response => {
            setStudents(students.filter(student => student._id !== id));
        }).catch(error => {
            console.error(error);
        });
    }
}

export default StudentList;