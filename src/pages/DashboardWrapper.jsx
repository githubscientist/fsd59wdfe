import { Link, useLoaderData, useNavigate } from "react-router-dom";
import userServices from "../services/userServices";

export async function loader() {
    // get the currently logged in user
    const user = await userServices.getProfile();
    // return the user data
    return { user };
}

const DashboardWrapper = () => {

    const navigate = useNavigate();
    const { user } = useLoaderData();

    const handleLogout = () => {
        // perform user logout
        userServices.logout()
            .then(response => {
                alert("Logout successful");
                // redirect to the login page
                setTimeout(() => {
                    navigate("/login");
                }, 500);
            })
            .catch(error => {
                alert("Logout failed");
            })
    }

    // console.log(user);
  return (
      <div className="container-fluid">
          <div className="row">
              <div className="col">
                  <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/dashboard">Dashboard</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                                      <Link className="nav-link disabled" aria-disabled="true" >Welcome { user.data.user.name }</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" onClick={handleLogout}>Logout</Link>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
              </div>
          </div>
    </div>
  )
}

export default DashboardWrapper;