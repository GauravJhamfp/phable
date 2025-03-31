import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import toast from 'react-hot-toast';
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
    const navigate = useNavigate(); // Redirect after login

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        const userInfo = {
            email: data.email,
            password: data.password,
        };

        try {
            const response = await axios.post('http://localhost:4000/user/login', userInfo);

            if (response.data) {
                toast.success('Login successful!');
                localStorage.setItem('userInfo', JSON.stringify(response.data.user));
                navigate('/'); // Redirect to dashboard or homepage
                window.location.reload();
            }
        } catch (error) {
            if (error.response) {
                console.log(error);
                toast.error("Error: " + error.response.data.message);
            }
        }
    };
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="login-section">
                        <h2>Login</h2>
                        <form onSubmit={handleSubmit(onSubmit)} method="post">
                            <div className="form-group">
                                <label htmlFor="email">Email address</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    placeholder="Enter email"
                                    {...register("email", { required: "Email is required" })}
                                />
                                {errors.email && <span className="text-danger">{errors.email.message}</span>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="password"
                                    placeholder="Password"
                                    {...register("password", { required: "Password is required" })}
                                />
                                {errors.password && <span className="text-danger">{errors.password.message}</span>}
                            </div>

                            <div className="text-center mt-3">
                                <button type="submit" className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <p className="mt-3">Don't have an account? <Link to="/signup">Sign Up</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
