const axios = require("axios");

const API_ENDPOINT = "http://localhost:3000/api/weather/data";

function generateData(c) {
  const temperature = (Math.random() * (40 - 20) + 20).toFixed(2);
  const humidity = (Math.random() * (80 - 40) + 40).toFixed(2);
  const air_pressure = (Math.random() * (1100 - 900) + 900).toFixed(2);
  const district_id = c;
  const now = new Date();
  const time = now.toLocaleString("en-US", {
    timeZone: "Asia/Colombo",
    hour12: false,
  });
  return { district_id, temperature, humidity, air_pressure, time };
}

async function sendData() {
  try {
    var c = 1;
    do {
      const data = generateData(c);
      const response = await axios.post(API_ENDPOINT, data, {
        headers: {
          "x-auth-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlcyI6WyJhZG1pbiIsImVkaXRvciIsInZpZXdlciJdLCJpYXQiOjE3MTEwMjAwNzYsImV4cCI6MTcxMTAyMDk3Nn0.FJ2NTTyLHa7eXkOhCrkM-gRaRurmUCXkjDTPiUBatmg",
        },
      });
      console.log("Data sent successfully:", data);
      c++;
    } while (c <= 25); // Fixed the loop condition
  } catch (error) {
    console.error("Failed to send data:", error.message);
  }
}

setInterval(sendData, 1 * 5 * 1000);
