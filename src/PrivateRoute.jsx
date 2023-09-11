import {Navigate, Outlet} from "react-router-dom";

const isAuthorized = JSON.parse(localStorage.getItem('isAuthorized'))
const PrivateRoute = () => {
    return(
        isAuthorized ? <Outlet/> : <Navigate to={'/login'}/>
    );
};

export default PrivateRoute
