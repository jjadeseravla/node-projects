require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const workoutRoutes = require('./routes/workouts');

const app = express();

app.use((req, res, next) => {
  next();
});

//middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  
  next()
})

// app.get('/', (req, res) => {
//   res.json({ msg: 'welcome to app' });
// })

//routes
app.use('/api/workouts', workoutRoutes);

//connect to db
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log('connected to DB and listening on port', process.env.PORT);
    });
  })
  .catch((e) => {
    console.log(e)
  })


