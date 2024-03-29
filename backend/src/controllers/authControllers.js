const tables = require("../tables");

const login = async (req, res) => {
  const user = await tables.user.getByUsername(req.body.inputUsername); // permet d'appeler un model qui va interroger la BDD pour sortir les infos du users via son adresse e-mail
  const password = req.body.inputPassword; // on récupère le password fourni par le front (via méthode POST via le body)
  if (user?.password === password) {
    // rappel : le ? permet de couvrir le cas de undefined
    // on compare le password de la BDD de notre user avec celui du front
    res.status(200).send(user);
  } else {
    res.status(400).send("incorrect email or password");
  }
};

module.exports = { login };
