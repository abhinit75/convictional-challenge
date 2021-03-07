const express = require('express');
const app = express();
app.use(express.json()); //Tell Express to use JSON

//Load Environment Settings
const env = require('dotenv/config');

//Define routes
const productRoutes = require('./routes/product');
const productRoute2 = require('./routes/store');
app.use('/api', productRoutes);
app.use('/api', productRoute2);

//Server Listener
app.listen(process.env.PORT, () => {
  console.log('Server has started...');
});
