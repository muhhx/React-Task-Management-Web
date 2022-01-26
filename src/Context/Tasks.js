import { useState, createContext, useContext, useEffect } from 'react'
import { useAuth } from './Auth'

import { bd } from '../Config/firebase'
import { collection, getDocs } from 'firebase/firestore'

const TasksContext = createContext()

export function useTasks() {
    return useContext(TasksContext)
}

export function TasksProvider(props) {
    const { currentUser } = useAuth()
    const [todos, setTodos] = useState([])
    const [seg, setSeg] = useState([])
    const [ter, setTer] = useState([])
    const [qua, setQua] = useState([])
    const [qui, setQui] = useState([])
    const [sex, setSex] = useState([])
    const [sab, setSab] = useState([])
    const [dom, setDom] = useState([])
    const tasksCollectionRef = collection(bd, "tasks")

    //Chamar função quando quiser fetch tasks again
    function fetchTasks() {
        console.log('ok')
    }

    //Pegar todos os tasks do usuário quando o componente monta ou a função é chamada
    useEffect(() => {
        const getTasks = async () => {
            const data = await getDocs(tasksCollectionRef)
            const result = data.docs.map(doc => ({...doc.data(), id: doc.id}))
            const todos = result.filter(user => user.email === currentUser.email)
            setTodos(todos)
        }
        if(currentUser) {
            getTasks()
        }
    }, [fetchTasks])

    useEffect(() => {
        const filterTasks = () => {
            setDom(todos.filter(todo => todo.day === 0))
            setSeg(todos.filter(todo => todo.day === 1))
            setTer(todos.filter(todo => todo.day === 2))
            setQua(todos.filter(todo => todo.day === 3))
            setQui(todos.filter(todo => todo.day === 4))
            setSex(todos.filter(todo => todo.day === 5))
            setSab(todos.filter(todo => todo.day === 6))
        }
        filterTasks()
    }, [todos])

    const value = {
        todos,
        seg,
        ter,
        qua,
        qui,
        sex,
        sab,
        dom,
        fetchTasks
    }

    return (
        <TasksContext.Provider value={value}>
            {props.children}
        </TasksContext.Provider>
    )
}