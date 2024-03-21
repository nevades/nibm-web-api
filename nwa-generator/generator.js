const axios = require("axios");

const API_ENDPOINT = "http://localhost:3000/api/v1/weather/data";

function generateData() {
  const temperature = (Math.random() * (40 - 20) + 20).toFixed(2);
  const humidity = (Math.random() * (80 - 40) + 40).toFixed(2);
  const air_pressure = (Math.random() * (1100 - 900) + 900).toFixed(2);
  const district_id = 1;
  const now = new Date();
  const time = now.toLocaleString("en-US", {
    timeZone: "Asia/Colombo",
    hour12: false,
  });
  return { district_id, temperature, humidity, air_pressure, time };
}

async function sendData() {
  try {
    const data = generateData();
    const response = await axios.post(API_ENDPOINT, data);
    console.log("Data sent successfully:", data);
  } catch (error) {
    console.error("Failed to send data:", error.message);
  }
}

setInterval(sendData, 1 * 5 * 1000);
