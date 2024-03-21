const pool = require("../db");
const queries = require("./queries");

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
};
