const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "weather",
  password: "9898",
  port: 5432,
});

module.exports = pool;