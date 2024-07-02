import { useLoaderData } from "react-router-dom";
import jobServices from "../services/jobServices"

export async function loader() {
  const appliedJobs = await jobServices.getAppliedJobs();
  return appliedJobs.data;
}

const Applications = () => {

  const appliedJobs = useLoaderData();

  // console.log(appliedJobs);

  return (
    <div className="container">
      {
        appliedJobs.map((job, index) => {
          return (
            <div key={index} className="card mb-4">
              <div className="card-header">
                <h2>{job.title}</h2>
              </div>
              <div className="card-body">
                <p>{job.description}</p>
                <p>Location: {job.location}</p>
                <p>Company: {job.company.name}</p>
                <p>Job Status: {job.status}</p>
                <p>Job Type: {job.type}</p>
              </div>
            </div>
          )
        })
    }
    </div>
  )
}

export default Applications