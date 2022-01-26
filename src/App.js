import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { AuthProvider } from './Context/Auth'
import { TasksProvider } from './Context/Tasks'
import { UserProvider } from './Context/User'

import PrivateRoute from './Pages/PrivateRoute'
import Home from './Pages/Home'
import Dashboard from './Pages/Dashboard'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import Error from './Pages/Error'

function App() {
  return (
    <Router>
      <AuthProvider>
        <TasksProvider>
          <UserProvider>
            <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/login" element={<Login />}/>
              <Route path="/signup" element={<Signup />}/>
              <Route element={<PrivateRoute />}>
                <Route path="/dashboard" element={<Dashboard />}/>
              </Route>
              <Route path="*" element={<Error />}/>
            </Routes>
          </UserProvider>
        </TasksProvider>
      </AuthProvider>
    </Router>
  )
}

export default App