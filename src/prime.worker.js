import { nthPrime } from "./utils/prime";

onmessage = function (oEvent) {
  console.log("::Start Prime Calculation from worker::");
  const t0 = performance.now();
  nthPrime(40000);
  const t1 = performance.now();
  const diff = Math.round(t1 - t0);
  console.log("::Stop Prime Calculation from worker::");

  postMessage(diff);
};
