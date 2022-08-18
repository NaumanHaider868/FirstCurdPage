import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
function AddPost() {

    const navigate = useNavigate();
    const [title,setTitle] = useState('');
    const [body,setBody] = useState('');
    
    async function addPost(e){
        const formData = new FormData();
        formData.append('title', title);
        formData.append('body',body);
        e.preventDefault();
        navigate('/PostList');
        axios.post('http://testapi.techenablers.info/api/post',formData,{
            headers:{
                Authorization: 'Bearer' + localStorage.getItem('access_token'),
                'Content-type': 'application/json'
            }
        })
        .then((resp)=>{
            console.log(resp)
        })
        .catch((error)=>{
            console.log(error)
        })
    }

    return (
        <div>
            <h1>Add Post</h1>
            <label>Enter Title</label><br />
            <input type="text" placeholder='Title' onChange={(e) => setTitle(e.target.value)} /><br />

            <label>Enter Body</label><br />
            <input type="text" placeholder='Body' onChange={(e) => setBody(e.target.value)} /><br />

            <button onClick={addPost}>Update</button><br />
        </div>
    )
}

export default AddPost