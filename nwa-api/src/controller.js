const pool = require("../db");
const queries = require("./queries");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const auther = (req, res, next) => {
  const token = req.header("x-auth-token");
  if (!token) {
    return res.status(401).send({
      success: false,
      error: "Access denied. No token provided",
    });
  }
  try {
    const decoded = jwt.verify(token, "jwtPrivateKey");
    req.user = decoded;
  } catch (error) {
    return res.status(401).send({
      success: false,
      error: "Token expired",
    });
  }
  next();
};

function admin(req, res, next) {
  if (!req.user.roles.includes("admin"))
    return res.status(403).send({
      success: false,
      error: "Access denied.",
    });
  next();
}

function editor(req, res, next) {
  if (!req.user.roles.includes("editor"))
    return res.status(403).send({
      success: false,
      error: "Access denied.",
    });
  next();
}

function viewer(req, res, next) {
  if (!req.user.roles.includes("viewer"))
    return res.status(403).send({
      success: false,
      error: "Access denied.",
    });
  next();
}

const auth = (req, res) => {
  const { email, password } = req.body;
  pool.query(queries.checkUserExists, [email], (error, results) => {
    if (results.rows.length) {
      const userFromDB = results.rows[0];
      const user = {
        email: userFromDB.email,
        password: userFromDB.password,
        roles: userFromDB.roles,
      };

      bcrypt.compare(password, user.password, (err, valid) => {
        if (valid) {
          const token = jwt.sign(
            {
              id: userFromDB._id,
              roles: user.roles,
            },
            "jwtPrivateKey",
            { expiresIn: "60m" }
          );
          res.status(200).send({
            success: true,
            token: token,
          });
        } else {
          res.status(400).send({
            success: false,
            error: "Invalid email or password.",
          });
        }
      });
    } else {
      res.status(400).send({
        success: false,
        error: "Invalid email or password.",
      });
    }
  });
};

const addDistrict = (req, res) => {
  const { district_name } = req.body;

  if (!district_name || district_name.trim() === "") {
    return res.status(400).send({
      success: false,
      error: "District name is required.",
    });
  }

  pool.query(queries.checkDistrictExists, [district_name], (error, results) => {
    if (results.rows.length) {
      res.status(400).send({
        success: false,
        error: "District already exists.",
      });
    } else {
      pool.query(queries.addDistrict, [district_name], (error, results) => {
        if (error) throw error;
        res.status(200).send({
          success: true,
          error: "District Created Sucessfully.",
        });
      });
    }
  });
};

const deleteDistrict = (req, res) => {
  const { district_name } = req.body;

  if (!district_name || district_name.trim() === "") {
    return res.status(400).send({
      success: false,
      error: "District name is required.",
    });
  }

  pool.query(queries.checkDistrictExists, [district_name], (error, results) => {
    if (results.rows.length) {
      pool.query(queries.deleteDistrict, [district_name], (error, results) => {
        if (error) throw error;
        res.status(200).send({
          success: true,
          error: "District Deleted Sucessfully.",
        });
      });
    } else {
      res.status(400).send({
        success: false,
        error: "District dosen't exists.",
      });
    }
  });
};

const addUser = async (req, res) => {
  const { email, password, roles } = req.body;
  if (!email || !password || !roles || !email.trim() || !password.trim()) {
    return res.status(400).send({
      success: false,
      error: "Email, password, and role are required.",
    });
  }

  try {
    const pwd_hash = await bcrypt.hash(password, 15);
    const results = await pool.query(queries.checkUserExists, [email]);

    if (results.rows.length) {
      return res.status(400).send({
        success: false,
        error: "User already exists.",
      });
    }

    await pool.query(queries.addUser, [email, pwd_hash, JSON.stringify(roles)]);
    res.status(200).send({
      success: true,
      message: "User Created Successfully",
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(400).send({
      success: false,
      error: "An error occurred while adding the user.",
    });
  }
};

const deleteUser = (req, res) => {
  const { email } = req.body;

  pool.query(queries.checkUserExists, [email], (error, results) => {
    if (results.rows.length) {
      pool.query(queries.deleteUser, [email], (error, results) => {
        if (error) throw error;
        res.status(200).send({
          success: true,
          error: "User Deleted Sucessfully.",
        });
      });
    } else {
      res.status(400).send({
        success: false,
        error: "User dosen't exists.",
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
      res.status(200).send("Data entered Sucessfully");
    }
  );
};

const getData = (req, res) => {
  pool.query(queries.getData, (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

const getSpecificData = (req, res) => {
  const { district_id } = req.body;

  pool.query(queries.getSpecificData, [district_id], (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

const getHistoricalData = (req, res) => {
  const { district_id, time } = req.body;

  pool.query(
    queries.getHistoricalData,
    [district_id, time],
    (error, results) => {
      if (error) throw error;
      res.status(200).json(results.rows);
    }
  );
};

const getDistrict = (req, res) => {
  pool.query(queries.getDistrict, (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

module.exports = {
  addDistrict,
  deleteDistrict,
  addUser,
  deleteUser,
  addData,
  getData,
  auth,
  auther,
  admin,
  editor,
  viewer,
  getDistrict,
  getSpecificData,
  getHistoricalData,
};
