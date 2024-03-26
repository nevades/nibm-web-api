const pool = require("../db");
const queries = require("./queries");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const auther = (req, res, next) => {
  const token = req.header("x-auth-token");
  if (!token)
    return res.status(401).send({
      ok: false,
      error: "Access denied. No token provided",
    });

  try {
    const decoded = jwt.verify(token, "jwtPrivateKey");
    req.user = decoded;
  } catch (error) {
    return res.status(401).send({
      ok: false,
      error: "Token expired",
    });
  }

  next();
};

function admin(req, res, next) {
  if (!req.user.roles.includes("admin"))
    return res.status(403).send({
      ok: false,
      error: "Access denied.",
    });

  next();
}

function editor(req, res, next) {
  if (!req.user.roles.includes("editor"))
    return res.status(403).send({
      ok: false,
      error: "Access denied.",
    });

  next();
}

function viewer(req, res, next) {
  if (!req.user.roles.includes("viewer"))
    return res.status(403).send({
      ok: false,
      error: "Access denied.",
    });

  next();
}

const auth = async (req, res) => {
  // Dummy data
  const users = [
    {
      email: "nevanjith@gmail.com",
      password: "$2b$15$AJmvWy/DJ.p417F9/X7D7uUTgGVCEkVF63Hh2Ct7K0yE9Zt1JleAW",
      roles: ["admin", "editor", "viewer"],
    },
  ];

  // Get to user from the database, if the user is not there return error
  let user = users.find((u) => u.email === req.body.email);
  if (!user) throw new Error("Invalid email or password.");

  // Compare the password with the password in the database
  const valid = await bcrypt.compare(req.body.password, user.password);
  if (!valid) throw new Error("Invalid email or password.");

  const token = jwt.sign(
    {
      id: user._id,
      roles: user.roles,
    },
    "jwtPrivateKey",
    { expiresIn: "15m" }
  );

  res.send({
    ok: true,
    token: token,
  });
};

const addDistrict = (req, res) => {
  const { district_name } = req.body;

  pool.query(queries.checkDistrictExists, [district_name], (error, results) => {
    if (results.rows.length) {
      res.send("District already exists.");
    } else {
      pool.query(queries.addDistrict, [district_name], (error, results) => {
        if (error) throw error;
        res.status(201).send("District Created Sucessfully");
      });
    }
  });
};

const addData = (req, res) => {
  const { district_id, temperature, humidity, air_pressure, time } = req.body;

  pool.query(
    queries.addData,
    [district_id, temperature, humidity, air_pressure, time],
    (error, results) => {
      if (error) throw error;
      res.status(201).send("Data entered Sucessfully");
    }
  );
};

const getData = (req, res) => {
  pool.query(queries.getData, (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

module.exports = {
  addDistrict,
  addData,
  getData,
  auth,
  auther,
  admin,
  editor,
  viewer,
};
