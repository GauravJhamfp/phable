import React from 'react'

const Login = () => {
    return (
        <>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="login-section">
                            <h2>Login</h2>
                            <form>
                                <div className="form-group">
                                    <label htmlFor="email">Email address</label>
                                    <input type="email" className="form-control" id="email" placeholder="Enter email" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Password</label>
                                    <input type="password" className="form-control" id="password" placeholder="Password" />
                                </div>
                                <button type="submit" className="btn btn-primary">Login</button>
                            </form>
                            <p>Don't have an account? <a href="/signup">Sign Up</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login