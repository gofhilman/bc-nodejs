const { body, validationResult } = require("express-validator");
const db = require("../db/queries");
const formatTime = require("../utils/format-time");

const validateMessage = [
  body("message")
    .isLength({ min: 1, max: 200 })
    .withMessage("Message must be between 1 and 200 characters"),
  body("author")
    .trim()
    .isLength({ min: 1, max: 20 })
    .withMessage("Name must be between 1 and 20 characters"),
];

async function getMessages(_, res) {
  const messages = await db.getAllMessages();
  res.render("main-layout", {
    formatTime,
    messages,
    page: "index",
    title: "Home",
  });
}

async function getForm(_, res) {
  res.render("main-layout", { page: "form", title: "New message" });
}

const postForm = [
  validateMessage,
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).render("main-layout", {
        page: "form",
        title: "New message",
        errors: errors.array(),
      });
    }
    await db.insertMessage({
      text: req.body.message,
      user: req.body.author,
      added: new Date().toISOString(),
    });
    res.redirect("/");
  },
];

async function getDetails(req, res) {
  const message = await db.getMessage(req.params.messageId);
  res.render("main-layout", {
    formatTime,
    message,
    page: "message",
    title: "Message details",
  });
}

module.exports = { getMessages, getForm, postForm, getDetails };
