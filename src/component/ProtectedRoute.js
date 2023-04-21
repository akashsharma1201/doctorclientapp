import { Navigate , useNavigate} from "react-router-dom"

const ProtectedRoutes = ({children}) => {

    const navigate = useNavigate()
    // console.log(localStorage.getItem("token"));
    if(localStorage.getItem("token")){
        return children
    }else{
        return <Navigate to="/login"/>
    }
}

 
const PublicRoutes = ({children}) => {
    if(!localStorage.getItem("token")){
        return children
    }else{
        return <Navigate to="/"/>
    }
}

export {ProtectedRoutes , PublicRoutes}