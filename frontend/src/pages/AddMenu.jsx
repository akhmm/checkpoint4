import { useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

function addMenu() {
  const [file, setFile] = useState("default");
  const handleSubmit = async (e) => {
    e.preventDefault();
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/api/menus`, {
        name: e.target.name.value,
        price: e.target.price.value,
        description: e.target.description.value,
      })
      .catch((error) => console.error(error));
  };

  const handleUploadImage = (e) => {
    setFile(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <div className="addmenu-container">
      <Navbar />
      <form onSubmit={handleSubmit}>
        <h1>Adding Menu</h1>
        <label htmlFor="name">Nom du menu</label>
        <input className="input-name" type="text" name="name" />
        <label htmlFor="price">Prix</label>
        <input
          type="number"
          className="input-price"
          name="price"
          id="price"
          min="5"
          max="100"
        />
        <label htmlFor="image">Télécharger une image de couverture</label>
        <div className="img-input-container">
          <div className="image-container">
            <img
              src={file === "default" ? "/images/default-image-cp.png" : file}
              alt="default"
            />
          </div>
          <input
            type="file"
            className="input-file"
            name="image"
            accept="image/png, image/jpeg"
            onChange={handleUploadImage}
          />
        </div>
        <label htmlFor="description">Description</label>
        <textarea name="description" id="" cols="30" rows="10" />
        <div className="button-container">
          <button type="submit">Adding Menu</button>
        </div>
      </form>
    </div>
  );
}

export default addMenu;
