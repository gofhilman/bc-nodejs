const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");

const server = http.createServer((req, res) => {
  let filePath = "";
  switch (req.url) {
    case "/":
      filePath = "index.html";
      break;
    case "/about":
      filePath = "pages/about.html";
      break;
    case "/contact-me":
      filePath = "pages/contact-me.html";
      break;
    default:
      filePath = "pages/404.html";
      res.statusCode = 404;
  }
  fs.readFile(path.join(__dirname, filePath), "utf8", (err, data) => {
    if(err) {
      res.writeHead(500, {"content-type": "text/plain"});
      res.end("Server error");
    } else {
      res.writeHead(res.statusCode || 200, {"content-type": "text/html"});
      res.end(data);
    }
  })
});

const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
  console.log(`Server running at Port ${PORT}`);
})
