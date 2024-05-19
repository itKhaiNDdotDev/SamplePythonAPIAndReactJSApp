import axios from 'axios';

const API_URL = 'http://localhost:5000/students';

const getStudents = () => {
    return axios.get(API_URL);
};

const getStudent = (id) => {
    return axios.get(`${API_URL}/${id}`);
};

const addStudent = (student) => {
    return axios.post(API_URL, student);
};

const updateStudent = (id, student) => {
    return axios.put(`${API_URL}/${id}`, student);
};

const deleteStudent = (id) => {
    return axios.delete(`${API_URL}/${id}`);
};

export { getStudents, getStudent, addStudent, updateStudent, deleteStudent };