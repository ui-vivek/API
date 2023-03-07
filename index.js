const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const inventoryRoute = require('./routes/inventory');


dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect('mongodb://localhost:27017/myapp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('Error connecting to MongoDB', err);
});

app.use(express.json());
app.use('/api', inventoryRoute);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
