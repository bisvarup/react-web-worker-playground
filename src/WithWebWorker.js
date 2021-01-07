import { useEffect } from "react";
import Worker from "./prime.worker";
import { LONG_TEXT } from "./Constants";

export default function WithWebWorker() {
  useEffect(() => {
    const myWorker = new Worker();
    myWorker.postMessage("start");
    myWorker.onmessage = (e) => {
      console.log("Time Taken", e.data);
    };
  }, []);
  return LONG_TEXT;
}
