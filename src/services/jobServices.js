import { protectedInstance } from "./instance";

const jobServices = {
    getJobs: async () => {
        // make a GET request to the jobs endpoint
        return await protectedInstance.get('/jobs');
    },
    applyJob: async (jobId) => {
        // make a POST request to the apply endpoint
        return await protectedInstance.post(`/jobs/${jobId}/apply`);
    },
    getAppliedJobs: async () => {
        // make a GET request to the applied-jobs endpoint
        return await protectedInstance.get('/jobs/applied');
    }
}

export default jobServices;