import React,{ useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

function EditProduct() {

    const [posts, setPosts] = useState([]);
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState();
    

    const navigate = useNavigate();
    const params = useParams();

    useEffect(() => {
        axios.get(`http://testapi.techenablers.info/api/show_product/${params.id}`, {
            headers: {
                Authorization: 'Bearer' + localStorage.getItem('access_token')
            }
        })
            .then(resp => {
                // console.log('resp.data[0].data', resp.data[0].name);
                setPosts(resp.data[0]);
                setName(resp.data[0].name);
                setPrice(resp.data[0].price);
                setCategory(resp.data[0].category);

            })
    }, [])

    const addTask = (e) => {
        e.preventDefault()
        const data = { name, category, price } // {"name": name }
        // console.log(data)
        axios.put(`http://testapi.techenablers.info/api/update_product/${params.id}`, data, {
            headers: {
                Authorization: 'Bearer' + localStorage.getItem('access_token'),
            }
        })
            .then(function (response) {
                navigate('/ProductList')
                setName("");
                setCategory('');
                setPrice();
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
                <h1>Edit Product</h1>
                <form method="post" style={{ width: "25%" }}>
                    <div className="d-flex" style={{ flexDirection: 'column' }}>
                        <label >Enter Name</label><br />
                        <input type="text" name="name" onChange={(e) => { setName(e.target.value) }} value={name} placeholder="Enter Name" className="form-control" /><br />
                        <label >Enter Category</label><br />
                        <input type="text" name="status" onChange={(e) => { setCategory(e.target.value) }} value={category} placeholder="Enter Company" className="form-control" /><br />
                        <label >Enter Price</label><br />
                        <input type="text" name="status" onChange={(e) => { setPrice(e.target.value) }} value={price} placeholder="Enter Company" className="form-control" /><br />
                        <button onClick={(e) => { addTask(e) }}>Update</button>
                    </div>
                </form>
            </div>
        )
    }

    export default EditProduct