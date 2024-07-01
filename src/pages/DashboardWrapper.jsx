import { Link, Outlet, useLoaderData, useNavigate } from "react-router-dom";
import userServices from "../services/userServices";
import { useEffect } from "react";
import Sidebar from "../components/Sidebar";

export async function loader() {
    // get the user profile
    const user = await userServices.getProfile();
    // return the user profile
    return { user };
}

const DashboardWrapper = () => {

    const navigate = useNavigate();
    const { user } = useLoaderData();

    useEffect(() => {
        if (!user) {
            navigate("/login");
        }
    }, []);

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
                    <Link className="navbar-brand" to="/dashboard">Dashboard</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                                      <Link className="nav-link disabled" aria-disabled="true" >Welcome { user && user.data.user.name }</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" onClick={handleLogout}>Logout</Link>
                        </li>
                    </ul>
                    </div>
            </nav>
              </div>
          </div>

          <div className="row mt-5">
              <div className="col-md-3">
                <Sidebar />
              </div>

              <div className="col-md-9">
                  <Outlet />
              </div>
            </div>
    </div>
  )
}

export default DashboardWrapper;