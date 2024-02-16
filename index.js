require('dotenv').config();
require('/data/data/com.termux/files/home/villageProject/config/db.js')
const app =require('/data/data/com.termux/files/home/villageProject/app.js')
const port=process.env.PORT || 5001;
app.listen(port, ()=>{
  console.log(`This village backend server at http://localhost:${port}`);
})