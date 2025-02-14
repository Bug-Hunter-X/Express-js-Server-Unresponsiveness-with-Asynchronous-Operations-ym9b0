const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // Asynchronous operation (e.g., database query)
  setTimeout(() => {
    res.send('Hello!');
  }, 3000); // Simulate a 3-second delay
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});