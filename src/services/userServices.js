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
        try {
            // make a GET request to the profile endpoint
            const user = await protectedInstance.get('/users/profile');
            return user;
        } catch (error) {
            return null;
        }
    },
    logout: async () => {
        // make a GET request to the logout endpoint
        return protectedInstance.get('/users/logout');
    },
    // to check if the user is authenticated
    checkAuth: async () => {
        try {
            // make a GET request to the profile endpoint
            const user = await protectedInstance.get('/users/profile');
            return user ? true : false;
        } catch (error) {
            return false;
        }
    },
    updateProfile: async (name, email) => {
        return await protectedInstance.put('/users/profile', {
            name,
            email
        })
    },
    setProfilePicture: async (formData) => {
        return await protectedInstance.put('/users/profile/picture', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    }
}

export default userServices;