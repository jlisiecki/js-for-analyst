const compression = require('compression');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

app.use(compression());
app.use(express.static('public'));

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
