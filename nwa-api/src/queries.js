const addDistrict = "INSERT INTO district (district_name) VALUES ($1)";
const addData =
  "INSERT INTO data (district_id, temperature, humidity, air_pressure, time) VALUES ($1,$2,$3,$4,$5)";
const getData =
  "SELECT DISTINCT ON (district_id) district_id, temperature, humidity, air_pressure, time FROM data ORDER BY district_id, time DESC";
const checkDistrictExists =
  "SELECT * FROM district s where s.district_name = $1";

module.exports = {
  addDistrict,
  addData,
  getData,
  checkDistrictExists,
};
