const express = require('express');
const courseRoutes = require('./route');

const app = express();
const PORT = 3000;

app.use('/api', courseRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
