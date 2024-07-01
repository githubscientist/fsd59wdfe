import { protectedInstance } from "./instance";

const companyServices = {
    getCompanies: async () => {
        // make a GET request to the companies endpoint
        return await protectedInstance.get('/companies');
    }
}

export default companyServices;