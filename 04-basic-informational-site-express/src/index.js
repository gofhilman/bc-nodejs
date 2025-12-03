const fs = require("node:fs");
const path = require("node:path");
const express = require("express");
const app = express();

const handleRequest = (res, filePath, statusCode = 200) => {
  fs.readFile(path.resolve(__dirname, filePath), "utf8", (err, data) => {
    if (err) {
      res.status(500).set("content-type", "text/plain").send("Server error");
    } else {
      res.status(statusCode).set("content-type", "text/html").send(data);
    }
  });
};

app.get("/", (_, res) => handleRequest(res, "index.html"));
app.get("/about", (_, res) => handleRequest(res, "pages/about.html"));
app.get("/contact-me", (_, res) => handleRequest(res, "pages/contact-me.html"));
app.get("/*splat", (_, res) => handleRequest(res, "pages/404.html", 404));

const PORT = process.env.PORT || 8080;
app.listen(PORT, (error) => {
  if (error) throw error;
  console.log(`Server running at Port ${PORT}`);
});
