import Navbar from "../components/Navbar";

function addMenu() {
  const handleSubmit = () => {
    console.info("jesuisla");
  };
  return (
    <div className="addmenu-container">
      <Navbar />
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nom du menu</label>
        <input type="text" name="name" />
        <label htmlFor="image">Télécharger une image de couverture</label>
        <input type="file" name="image" />
        <label htmlFor="price">Prix</label>
        <input type="number" name="price" id="price" min="5" max="100" />
        <label htmlFor="description">Description</label>
        <textarea name="description" id="" cols="30" rows="10" />
        <button type="submit">Adding Menu</button>
      </form>
    </div>
  );
}

export default addMenu;
