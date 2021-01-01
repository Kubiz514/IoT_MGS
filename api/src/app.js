const db_manager = require('./db_manager.js')
const express = require('express')


const app = express()
const api_url = '/api'
const port = 8080


//Return all devices
app.get(api_url+'/devices', (req, res) => {
  const devices = db_manager.get_devices()
  res.json(devices)
})











app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
