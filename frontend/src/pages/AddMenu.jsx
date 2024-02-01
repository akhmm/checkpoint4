// import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";

function AddMenu() {
  // const [file, setFile] = useState("default");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/api/menus`, {
        name: e.target.name.value,
        price: e.target.price.value,
        description: e.target.description.value,
      })
      .catch((error) => console.error(error));

    // eslint-disable-next-line no-alert
    alert("Menu is modified!!");
    navigate("/admin");
  };

  return (
    <div className="addmenu-container">
      <Navbar />
      <form onSubmit={handleSubmit}>
        <h1>Adding Menu</h1>
        <label htmlFor="name">Nom du menu</label>
        <input className="input-name" type="text" name="name" required />
        <label htmlFor="price">Prix</label>
        <input
          type="number"
          className="input-price"
          name="price"
          id="price"
          min="5"
          max="100"
          required
        />
        <label htmlFor="description">Description</label>
        <textarea name="description" id="" cols="30" rows="10" required />
        <div className="button-container">
          <button type="submit">Adding Menu</button>
        </div>
      </form>
    </div>
  );
}

export default AddMenu;
