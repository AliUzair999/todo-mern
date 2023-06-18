import { useState, useEffect } from 'react'
import axios from 'axios'

export default function BackendTodo() {
    const [todos, setTodos] = useState([])
    const [input, setInput] = useState("")
    const [refresh, setRefresh] = useState(true)
    const [edit, setEdit] = useState(false)
    const [editId, setEditId] = useState("")



    const addTodo = async () => {
        // console.log(input)
        const addRespone = await axios.post("http://localhost:5000/apis/todo/create", { task: input })
        console.log(addRespone)
        setInput("")
        setRefresh(!refresh)

    }

    const updateTodo = async () => {
        // console.log("update todo working")
        const updRes = await axios.post("http://localhost:5000/apis/todo/update", {_id:editId, task: input})
        console.log(updRes)
        setRefresh(!refresh)
        setEdit(false)
        setInput("")
        
    }

    const deleteTodo = async (id) => {
        // console.log("delete todo working", id)
        const delRes = await axios.post("http://localhost:5000/apis/todo/delete", { _id: id })
        console.log(delRes)
        setRefresh(!refresh)
    }

    useEffect(() => {
        axios.get("http://localhost:5000/apis/todo/read")
            .then((res) => setTodos(res.data.data))
            .catch((err) => console.log(err))
    }, [refresh])

    return <>
        <h1>Uzair's Todo - MERN</h1>
        <input type='text' value={input} onChange={(e) => setInput(e.target.value)}></input>
        {edit
            ? <button onClick={updateTodo}>Update Todo</button>
            : <button onClick={addTodo}>Add Todo</button>
            
        }
        <br/>

        {todos.map((val, ind) => {
            // console.log(ind)
            return <div key={ind}>
                {ind + 1}) {val.task}
                <br />
                <button onClick={() => {
                    setEdit(true)
                    setInput(val.task)
                    setEditId(val._id)
                }}>Edit</button>
                <button onClick={() => deleteTodo(val._id)}>Delete</button>
                <br />


            </div>
        })}
    </>
}