import { useAuth } from '../../Context/Auth'
import { useNavigate } from 'react-router-dom'

import { useTasks } from '../../Context/Tasks'
import { useUser } from '../../Context/User'

import Day from '../../Components/Day'
import Background from '../../Components/Background'
import './styles.css'

function Dashboard() {
    const { seg, ter, qua, qui, sex, sab, dom } = useTasks()
    const { currentUser, logout } = useAuth()
    const { userName } = useUser()
    const navigate = useNavigate()

    async function handleLogout() {
        try {
            await logout()
            navigate('/login')
        } catch(error) {
            console.log(error)
        }
    }

    return (
        <section className="dashboard_container">
            <aside className="sidebar_container">
                <div className="sidebar_wrapper">
                    <div>
                        <div className="sidebar_profile"></div>
                        <h3 className="sidebar_name">Welcome, {userName}!</h3>
                        <p className="sidebar_email">{currentUser?.email}</p>
                    </div>
                    <button className="sidebar_button" onClick={handleLogout}>Logout</button>
                </div>
            </aside>
            <main className='main_container'>
                <Day tasks={dom} day={'Sunday'} dayId={0}/>
                <Day tasks={seg} day={'Monday'} dayId={1}/>
                <Day tasks={ter} day={'Tuesday'} dayId={2}/>
                <Day tasks={qua} day={'Wednesday'} dayId={3}/>
                <Day tasks={qui} day={'Thursday'} dayId={4}/>
                <Day tasks={sex} day={'Friday'} dayId={5}/>
                <Day tasks={sab} day={'Saturday'} dayId={6}/>
            </main>
            <Background />
        </section>
            
    )
}

export default Dashboard;