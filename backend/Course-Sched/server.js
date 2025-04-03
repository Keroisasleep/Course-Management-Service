const express = require('express');
const mongoose = require('mongoose');
const router = require('./router');

const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect('mongodb://localhost:27017/courses_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('MongoDB Connected'))
  .catch(err => console.error('MongoDB Connection Error:', err));

app.use(express.json());
app.use('/api', router);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
