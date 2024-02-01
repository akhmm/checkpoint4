import { useLoaderData } from "react-router-dom";
import axios from "axios";

function Home() {
  const menus = useLoaderData();
  return (
    <div className="home-container">
      <nav>
        <div className="nav-home-image-container">
          <img src="/images/logo.png" alt="ichizen_logo" />
        </div>
      </nav>
      <div className="image-text-container">
        <div className="home-image-container">
          <img src="/images/home.png" alt="ichizen-bar" />
        </div>
        <p>ICHIZEN Brassérie japonais</p>
      </div>
      <div className="menu-midi">
        <h1>NOTRE CARTE DU MIDI</h1>
        <p>
          Nous vous proposons les donburi japonais.Le Lorem Ipsum est simplement
          du faux texte employé dans la composition et la mise en page avant
          impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie
          depuis les années 1500{" "}
        </p>
        <div>
          <button type="button" className="button-see-menu">
            Voir la carte
          </button>
        </div>
      </div>
      <div className="content-container">
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
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="menu-soir-container">
        <div className="menu-soir-image-container">
          <img src="/images/menu-soir.png" alt="dinner-menu" />
        </div>
        <div className="menu-soir-right-container">
          <h3>NOS CARTE DE SOIR</h3>
          <p>
            Nous vous proposons les donburi japonais.Le Lorem Ipsum est
            simplement du faux texte employé dans la composition et la mise en
            page avant impression. Le Lorem Ipsum est le faux texte standard de
            l'imprimerie depuis les années 1500 Nous vous proposons les donburi
            japonais.Le Lorem Ipsum est simplement du faux texte employé dans la
            composition et la mise en page avant impression. Le Lorem Ipsum est
            le faux texte standard de l'imprimerie depuis les années 1500{" "}
          </p>
          <div>
            <button type="button" className="button-see-menu">
              Voir la carte
            </button>
          </div>
        </div>
      </div>
      <div className="delivery-container">
        <div className="delivery-image-container">
          <img src="images/delivery.png" alt="delivery" />
        </div>
        <p>Commande avec click and collect et livraison</p>
        <button type="button" className="button-see-menu">
          Voir la carte
        </button>
      </div>
    </div>
  );
}

export const loaderHome = async () => {
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

export default Home;
