const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Hello DevOps World! Pipeline Working Smoothly.');
});

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`);
});
