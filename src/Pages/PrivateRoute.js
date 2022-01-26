import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../Context/Auth'

function PrivateRoute() {
    const { currentUser } = useAuth()
    return currentUser ? <Outlet /> : <Navigate to={'/login'} />
}

export default PrivateRoute