const crypto = require("crypto");

function encryptData(name, email, password, pNo) {
  const cipher = crypto.createCipheriv("aes-256-cbc", key, iv);
}
