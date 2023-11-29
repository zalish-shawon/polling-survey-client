/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import Spinner from "../Spinner/Spinner";

const PrivateRoute = ({children}) => {

    const { user, loading } = useContext(AuthContext)
    const location = useLocation()


    if (loading) {
        return <Spinner></Spinner>

    }
    if (user) {
        return children
    }
    return (
        <div>
            <Navigate state={location.pathname} to={"/login"}></Navigate>
        </div>
    );
};

export default PrivateRoute;