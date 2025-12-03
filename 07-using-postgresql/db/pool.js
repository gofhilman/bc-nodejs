const { Pool } = require("pg");

// All of the following properties should be read from environment variables
// We're hardcoding them here for simplicity
module.exports = new Pool({
  host: process.env.POOL_HOST,
  user: process.env.POOL_USER,
  database: process.env.POOL_DATABASE,
  password: process.env.POOL_PASSWORD,
  port: +process.env.POOL_PORT,
});
