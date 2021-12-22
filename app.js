const express = require('express') //ประกาศตัวแปร เรียกใช้ Express Library
const debug = require('debug')('app') //ตรวจสอบการทำงานผ่าน CMD โดยใช้ set DEBUG=* & node app.js โดย DEBUG=app จะแสดงเฉพาะเกี่ยวกับ app
const morgan = require('morgan') //ตรวจสอบ log และ traffic ของ user ผ่าน cmd

const app = express() // เรียกใช้งาน Express
const port = 3000 // กำหนด port ให้กับการจำลอง server ระวังซ้อนกับ Port อื่นๆ

app.use(morgan('combined'))

app.get('/', (req, res) => {  // กำหนดเมื่อผู้ใช้เข้าถึง localhost:3000/
  res.send('Hello Thanapond!')
})

app.listen(port, () => { //ให้รอฟังที่ port 3000
    debug(`Example app listening at http://localhost:${port}`)  //แสดงผลหาก Port นี้ทำงานอยู่่
})