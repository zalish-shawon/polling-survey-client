/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import useUsers from "../../hooks/useUsers";
import { AuthContext } from "../../provider/AuthProvider";
import Spinner from "../Spinner/Spinner";

const SurveyorRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext)
    const location = useLocation()
    const admin = useUsers();

  
    const isSurveyor = admin.find(item => item.email === user?.email && item.role === 'surveyor');

    if (loading) {
        return <Spinner></Spinner>

    }
    if (user && isSurveyor) {
        return children
    }
    return (
        <div>
            <Navigate state={location.pathname} to={"/home"}></Navigate>
        </div>
    );
};

export default SurveyorRoute;