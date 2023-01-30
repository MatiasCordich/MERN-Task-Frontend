import axios from 'axios'
export const host = "https://task-manager-backend-r5ig.onrender.com"

const baseUrl = axios.create({
    baseURL: "https://task-manager-backend-r5ig.onrender.com",
    withCredentials: false,
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    }
})

export default baseUrl