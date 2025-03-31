import React from 'react';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import "react-toastify/dist/ReactToastify.css";
// import Login from './Login';


const SingUp = () => {
    const loaction = useLocation();
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || "/"

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        const userInfo = {
            name: data.name,
            email: data.email,
            password: data.password,
        };
        await axios.post('http://localhost:4000/user/signup', userInfo)
            .then((response) => {
                console.log(response.data);
                if (response.data) {
                    toast.success('Sign up successful!');
                    navigate(from, { replace: true });
                }
                localStorage.setItem('userInfo', JSON.stringify(response.data.user));
                // Handle successful sign-up (e.g., redirect to login page)
            })
            .catch((errors) => {
                if (errors.response) {
                    console.log(errors);
                    toast.error("Error:" + errors.response.data.message);
                }
            });
        // Perform sign-up logic here (e.g., API call)
    }
    return (
        <>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="login-section">
                            <h2>Sign Up</h2>
                            <form onSubmit={handleSubmit(onSubmit)} method='dailog'>
                                <div className="form-group">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" className="form-control" id="name" placeholder="Enter your name" {...register("name", { required: true })} />
                                    {errors.name && <span className="text-danger text-sm">Name is required</span>}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email address</label>
                                    <input type="email" className="form-control" id="email" placeholder="Enter email" {...register("email", { required: true })} />
                                    {errors.email && <span className="text-danger text-sm">Email is required</span>}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Password</label>
                                    <input type="password" className="form-control" id="password" placeholder="Password" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="confirmPassword">Confirm Password</label>
                                    <input type="password" className="form-control" id="confirmPassword" placeholder="Confirm Password"  {...register("password", { required: true })} />
                                    {errors.password && <span className=" text-sm text-danger">Password is required</span>}
                                </div>
                                <button type="submit" className="btn btn-primary">Sign Up</button>
                            </form>
                            <p>Already have an account? <Link to="/login">Login</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SingUp