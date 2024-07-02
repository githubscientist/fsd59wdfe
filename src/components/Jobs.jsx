import { useLoaderData } from 'react-router-dom';
import jobServices from '../services/jobServices';

export async function loader() {
  const jobs = await jobServices.getJobs();
  return jobs.data;
}

const Jobs = () => {

  const jobs = useLoaderData();

  // console.log(jobs);

  const applyJob = async (jobId) => {
    try {
      const response = await jobServices.applyJob(jobId);
      alert(response.data.message);
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <div className='container'>
      {
        jobs.map((job, index) => {
          return (
            <div key={index} className='card mb-4'>
              <div className='card-header'>
                <h2>{job.title}</h2>
              </div>
              <div className='card-body'>
                <p>{job.description}</p>
                <p>Location: {job.location}</p>
                <p>Company: {job.company.name}</p>
                <p>Job Status: {job.status}</p>
                <p>Job Type: {job.type}</p>
              </div>
              <button className='btn btn-primary'
              onClick={() => applyJob(job._id)}
              >Apply</button>
            </div>
          )
        })
      }
    </div>
  )
}

export default Jobs;