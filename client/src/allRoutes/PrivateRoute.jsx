import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
    const { isAuth } = useSelector(store => store.auth);
    const navigate = useNavigate()
    if (!isAuth) {
        return navigate('/signin')
    }
    return children
}