import React, { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import axios from 'axios'

function ProductList() {

    const [Products, setProducts] = useState([]);
    const navigate = useNavigate();
    function GetProducts() {
        axios.get('http://testapi.techenablers.info/api/products', {
            headers: {
                Authorization: `Bearer` + localStorage.getItem('access_token')
            }
        })
            .then((res) => {
                console.log(res.data)
                setProducts(res.data[0].data)
            })
    }

    useEffect(() => {
        GetProducts()
    }, []);

    const editProduct = (id) => {
        navigate('/EditProduct/' + id)
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



                {/* <tr>

                    <td></td>

                    <td></td>

                    <td></td>

                    <td>Edit</td>

                </tr> */}
                {Products.map((product, index) => {
                    return (
                        <tr key={index}>

                            <td>{product.name}</td>

                            <td>{product.category}</td>

                            <td>{product.price}</td>

                            <td><button onClick={() => editProduct(product.id)}>Edit</button></td>

                        </tr>
                    )
                })}

            </table>
            <Link to='/AddProduct'><button>Add Product</button></Link>
        </div>
    )
}

export default ProductList