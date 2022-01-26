import { useState } from 'react'
import { bd } from '../../Config/firebase'
import { doc, deleteDoc, updateDoc } from 'firebase/firestore'

import trash from '../../Assets/trash.svg'
import './styles.css'

function Task({ task }) {
    const [isShown, setIsShown] = useState(false)
    async function handleDeleteTask() {
        const taskDoc = doc(bd, "tasks", task.id)
        await deleteDoc(taskDoc)
    }

    async function handleUpdateTask() {
        const update = {isCompleted: task.isCompleted === true ? false : true}
        const taskDoc = doc(bd, "tasks", task.id)
        await updateDoc(taskDoc, update)
    }

    return (
        <div className="task_container" onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)}>
            <div className="task_status" onClick={handleUpdateTask} style={{backgroundColor: task.isCompleted === true ? 'black' : 'white'}}></div>
            <img src={trash} alt="Delete Button" onClick={handleDeleteTask} style={{display: isShown === false ? 'none' : 'block'}}/>
            <p style={{textDecoration: task.isCompleted === true ? 'line-through' : 'none'}}>{task.text}</p>
        </div>
    )
}

export default Task