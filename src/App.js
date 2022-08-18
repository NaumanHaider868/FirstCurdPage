import React from "react";
import { Routes, Route } from "react-router-dom"

import Register from "./componet/Register";
import Login from "./componet/Login";
import Profile from "./componet/Profile";
import EditProfile from './componet/EditProfile'

import CarPage from "./componet/CarPage";
import EditCars from "./componet/EditCars";
import CarsAdd from "./componet/CarsAdd";

import TodoList from "./componet/TodoList";
import EditTodo from "./componet/EditTodo";
import AddTodo from "./componet/AddTodo";

import ProductList from "./componet/ProductList";
import EditProduct from "./componet/EditProduct";
import AddProduct from './componet/AddProduct'

import PostList from "./componet/PostList";
import EditPost from "./componet/EditPost";
import AddPost from './componet/AddPost'


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/CarPage" element={<CarPage />} />
        <Route path="/CarsAdd" element={<CarsAdd />} />
        <Route path="EditCars/:id" element={<EditCars />} />
      </Routes>

      {/* <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/TodoList" element={<TodoList />} />
        <Route path="/EditTodo/:id" element={<EditTodo />} />
        <Route path="/AddTodo" element={<AddTodo />} />
      </Routes> */}

      {/* <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/ProductList" element={<ProductList />} />
        <Route path="/EditProduct/:id" element={<EditProduct />} />
        <Route path="/AddProduct" element={<AddProduct />} />
      </Routes> */}

      {/* <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/PostList" element={<PostList />} />
        <Route path="/EditPost/:id" element={<EditPost />} />
        <Route path="/AddPost" element={<AddPost />} />
      </Routes> */}

      {/* <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Profile" element={<Profile/>} />
        <Route path="/EditProfile" element={<EditProfile/>} />
      </Routes> */}
      
      {/* <Register /> */}
      {/* <ProductList/> */}
    </div>
  );
}

export default App;
