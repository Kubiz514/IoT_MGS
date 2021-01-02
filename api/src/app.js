const db_manager = require('./db_manager.js')
const express = require('express')


const app = express()
const api_url = '/api'
const port = 8080


//Use Express JSON parser
app.use(express.json())

//GET all devices
app.get(api_url+'/devices', (req, res) => {
  const devices = db_manager.get_devices()

  res.json(devices)
})

//GET device by id
app.get(api_url+'/devices/:id', (req, res) => {
    const id = req.params.id
    const response = db_manager.get_device(id)

    res.json(response)
  }
)

//POST new device
app.post(api_url+'/devices', (req, res) => {
  //Express JSON parser


  response = db_manager.add_device(req.body.id, req.body.name, req.body.on_off, req.body.device_status)
  res.json(response)

})

//POST new device
app.put(api_url+'/devices/:id', (req, res) => {


    response = db_manager.update_device(req.body.id, req.body.name, req.body.on_off, req.body.device_status)
    res.json(response)

})

//GET device by ID
app.delete(api_url+'/devices/:id', (req, res) => {
    const id = req.params.id
    const response = db_manager.delete_device(id)
    res.json(response)
  }
)


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
