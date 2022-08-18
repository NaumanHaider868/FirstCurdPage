import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'

function EditCars() {

    const [posts, setPosts] = useState([]);
    const [name, setName] = useState("");
    const [company, setCompany] = useState("");
    const [model, setModel] = useState("");
    const [color, setColor] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState("");
    //   const [file, setFile] = useState(null);
    const params = useParams();
    const navigate = useNavigate();

    // function BackPage(){
    //     navigate('/CarsPage')
    // }

    useEffect(() => {
        axios.get(`http://testapi.techenablers.info/api/car/${params.id}`,{
            headers: {
                Authorization: 'Bearer' + localStorage.getItem('access_token'),
            }
        })
            .then(resp => {
                // console.log('resp.data[0].data', resp.data[0].name);
                setPosts(resp.data[0]);
                setName(resp.data[0].name);
                setCompany(resp.data[0].company);
                setModel(resp.data[0].model);
                setColor(resp.data[0].color);
                setPrice(resp.data[0].price);
            })
    }, [])

    const addTask = (e) => {
        e.preventDefault()
        const data = { name, company, model, color, price } // {"name": name }
        console.log(data)
        axios.put(`http://testapi.techenablers.info/api/car/${params.id}`, data,{
            headers: {
                Authorization: 'Bearer' + localStorage.getItem('access_token'),
            }
        })
            .then(function (response) {
                navigate('/CarPage')
                setName("");
                setCompany("");
                setModel("");
                setColor("");
                setPrice("");
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
            <h1>Edit Car</h1>
            <form method="post" style={{ width: "25%" }}>
                <div className="d-flex" style={{ flexDirection: 'column' }}>
                    <label >Enter Name</label><br/>
                    <input type="text" name="name" onChange={(e) => { setName(e.target.value) }} value={name} placeholder="Enter Name" className="form-control"/><br/>
                    <label >Enter Company</label><br/>
                    <input type="text" name="status" onChange={(e) => { setCompany(e.target.value) }} value={company} placeholder="Enter Company" className="form-control"  /><br/>
                    <label >Enter Model</label><br/>
                    <input type="text" name="status" onChange={(e) => { setModel(e.target.value) }} value={model} placeholder="Enter Model" className="form-control" /><br/>
                    <label >Enter Color</label><br/>
                    <input type="text" name="status" onChange={(e) => { setColor(e.target.value) }} value={color} placeholder="Enter Color" className="form-control"  /><br/>
                    <label >Enter Price</label><br/>
                    <input type="text" name="status" onChange={(e) => { setPrice(e.target.value) }} value={price} placeholder="Enter Price" className="form-control"  /><br/>
                    <button onClick={(e) => { addTask(e) }}>Update</button>
                </div>
            </form>
        </div>
    )
}

export default EditCars