const Login = () => {
  return (
      <div className="container mt-5">
          <div className="row">
              <div className="col-md-6 offset-md-3">
                    <div className="card">
                        <div className="card-header">
                            Login
                        </div>
                        <div className="card-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input type="email" className="form-control" id="email" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="password" />
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