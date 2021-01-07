import React, { useEffect } from "react";
import { nthPrime } from "./utils/prime";
import { LONG_TEXT } from "./Constants";

export default function WithoutWebWorker() {
  useEffect(() => {
    setTimeout(() => {
      console.log("::START::");
      const t0 = performance.now();
      nthPrime(40000);
      const t1 = performance.now();
      const diff = Math.round(t1 - t0);
      console.log("diff " + diff);
    }, 2000);
  }, []);

  return LONG_TEXT;
}
