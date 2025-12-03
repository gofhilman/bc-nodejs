const { argv } = require("node:process");
const { Client } = require("pg");

const now = new Date().toISOString();

const SQL = `
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

CREATE TABLE IF NOT EXISTS messages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  text TEXT,
  "user" VARCHAR (255),
  added TIMESTAMPTZ
);

INSERT INTO messages (text, "user", added)
VALUES ('Hi there!', 'Amando', '${now}'),
  ('Hello world!', 'Charles', '${now}');
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: argv[2],
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
