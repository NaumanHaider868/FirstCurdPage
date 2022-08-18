import React, { useState, useEffect } from 'react'
import '../asset/css/style.css';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function CarPage() {

    const navigate = useNavigate();
    const editCar = (id) => {
        navigate('/EditCars/' + id)
    }
    const [cars, setCars] = useState([]);

    function GetCar() {
        axios.get('http://testapi.techenablers.info/api/car', {
            headers: {
                Authorization: `Bearer` + localStorage.getItem('access_token')
            }
        })
            .then((response) => {
                // localStorage.setItem('access_token', response.data.access_token);
                setCars(response.data[0].data);
                // console.log(objectData[0].data);
            })
    }

    useEffect(() => {

        GetCar()

    }, []);

    function deleteCars(id) {
        fetch(`http://testapi.techenablers.info/api/car/${id}`, {
            headers: {
                Authorization: `Bearer` + localStorage.getItem('access_token')
            },
            method: 'DELETE'
        }).then((reuslt) => {
            reuslt.json().then((resp) => {
                console.log(resp)
                GetCar()
            })
        })
    }

    return (
        <div>

            <table>

                <tr>

                    <th>Name</th>

                    <th>Company</th>

                    {/* <th>Status</th> */}

                    <th>Modal</th>

                    {/* <th>Image</th> */}

                    <th>color</th>

                    <th>Price</th>

                    <th>Image</th>

                    <th>Edit</th>

                    <th>Delete</th>

                </tr>
                {cars.map((car, index) => {
                    return (
                        <tr key={index}>

                            <td>{car.name}</td>

                            <td>{car.company}</td>

                            {/* <td>{car.status}</td> */}

                            <td>{car.model}</td>

                            {/* <td><img src='{car.image}'/></td> */}

                            <td>{car.color}</td>

                            <td>{car.price}</td>

                            <td><img src={car.image} /></td>

                            {/* <td><button>Edit</button></td> */}
                            <td><button onClick={() => editCar(car.id)}>Edit</button></td>

                            <td><button onClick={() => deleteCars(car.id)}>Delete</button></td>

                        </tr>
                    )
                })}

            </table>
            <Link to='/CarsAdd' className='Add_Cars'>Click to Add Car</Link>
        </div>
    )
}

export default CarPage