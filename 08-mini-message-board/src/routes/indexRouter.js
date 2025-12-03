const { Router } = require("express");
const {
  getMessages,
  getForm,
  postForm,
  getDetails,
} = require("../controllers/indexControllers");

const indexRouter = Router();

indexRouter.get("/", getMessages);
indexRouter.get("/new", getForm);
indexRouter.post("/new", postForm);
indexRouter.get("/message/:messageId", getDetails);

module.exports = indexRouter;
