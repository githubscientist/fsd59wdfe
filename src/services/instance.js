import axios from "axios";

// define the base url
const baseURL = "http://localhost:3001";

// create an axios instance
const instance = axios.create({
    baseURL,
    timeout: 5000,
    headers: {
        "Content-Type": "application/json",
    },
});

const protectedInstance = axios.create({
    baseURL,
    timeout: 5000,
    headers: {
        "Content-Type": "application/json",
    },
    withCredentials: true,
});

export { instance, protectedInstance };