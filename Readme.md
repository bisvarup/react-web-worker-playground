# Web worker demo

This project demonstrates the power of web worker. We will be computing the nth prime number where n is 40,000. This takes a significant time for any language and most machines.

There are two situations, in the first case we are doing this work inside a web worker and in the second case we are doing the work inside the main thread. In both the situations open the dev tools to see the logs. Once the prime calculation script starts, the page freezes in the second case, whereas the page stays fine in the firse case with the web worker.
