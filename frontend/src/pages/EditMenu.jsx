// import { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";

function EditMenu() {
  const menu = useLoaderData();
  const navigate = useNavigate();
  // const [file, setFile] = useState("default");
  const handleSubmit = async (e) => {
    e.preventDefault();
    axios
      .put(`${import.meta.env.VITE_BACKEND_URL}/api/menus/${menu.id}`, {
        name: e.target.name.value,
        price: e.target.price.value,
        description: e.target.description.value,
      })
      .catch((error) => console.error(error));
    // eslint-disable-next-line no-alert
    alert("Menu is modified!!");
    navigate("/admin");
  };
  /*
  const handleUploadImage = (e) => {
    setFile(URL.createObjectURL(e.target.files[0]));
  };
  */

  return (
    <div className="editmenu-container">
      <Navbar />
      <form onSubmit={handleSubmit}>
        <h1>Editing Menu</h1>
        <label htmlFor="name">Nom du menu</label>
        <input
          className="input-name"
          type="text"
          name="name"
          defaultValue={menu.name}
          required
        />
        <label htmlFor="price">Prix</label>
        <input
          type="number"
          className="input-price"
          name="price"
          id="price"
          min="5"
          max="100"
          defaultValue={menu.price}
          required
        />
        <label htmlFor="description">Description</label>
        <textarea
          name="description"
          id=""
          cols="30"
          rows="10"
          defaultValue={menu.description}
          required
        />
        <div className="button-container">
          <button type="submit">Modify Menu</button>
        </div>
      </form>
    </div>
  );
}

export const loaderEdit = async ({ params }) => {
  try {
    const menu = await axios.get(
      `${import.meta.env.VITE_BACKEND_URL}/api/menus/${params.id}`
    );
    return menu.data;
  } catch (e) {
    console.error(e);
    return [];
  }
};
export default EditMenu;
