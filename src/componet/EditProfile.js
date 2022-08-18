import React, {useState,useEffect} from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import axios from 'axios'
function EditProfile() {

    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [posts, setPosts] = useState([]);
    const navigate = useNavigate();
    // navigate('/Profile');

    const data = {name,email};
    function editProfile(){
        navigate('/Profile');
        axios.put('http://testapi.techenablers.info/api/auth/profile/update?name=Update profile&email=update@profile.com&password=123456&password_confirmation=123456',data,{
        headers:{
            Authorization : 'Bearer' + localStorage.getItem('access_token')
        }
    })
    .then((res)=>{
        setName(res.data.name);
        setEmail(res.data.email);
        setPosts(res.data);
    })
    }
    
  return (
    
    <div>
        <div className="main">
        <div className="sub-main">
          <div>
            
            <div>
            <h1>Edit Profile</h1>  
              <div className='second-input'>
                {/* <img src='./asset/img/email.jpg' alt="email" className="email"/> */}
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Email" className="login-input" />
              </div>
              <div className="second-input">
                {/* <img src='./asset/img/pass.png' alt="pass" className="email"/> */}
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Password" className="login-input" />
              </div>
              
              <div className="login-button">
                <button className='login-btnn' onClick={editProfile}>save</button>
              </div>

              


            </div>
          </div>


        </div>
      </div>
    </div>
  )
}

export default EditProfile