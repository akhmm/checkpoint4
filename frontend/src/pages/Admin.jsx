import { useLoaderData, useRevalidator } from "react-router-dom";
import axios from "axios";

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
      <nav>
        <div className="image-container">
          <img src="images/logo.png" alt="ichizen_logo" />
        </div>
      </nav>
      <div className="body-container">
        <div className="title-button-container">
          <h1>NOS CARTES DU MIDI</h1>
          <button className="button-add" type="button">
            Add menu
          </button>
        </div>
        <div className="cards-container">
          {menus.map((menu) => {
            return (
              <div className="card-container">
                <div className="donburi-image-container">
                  <img src={menu.image} alt="donburi" />
                </div>
                <div className="text-container">
                  <div className="menu-title-price-container">
                    <p className="menu-title">{menu.name}</p>
                    <p className="menu-price">12€</p>
                  </div>
                  <p className="menu-description">{menu.description}</p>
                  <div className="button-container">
                    <button type="button">Modify Menu</button>
                    <button
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
