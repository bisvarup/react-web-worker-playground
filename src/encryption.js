import CryptoJS from "crypto-js";

const BYTE_ARRAY = [
  118,
  97,
  114,
  121,
  115,
  66,
  121,
  116,
  101,
  115,
  73,
  110,
  105,
  116,
  86,
  82,
];
const KEY_SIZE_RSA = 2048;

const generateKey = (keyLength = 16) => {
  const chars =
    "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz*&-%/!?*+=()";
  let mutableRandomString = "";
  let mutableRandomNumber;
  Array.apply(null, { length: keyLength }).map(() => {
    mutableRandomNumber = Math.floor(Math.random() * chars.length);
    mutableRandomString += chars.substring(
      mutableRandomNumber,
      mutableRandomNumber + 1
    );
  });
  return mutableRandomString;
};

const encryptionAES = (data, key) => {
  const ByteArray = (arr) => {
    let mutableWordList = [];
    Array.apply(null, { length: Math.ceil(arr.length / 4) }).map(
      (val, index) => {
        const i = index * 4;
        mutableWordList.push(
          (arr[i] << 24) |
            (arr[i + 1] << 16) |
            (arr[i + 2] << 8) |
            (arr[i + 3] << 0)
        );
      }
    );
    return CryptoJS.lib.WordArray.create(mutableWordList, arr.length);
  };

  const wordArrayKey = CryptoJS.enc.Utf8.parse(key);
  const iv = ByteArray(BYTE_ARRAY);
  const encryptedAES = CryptoJS.AES.encrypt(data, wordArrayKey, {
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
    iv,
  });
  return encryptedAES.toString();
};

const worker = () => {
  onmessage = function (oEvent) {
    import("crypto-js").then(console.log);
    console.log("Got a message", oEvent.data);
    for (let i = 0; i < 100; i++) {
      const encData = encryptionAES("Some Data", generateKey());
    }
    self.postMessage("done");
  };
};

export { generateKey, encryptionAES, worker };
export default worker;
