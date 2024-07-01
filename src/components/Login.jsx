import { useEffect, useState } from "react";
import userServices from "../services/userServices";
import { useLoaderData, useNavigate } from "react-router-dom";

export async function loader() {
    // check if the user is already authenticated
    const isAuthenticated = await userServices.checkAuth();
    return { isAuthenticated };
}

const Login = () => {

    const { isAuthenticated } = useLoaderData();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        if (isAuthenticated) {
            navigate("/dashboard");
        }
    }, []);

    const handleLogin = (e) => {
        e.preventDefault();
        
        // perform user login
        userServices.login(email, password)
            .then(response => {
                alert("Login successful");

                // clear the form
                setEmail("");
                setPassword("");

                // redirect to the dashboard
                setTimeout(() => {
                    navigate("/dashboard");
                }, 500);
            })
            .catch(error => {
                alert("Login failed");
            })
    }

  return (
      <div className="container mt-5">
          <div className="row">
              <div className="col-md-6 offset-md-3">
                    <div className="card">
                        <div className="card-header">
                            Login
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleLogin}>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email</label>
                                  <input type="email" className="form-control" id="email" 
                                      value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Password</label>
                                  <input type="password" className="form-control" id="password" 
                                        value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary">Login</button>
                            </form>
                      </div>
                    </div>
                  </div>
          </div>
    </div>
  )
}

export default Login;