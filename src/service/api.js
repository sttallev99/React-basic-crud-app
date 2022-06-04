import axios from "axios";

const API_URL = 'http://localhost:3002/courses';

export const addCours = async (data) => {
    try {
        return await axios.post(API_URL, data);
    } catch(error) {
        console.log('Error while calling addCours api', error.message)
    }
}

export const getCourses = async () => {
    try {
        return await axios.get(API_URL);
    } catch(error) {
        console.log('Error while calling getUsers api', error.message)
    }
}

export const getCours = async (data) => {
    try {
        return await axios.get(`${API_URL}/${data}`);
    } catch(error) {
        console.log('Error while calling getUser api', error.message)
    }
}

export const editCours = async (data, id) => {
    try {
        return await axios.put(`${API_URL}/${id}`, data);
    } catch(error) {
        console.log('Error while  calling editCours api', error.message);
    }
}

export const deleteCours = async (id) => {
    try {
        return await axios.delete(`${API_URL}/${id}`);
    } catch(error) {
        	console.log('Error while calling deleteCours api', error.message);
    }
}