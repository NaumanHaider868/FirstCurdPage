import axios from 'axios';
import React, {useState,useEffect} from 'react'
import { Link } from 'react-router-dom';

function Profile() {
    const [posts,setPosts] = useState([]);
    const [name,setName] = useState('');
    const [email,setEmail] = useState();
    
    
        useEffect(()=>{
            axios.get('http://testapi.techenablers.info/api/auth/profile',{
            headers : {
                Authorization : 'Bearer' + localStorage.getItem('access_token')
            }
        })
        .then((resp)=>{
            console.log(resp.data)
            setName(resp.data.name);
            setEmail(resp.data.email);
            setPosts([...posts, resp.data]);
        })
        },[])
    
  return (
        
            
            <div>
            <h1>Profile</h1>
              
                {/* <img src='./asset/img/email.jpg' alt="email" className="email"/> */}
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Email" /><br/>
              
                {/* <img src='./asset/img/pass.png' alt="pass" className="email"/> */}
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Password" /><br/>
                <br/>
              
              
                <button>save</button><br/>
                <Link to='/EditProfile'><button>Edit Profile</button></Link>

              


            </div>
          
  )
}

export default Profile