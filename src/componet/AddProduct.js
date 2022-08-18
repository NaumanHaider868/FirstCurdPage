import React,{useState} from 'react'
import { useNavigate} from 'react-router-dom'
import axios from 'axios'

function AddProduct() {

        const [name,setName] = useState('');
        const [category,setCategory] = useState('');
        const [price,setPrice] = useState();
        const navigate = useNavigate();

        async function addProduct(e){
            const formData = new FormData();
            formData.append('name',name);
            formData.append('category',category);
            formData.append('price',price);
            navigate('/ProductList')
            e.preventDefault();
            axios.post('http://testapi.techenablers.info/api/add_product', formData,{
                headers: {
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
        <h1>Add Product</h1>
        <form>
                
                <div>
                   
                    <label>Enter Name</label><br />
                    <input type="text" placeholder='Name' onChange={(e)=> setName(e.target.value)} /><br />
                    
                    <label>Enter Category</label><br />
                    <input type="text" placeholder='Category' onChange={(e)=> setCategory(e.target.value)} /><br />

                    <label>Enter Price</label><br />
                    <input type="text" placeholder='Price' onChange={(e)=> setPrice(e.target.value)} /><br />
                    
                    <button onClick={addProduct}>Update</button><br />
               
                </div>
            
            </form>
    </div>
  )
}

export default AddProduct