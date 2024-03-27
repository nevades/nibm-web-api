const checkUserExists = "SELECT * FROM users s WHERE s.email = $1";
const checkDistrictExists =
  "SELECT * FROM district s WHERE s.district_name = $1";
const addDistrict = "INSERT INTO district (district_name) VALUES ($1)";
const deleteDistrict = "DELETE FROM district WHERE district_name = ($1)";
const addUser = "INSERT INTO users (email, password, roles) VALUES ($1,$2,$3)";
const deleteUser = "DELETE FROM users WHERE email = ($1)";
const addData =
  "INSERT INTO data (district_id, temperature, humidity, air_pressure, time) VALUES ($1,$2,$3,$4,$5)";
const getData =
  "SELECT DISTINCT ON (district_id) district_id, temperature, humidity, air_pressure, time FROM data ORDER BY district_id, time DESC";

module.exports = {
  checkUserExists,
  checkDistrictExists,
  addDistrict,
  deleteDistrict,
  addUser,
  deleteUser,
  addData,
  getData,
};
