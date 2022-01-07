import React, { useState } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import { useNavigate,Link } from "react-router-dom";

function Home() {
  const Navigate = useNavigate();
  const link = "http://localhost:5000/addproducts";
  const [productname, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [category, setCategory] = useState("");
  const [products, setProducts] = useState([]);
  const newProducts = { productname, price, quantity, category };

  const addProducts = (e) => {
    e.preventDefault();
    axios.post(link, newProducts);
    setProductName("");
    setPrice("");
    setQuantity("");
    setCategory("");
  };
  const viewProducts = () => {
    axios.get("http://localhost:5000/addproducts").then((res) => {
     
    setProducts(res.data);
    });
  };

  return (
    <div>
      <h1>Add Product</h1>
      <form onSubmit={addProducts}>
        <label htmlFor="">Name</label>
        <input type="text" onChange={(e) => setProductName(e.target.value)} />
        <br />
        <label htmlFor="">Price</label>
        <input type="number" onChange={(e) => setPrice(e.target.value)} />
        <br />
        <label htmlFor="">quantiity</label>
        <input type="number" onChange={(e) => setQuantity(e.target.value)} />
        <br />
        <label htmlFor="">Category</label>
        <input type="text" onChange={(e) => setCategory(e.target.value)} />
        <br />
        <input type="submit" value="Add Produnts" />
        <br />
      </form>

      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Category</th>
          </tr>
        </thead>
        {products.map((data) => (
          <>
            <tbody>
              <tr>
                <td>{data.productname}</td>
                <td>{data.price}</td>
                <td>{data.quantity}</td>
                <td>{data.category}</td>
              </tr>
            </tbody>
          </>
        ))}
      </Table>

      <button onClick={viewProducts}>
        View Products
       
      </button>
    </div>
  );
}

export default Home;
