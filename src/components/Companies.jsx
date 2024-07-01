import { useLoaderData } from "react-router-dom";
import companyServices from "../services/companyServices";
import Card from "./Card";

export async function loader() {
    const companies = await companyServices.getCompanies();

    return { companies };
}

const Companies = () => {

    const { companies } = useLoaderData();

    // console.log(companies);

  return (
      <div className="container">
          <h4 className="mb-4">Companies registered with us!</h4>
            <div className="row">
                {
                    companies.data.map((company, index) => {
                        return (
                            <Card 
                                key={index}
                                company={company}
                            />
                        )
                    })
              }
        </div>
    </div>
  )
}

export default Companies;