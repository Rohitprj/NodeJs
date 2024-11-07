const {
  generateKeyPairSync,
  publicEncrypt,
  privateEncrypt,
  privateDecrypt,
} = require("crypto");

const rsa = () => {
  const { publicKey, privateKey } = generateKeyPairSync("rsa", {
    modulusLength: 2048,
    publicKeyEncoding: {
      type: "spki",
      format: "pem",
    },
    privateKeyEncoding: {
      type: "pkcs8",
      format: "pem",
    },
  });
  //   console.log(publicKey);
  //   console.log(privateKey);

  const password = "Rohit2001";
  console.log(password);

  const encryptedData = publicEncrypt(publicKey, Buffer.from(password));
  console.log("EncryptedData", encryptedData.toString("hex"));

  const decryptedData = privateDecrypt(privateKey, encryptedData);
  console.log("DecryptedData", decryptedData.toString());
};
module.exports = { rsa };
