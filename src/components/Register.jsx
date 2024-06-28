import { useState } from "react";
import userServices from "../services/userServices";
import { useNavigate } from "react-router-dom";

const Register = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();

        // perform user registration
        userServices.register(name, email, password)
            .then(response => {
                alert("Registration successful");

                // clear the form
                setName("");
                setEmail("");
                setPassword("");

                // redirect to the login page
                setTimeout(() => {
                    navigate("/login");
                }, 500);

            })
            .catch(error => {
            alert("Registration failed");
        })
    }

  return (
      <div>
          <div className="container mt-5">
              <div className="row">
                  <div className="col-md-6 offset-md-3">
                        <div className="card">
                            <div className="card-header">
                                Register
                            </div>
                            <div className="card-body">
                                <form onSubmit={handleRegister}>
                                    <div className="mb-3">
                                        <label htmlFor="name" className="form-label">Name</label>
                                      <input
                                          type="text" className="form-control" id="name" 
                                          value={name}
                                            onChange={(e) => setName(e.target.value)}
                                          />
                                    </div>
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
                                    <button type="submit" className="btn btn-primary">Register</button>
                                </form>
                          </div>
                          
                      </div>
              </div>
          </div>
          </div>
          </div>
  )
}

export default Register;