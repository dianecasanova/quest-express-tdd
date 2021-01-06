// index.js
const app = require("./app");

const port = process.env.port || 5000;

app.listen(5000, (err) => {
  if (err) {
    throw new Error(`An error occurred: ${err.message}`);
  }
  console.log(`Server is listening on ${port}`);
});
