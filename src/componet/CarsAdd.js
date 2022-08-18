import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function CarsAdd() {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [company, setCompany] = useState("");
    const [model, setModel] = useState("");
    const [color, setColor] = useState("");
    const [image,setImage] = useState(null);
    const [price, setPrice] = useState();

    async function addCar(e){
        const formData = new FormData();
        formData.append('name',name);
        formData.append('company',company);
        formData.append('model',model);
        formData.append('color',color);
        formData.append('image',image);
        formData.append('price',price);

        // let result = await fetch('http://testapi.techenablers.info/api/car',{
        //     method: 'POST',
        //     body: formData
        // }).then((e)=>{
        //     e.json();
        //     console.log(result)
        // })
        // .catch(function (error) {
        //     console.log(error);
        // });
        e.preventDefault();
        axios.post('http://testapi.techenablers.info/api/car',formData,{
            headers: {
                Authorization: 'Bearer' + localStorage.getItem('access_token'),
                'Content-type': 'application/json'
            }
        }).then((response)=>{
            response.json();
            console.log(response.data);
            navigate('/CarPage')
        }).catch((error)=>{
            console.log(error)
        })
        // fetch(
		// 	'http://testapi.techenablers.info/api/car',
		// 	{
		// 		method: 'POST',
		// 		body: formData
		// 	}
		// )
		// 	.then((response) => response.json())
		// 	.then((result) => {
		// 		console.log('Success:', result);
        //         navigate('/CarPage')
		// 	})
		// 	.catch((error) => {
		// 		console.error('Error:', error);
		// 	});
        
    }

    return (
        
        <div>
            <form>
                <div>
                    <label>Enter Name</label><br/>
                    <input type="text" onChange={(e)=>setName(e.target.value)} placeholder='Name' /><br/>
                    <label>Enter Company</label><br/>
                    <input type="text" onChange={(e)=>setCompany(e.target.value)} placeholder='Company'  /><br/>
                    <label>Enter Model</label><br/>
                    <input type="text" onChange={(e)=>setModel(e.target.value)} placeholder='Modal' /><br/>
                    <label>Enter Image</label><br/>
                    <input type="file" accept="image/*" multiple={true} onChange={(e)=>setImage(e.target.files[0])} placeholder='img' /><br/>
                    <label>Enter Color</label><br/>
                    <input type="text" onChange={(e)=>setColor(e.target.value)} placeholder='Color'/><br/>
                    <label>Enter Price</label><br/>
                    <input type="text" onChange={(e)=>setPrice(e.target.value)} placeholder='Price' /><br/>
                    
                    <button onClick={addCar} >Update</button><br/>
                </div>
            </form>
        </div>
    )
}

 export default CarsAdd

// import React,{useState} from 'react'

// function CarsAdd() {
//     const [selectedImage, setSelectedImage] = useState(null);
//   return (
//     <div>
//         <h1>Upload and Display Image usign React Hook's</h1>
//       {/* {selectedImage && ( */}
//         {/* // <div> */}
//         {/* <s alt="not fount" width={"250px"} src={URL.createObjectURL(selectedImage)} /> */}
//         {/* <br /> */}
//         {/* <button onClick={()=>setSelectedImage(null)}>Remove</button> */}
//         {/* </div> */}
//     {/* //   )} */}
//       <br />
     
//       <br /> 
    //   <input
    //     type="file"
    //     name="myImage"
    //     onChange={(event) => {
    //     //   console.log(event.target.files[0]);
    //       setSelectedImage(event.target.files[0]);
    //     }}
    //   />
//     </div>
//   )
// }

// export default CarsAdd