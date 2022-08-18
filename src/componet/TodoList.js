import React, { useState, useEffect } from 'react'
import {Link, useNavigate } from 'react-router-dom';
import axios from 'axios'
import '../asset/css/style.css';


function TodoList() {

    const [Todos, setTodo] = useState([]);

    const navigate = useNavigate();

    const editTodos = (id) => {
        navigate('/EditTodo/' + id)
    }

    function GetTodos() {
        axios.get('http://testapi.techenablers.info/api/tasks', {
            headers: {
                Authorization: `Bearer` + localStorage.getItem('access_token')
            }
        })
            .then((res) => {
                // console.log(res)
                setTodo(res.data[0])
            })
    }

    useEffect(() => {
        GetTodos()
    }, []);

    function deleteTodos(id) {
        fetch(`http://testapi.techenablers.info/api/delete_task/${id}`, {
            headers: {
                Authorization: `Bearer` + localStorage.getItem('access_token')
            },
            method: 'DELETE'
        }).then((reuslt) => {
            reuslt.json().then((resp) => {
                console.log(resp)
                GetTodos()
            })
        })
    }

    return (
        <div>
            <table>

                <tr>

                    <th>Name</th>

                    <th>Status</th>

                    <th>Edit</th>

                    <th>Delete</th>

                </tr>

                {Todos.map((todo, index) => {
                    return (
                        <tr key={index}>

                            <td>{todo.name}</td>

                            <td>{todo.status}</td>

                            <td><button onClick={() => editTodos(todo.id)}>Edit</button></td>

                            <td><button onClick={() => deleteTodos(todo.id)}>Delete</button></td>

                        </tr>
                    )
                })}


            </table>

            <Link to='/AddTodo'><button className='Add_Cars'>Add Todo</button></Link>
        </div>
    )
}

export default TodoList