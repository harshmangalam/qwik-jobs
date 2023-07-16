import cryptoJS from "crypto-js";
async function hashPassword(password: string) {
  return cryptoJS.SHA256(password).toString();
}

async function comparePassword(data: string, encrypted: string) {
  return cryptoJS.SHA256(data).toString() === encrypted;
}

export { hashPassword, comparePassword };
