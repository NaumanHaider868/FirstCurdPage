import React,{useState,useEffect} from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import axios from 'axios'


function EditPost() {

    const [posts,setPost] = useState();
    const [title,setTitle] = useState('');
    const [body,setBody] = useState('');

    const navigate = useNavigate();
    const params = useParams();

    useEffect(()=>{
        axios.get(`http://testapi.techenablers.info/api/post/${params.id}`,{
            headers: {
                Authorization: 'Bearer' + localStorage.getItem('access_token'),
            }
        })
        .then((resp)=>{
            setPost(resp.data.data);
            setTitle(resp.data.data.title);
            setBody(resp.data.data.body)
        })
        .catch((error)=>{
            console.log(error)
        })
    },[])

    const addPost= (e)=> {
        e.preventDefault();
        const data = {title,body}
        // console.log(data);
        axios.put(`http://testapi.techenablers.info/api/post/${params.id}`, data,{
            headers:{
                Authorization : 'Bearer' + localStorage.getItem('access_token')
            }
        })
        .then((response)=>{
            navigate('/PostList');
            setTitle('');
            setBody('');
            setPost([...posts, response.data.data])
        })
        .catch((error)=>{
            console.log(error)
        })
    }

    return (
    <div>
        <h1>Edit Post</h1>
        <form method="post" style={{ width: "25%" }}>
                <div className="d-flex" style={{ flexDirection: 'column' }}>
                    <label >Enter Title</label><br/>
                    <input type="text" name="title" onChange={(e) => { setTitle(e.target.value) }} value={title} placeholder="Enter Name" className="form-control"/><br/>
                    <label >Enter Body</label><br/>
                    <input type="text" name="body" onChange={(e) => { setBody(e.target.value) }} value={body} placeholder="Enter Company" className="form-control"  /><br/>
                    <button onClick={(e) => { addPost(e) }}>Update</button>
                </div>
            </form>
    </div>
  )
}

export default EditPost