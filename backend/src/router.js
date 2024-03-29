const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
const menuControllers = require("./controllers/menuControllers");
const itemControllers = require("./controllers/itemControllers");
const authControllers = require("./controllers/authControllers");

router.get("/menus", menuControllers.browse);
router.get("/menus/:id", menuControllers.read);
router.put("/menus/:id", menuControllers.edit);
router.post("/menus", menuControllers.add);
router.delete("/menus/:id", menuControllers.destroy);

// Routes authentification
router.post("/login", authControllers.login);
/* ************************************************************************* */

// Import itemControllers module for handling item-related operations

// Route to get a list of items
router.get("/items", itemControllers.browse);

// Route to get a specific item by ID
router.get("/items/:id", itemControllers.read);

// Route to add a new item
router.post("/items", itemControllers.add);

/* ************************************************************************* */
module.exports = router;
