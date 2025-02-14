# Express.js Server Unresponsiveness with Asynchronous Operations

This repository demonstrates a common issue in Express.js applications: unresponsiveness due to long-running asynchronous operations. The server appears to hang and doesn't respond to requests while waiting for these operations to complete.

The `bug.js` file contains the problematic code, showcasing the issue. The `bugSolution.js` file provides a solution to address the problem and improve responsiveness.

## Problem
The server uses `setTimeout` to simulate a 3-second delay. During this delay, the server doesn't respond to any other requests, leading to unresponsiveness.

## Solution
The solution involves using appropriate techniques to handle asynchronous operations without blocking the main event loop. This is commonly achieved using promises or async/await.