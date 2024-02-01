import { useLoaderData, useRevalidator, Link } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";

function Admin() {
  const revalidator = useRevalidator();
  const handleDeleteMenu = async (id) => {
    axios
      .delete(`${import.meta.env.VITE_BACKEND_URL}/api/menus/${id}`)
      .then(() => {
        revalidator.revalidate();
      });
  };

  const menus = useLoaderData();
  return (
    <div className="admin-container">
      <Navbar />
      <div className="body-container">
        <div className="title-button-container">
          <h1>NOS CARTES DU MIDI</h1>
          <Link to="/add-menu" className="button-add">
            <p>Ajouter menu</p>
          </Link>
        </div>
        <div className="cards-container">
          {menus.map((menu) => {
            return (
              <div className="card-container" key={menu.id}>
                <div className="donburi-image-container">
                  <img
                    src={
                      menu.image === null ? "/images/donburi.png" : menu.image
                    }
                    alt="donburi"
                  />
                </div>
                <div className="text-container">
                  <div className="menu-title-price-container">
                    <p className="menu-title">{menu.name}</p>
                    <p className="menu-price">{menu.price}€</p>
                  </div>
                  <p className="menu-description">{menu.description}</p>
                  <div className="button-container">
                    <Link
                      to={`/edit-menu/${menu.id}`}
                      className="modify-delete-button modify-button"
                    >
                      <p>Modify Menu</p>
                    </Link>
                    <button
                      className="modify-delete-button"
                      type="button"
                      onClick={() => handleDeleteMenu(menu.id)}
                    >
                      Delete Menu
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export const loaderAdmin = async () => {
  try {
    const menus = await axios.get(
      `${import.meta.env.VITE_BACKEND_URL}/api/menus`
    );
    return menus.data;
  } catch (e) {
    console.error(e);
    return [];
  }
};

export default Admin;
