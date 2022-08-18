import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

function AddTodo() {

    const navigate = useNavigate();
    const [name,setName] = useState('');
    const [status,setStatus] = useState('');

    
    async function addTodo(e){
        const formData = new FormData();
        formData.append('name',name);
        formData.append('status',status);
        navigate('/TodoList');
        e.preventDefault();
        axios.post('http://testapi.techenablers.info/api/add_task',formData,{
            headers: {
                Authorization: 'Bearer' + localStorage.getItem('access_token'),
                'Content-type': 'application/json'
            }
        })
        // .then((response)=>{
        //     // response.json();
            
        //     // console.log(response.data);
        // }).catch((error)=>{
        //     console.log(error)
        // })
    }
    return (
        <div>
            
            <form>
                
                <div>
                   
                    <label>Enter Name</label><br />
                    <input type="text" onChange={(e) => setName(e.target.value)} placeholder='Name' /><br />
                    
                    <label>Enter Status</label><br />
                    <input type="text" onChange={(e) => setStatus(e.target.value)} placeholder='Status' /><br />
                    
                    <button onClick={addTodo} >Update</button><br />
               
                </div>
            
            </form>
        
        </div>
    )
}

export default AddTodo