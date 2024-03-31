import axios from "axios";
import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CreateProducts = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");


  let onSubmit = async(e) => {
    e.preventDefault();

    let data = {
      title: title,
      price: price,
      description: description,
      rating:rating,
      category: category,
      image: image,
    };
    console.log(data);

    try {
      let result = await axios({
        url:`http://localhost:8000/products1/`,
        method : "POST",
        data : data ,

      })
     
      setTitle("");
      setPrice("");
      setDescription("");
      setRating("");
      setCategory("");
      setImage("");

      // toast(`product successfully created.`)
      toast.success('🦄 product successfully created.', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
      
    } catch (error) {
      console.log(error);
      toast.error('🦄 Error!! ', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
    }


  };

  return (
    <div>
      <div>
        <br />
        <br />
        <ToastContainer/>
        <form onSubmit={onSubmit}>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            placeholder="Enter product name."
            id="title"
            value={title}
            onChange={(e) => {
              // console.log(e.target.value);
              setTitle(e.target.value);
            }}
          />
          <br />
          <br />
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            placeholder="Eg : 200"
            id="price"
            value={price}
            onChange={(e) => {
              // console.log(e.target.value);
              setPrice(e.target.value);
            }}
          />
          <br />
          <br />

          <label htmlFor="description">Description:</label>
          <input
            type="text"
            placeholder="Eg : 200"
            id="description"
            value={price}
            onChange={(e) => {
              // console.log(e.target.value);
              setDescription(e.target.value);
            }}
          />
          <br />
          <br />
          <label htmlFor="q">Rating:</label>
          <input
            type="rating"
            placeholder="Eg : 1"
            id=""
            value={rating}
            onChange={(e) => {
              // console.log(e.target.value);
              setRating(e.target.value);
            }}
          />
          <br />
          <br />
          <button type="submit">Proceed</button>
        </form>
      </div>
    </div>
  );
};

export default CreateProducts;
