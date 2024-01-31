const tables = require("../tables");

const browse = async (req, res, next) => {
  try {
    const menus = await tables.menu.readAll();
    res.json(menus);
  } catch (err) {
    next(err);
  }
};

const edit = async (req, res, next) => {
  const { name, image, price, description } = req.body;

  const updatedMenu = {
    id: req.params.id,
    name,
    image,
    price,
    description,
  };

  try {
    await tables.menu.update(updatedMenu);
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};

const add = async (req, res, next) => {
  const menu = req.body;

  try {
    const insertId = await tables.menu.create(menu);

    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

const destroy = async (req, res, next) => {
  try {
    await tables.menu.delete(req.params.id);
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  browse,
  edit,
  add,
  destroy,
};
