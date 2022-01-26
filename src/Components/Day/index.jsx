import { bd } from '../../Config/firebase'
import { collection, addDoc } from 'firebase/firestore'
import { useAuth } from '../../Context/Auth'
import { useState } from 'react'

import Task from '../Task'
import CoverImage from '../CoverImage'
import IconImage from '../IconImage'
import plus from '../../Assets/plus.svg'
import './styles.css'

function Day({ tasks, day, dayId }) {
    const [isShown, setIsShown] = useState(false)
    const [input, setInput] = useState('')
    const { currentUser } = useAuth()
    const tasksCollectionRef = collection (bd, "tasks")

    function handleInputSubmit(e) {
        if(e.key === 'Enter' && input !== '') {
            const submitTask = async () => {
                await addDoc(tasksCollectionRef, { day: dayId, isCompleted: false, email: currentUser.email, text: input })
            }
            submitTask()
            setInput('')
            setIsShown(false)
        }
    }

    return (
        <div className="day">
            <div className="day_header">
                <CoverImage number={dayId}/>
                <IconImage number={dayId}/>
                <h3 className="day_header-title">{day}</h3>
                <p className="day_header-text">{tasks.length} {tasks.length === 1 ? 'task' : 'tasks'} today</p>
            </div>
            <div className="day_tasks">
                {tasks.map(task => (
                    <Task key={task.id} task={task}/>
                ))}
            </div>
            <div className="day_input">
                <img src={plus} alt="Add Button" onClick={() => setIsShown(isShown === false ? true : false)}/>
                <input type="text" style={{display:isShown === false ? 'none': 'block'}} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => handleInputSubmit(e)}/>
            </div>
        </div>
    )
}

export default Day;