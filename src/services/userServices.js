import { instance } from "./instance";

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
    }
}

export default userServices;