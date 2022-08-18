import React, { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import axios from 'axios'

function PostList() {

    const [Posts, setPosts] = useState([]);
    const navigate = useNavigate();
    const params = useNavigate();

    function editPost(id){
        navigate('/EditPost/' + id)
    }

    function GetPost(){
        axios.get('http://testapi.techenablers.info/api/posts', {
            headers: {
                Authorization: `Bearer` + localStorage.getItem('access_token')
            }
        })
            .then((resp) => {
                // console.log(resp.data)
                setPosts(resp.data.data)
            })
            .catch((error)=>{
                console.log(error)
            })
    }

    useEffect(()=>{
       GetPost()
    },[])

    function deletePost(id){
        fetch(`http://testapi.techenablers.info/api/post/${id}`,{
            headers: {
                Authorization: `Bearer` + localStorage.getItem('access_token')
            },
            method: 'DELETE'
        })
        .then((resp)=>{
            resp.json().then((response)=>{
                console.log(response);
                GetPost()
            })
        })
    }
    return (
        <div>
            <table>

                <tr>

                    <th>Name</th>

                    <th>category</th>

                    <th>Price</th>

                    <th>Edit</th>

                </tr>

                {Posts.map((post, index) => {
                    return (
                        <tr key={index} >

                            <td>{post.title}</td>

                            <td>{post.body}</td>

                            <td><button onClick={()=> editPost(post.id)}>Edit</button></td>

                            <td><button onClick={()=> deletePost(post.id)} >Delete</button></td>

                        </tr>
                    )
                })}


            </table>
            <Link to='/AddPost'><button>Add Product</button></Link>
        </div>
    )
}

export default PostList