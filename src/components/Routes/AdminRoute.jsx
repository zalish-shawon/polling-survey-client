/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import useUsers from "../../hooks/useUsers";
import Spinner from "../Spinner/Spinner";

const AdminRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext)
    const location = useLocation()
    const admin = useUsers();

    const isAdmin = admin.find(item => item.email === user?.email && item.role === 'admin');


    if (loading) {
        return <Spinner></Spinner>

    }
    if (user && isAdmin) {
        return children
    }
    return (
        <div>
            <Navigate state={location.pathname} to={"/home"}></Navigate>
        </div>
    );
};

export default AdminRoute;