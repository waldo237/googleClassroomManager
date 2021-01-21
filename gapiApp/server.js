const express = require('express');

const PORT = process.env.PORT || 8080;
const app = express();

app.use(express.static(`${__dirname}/`));

app.get(/.*/, (req, res) => {
  res.sendFile((`${__dirname}/gapiApp/index.html`));
});

app.listen(PORT, () => console.log(`your server is running on PORT ${PORT}`));
