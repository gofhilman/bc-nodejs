const db = require("../db/queries");

exports.usernameGet = async (req, res) => {
  const usernames = await db.getAllUsernames();
  console.log("Usernames: ", usernames);
  if (req.query.search) {
    const searchedUsernames = await db.searchUsernames(req.query.search);
    console.log("Search result: ", searchedUsernames);
    res.send(`Usernames: ${usernames
      .map((user) => user.username)
      .join(", ")} <br>
  Search result: ${searchedUsernames.map((user) => user.username).join(", ")}`);
  } else {
    res.send(`Usernames: ${usernames.map((user) => user.username).join(", ")}`);
  }
};

exports.usernameFormGet = async (req, res) => {
  res.render("new", {
    title: "Create username",
  });
};

exports.usernameFormPost = async (req, res) => {
  const { username } = req.body;
  await db.insertUsername(username);
  res.redirect("/");
};

exports.usernameDeletionGet = async (req, res) => {
  await db.deleteAllUsernames();
  res.redirect("/");
}
