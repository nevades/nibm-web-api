const bcrypt = require("bcrypt");

(async () => {
  console.log(await bcrypt.hash("123", 15));
})();
