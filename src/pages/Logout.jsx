import React from 'react'
import { useAuth } from '../context/AuthProvider'
import toast from 'react-hot-toast'

const Logout = () => {
    const [authUser, setAuthUser] = useAuth()
    const handleLogout = () => {
        try {
            setAuthUser({
                ...authUser,
                user: null,
            });
            localStorage.removeItem("userInfo");
            toast.success("Logout Successfully");
            window.location.reload();

        } catch (error) {
            toast.error("Error: " + error.message);
        }
    };
    return (
        <div>
            <button className="btn btn-light" onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default Logout