const express = require('express');
const path = require('path');
const {School} = require('./server/db');
const {Student} = require('./server/db');
const {syncAndSeed} = require('./server/db');

syncAndSeed();

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, './public')))


app.get('/api/customers', async (req, res, next) => {
  try{
    res.json(await School.findAll());
  }
  catch(err){
    next(err);
  }

  res.json(customers);
});

app.get('*', (req, res, next) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
})
const port = 3001;

app.listen(port, () => `Server running on port ${port}`);