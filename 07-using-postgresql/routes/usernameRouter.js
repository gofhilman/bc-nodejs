const { Router } = require("express");
const {
  usernameGet,
  usernameFormGet,
  usernameFormPost,
  usernameDeletionGet,
} = require("../controllers/usernameController");
const usernameRouter = Router();

usernameRouter.get("/", usernameGet);
usernameRouter.get("/new", usernameFormGet);
usernameRouter.post("/new", usernameFormPost);
usernameRouter.get("/delete", usernameDeletionGet);

module.exports = usernameRouter;
