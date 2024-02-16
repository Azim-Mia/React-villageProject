require('dotenv').config();
// getting-started.js
const db_url=process.env.DB_URL;
const mongoose = require('mongoose')
mongoose.connect(db_url)
  .then(() => console.log(' villageUtmarchar SchemaModel Connected!'))
  .catch((err)=>{
    console.log(err.message)
  })