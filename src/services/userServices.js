import { instance, protectedInstance } from "./instance";

// define the user services
const userServices = {
    // register a new user
    register: async (name, email, password) => {
        // make a POST request to the register endpoint
        return await instance.post('/users', {
            name,
            email,
            password
        });
    },
    // login a user
    login: async (email, password) => {
        // make a POST request to the login endpoint
        return await instance.post('/users/login', {
            email,
            password
        }, { withCredentials: true });
    },
    getProfile: async () => {
        // make a GET request to the profile endpoint
        return protectedInstance.get('/users/profile');
    },
    logout: async () => {
        // make a GET request to the logout endpoint
        return protectedInstance.get('/users/logout');
    }
}

export default userServices;