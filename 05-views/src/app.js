const path = require("node:path");
const express = require("express");
const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const assetsPath = path.join(__dirname, "..", "public");
app.use(express.static(assetsPath));

const links = [
  { href: "/", text: "Home" },
  { href: "about", text: "About" },
];
const users = ["Rose", "Cake", "Biff"];

app.get("/", (req, res) => {
  res.render("index", { links: links, users: users });
});
app.get("/about", (_, res) => {
  res.render("about", { links: links });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, (error) => {
  if (error) throw error;
  console.log(`Server running at Port ${PORT}`);
});
