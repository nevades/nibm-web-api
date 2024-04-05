const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  host: "34.134.211.67",
  database: "weather",
  password: "9898",
  port: 5432,
});

module.exports = pool;
