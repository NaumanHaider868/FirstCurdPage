import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';

function EditTodo() {
    const [posts, setPosts] = useState([]);
    const [name, setName] = useState('');
    const [status, setStatus] = useState('')

    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://testapi.techenablers.info/api/show_task/${params.id}`, {
            headers: {
                Authorization: 'Bearer' + localStorage.getItem('access_token'),
            }
        })
            .then(resp => {
                // console.log('resp.data[0].data', resp.data[0].name);
                setPosts(resp.data[0]);
                setName(resp.data[0].name);
                setStatus(resp.data[0].status);

            })
    }, [])

    const addTask = (e) => {
        e.preventDefault()
        const data = { name, status } // {"name": name }
        // console.log(data)
        axios.put(`http://testapi.techenablers.info/api/update_task/${params.id}`, data, {
            headers: {
                Authorization: 'Bearer' + localStorage.getItem('access_token'),
            }
        })
            .then(function (response) {
                navigate('/TodoList')
                setName("");
                setStatus("");
                setPosts([...posts, response.data[0]]);

            })
            // .then(function (resp){
            //     navigate('/CarPage')
            // })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <div>
            <h1>Edit Todo</h1>
            <form method="post" style={{ width: "25%" }}>
                <div className="d-flex" style={{ flexDirection: 'column' }}>
                    <label >Enter Name</label><br />
                    <input type="text" name="name" onChange={(e) => { setName(e.target.value) }} value={name} placeholder="Enter Name" className="form-control" /><br />
                    <label >Enter Status</label><br />
                    <input type="text" name="status" onChange={(e) => { setStatus(e.target.value) }} value={status} placeholder="Enter Company" className="form-control" /><br />
                    <button onClick={(e) => { addTask(e) }}>Update</button>
                </div>
            </form>
        </div>
    )
}

export default EditTodo