const axios = require("axios");

const API_ENDPOINT = "http://www.slweather.site/api/weather/data/add";

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
    var token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlcyI6WyJhZG1pbiIsImVkaXRvciIsInZpZXdlciJdLCJpYXQiOjE3MTIzMTE1MTMsImV4cCI6MTcxMjMxNTExM30.QKJvi2wHopPiiE39OZiRw9bt8Eop5-MqJSjuQCeAsPY";

    const requests = [];
    while (c <= 25) {
      const data = generateData(c);
      const requestPromise = axios
        .post(API_ENDPOINT, data, {
          headers: {
            "x-auth-token": token,
          },
        })
        .then(() => {
          console.log("Data sent successfully:", data);
        })
        .catch((error) => {
          console.error("Failed to send data:", error.message);
        });
      requests.push(requestPromise);
      c++;
    }

    await Promise.all(requests);
    console.log("All 25 requests sent successfully.");

    setInterval(async () => {
      c = 1;
      const intervalRequests = [];
      while (c <= 25) {
        const data = generateData(c);
        const requestPromise = axios
          .post(API_ENDPOINT, data, {
            headers: {
              "x-auth-token": token,
            },
          })
          .then(() => {
            console.log("Data sent successfully:", data);
          })
          .catch((error) => {
            console.error("Failed to send data:", error.message);
          });
        intervalRequests.push(requestPromise);
        c++;
      }
      await Promise.all(intervalRequests);
      console.log("25 requests sent successfully in 5-minute interval.");
    }, 5 * 60 * 1000);
  } catch (error) {
    console.error("Failed to send data:", error.message);
  }
}

sendData();
