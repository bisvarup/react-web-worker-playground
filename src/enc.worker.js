import CryptoJS from "crypto-js";

const isPrime = function isPrime(num) {
  if (num <= 1) return true;

  for (let i = 2; i < num; i += 1) {
    if (num % i == 0) return false;
  }

  return true;
};

const nthPrime = function nthPrime(n) {
  let ans;
  for (let i = 1; ; i += 1) {
    if (isPrime(i) === true) {
      ans = i;
      n--;
    }
    if (n === 0) return ans;
  }
};

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

onmessage = function (oEvent) {
  console.log("Initiate prime numbers");
  const t0 = performance.now();
  nthPrime(40000);
  const t1 = performance.now();
  const diff = Math.round(t1 - t0);
  postMessage(diff);
};
