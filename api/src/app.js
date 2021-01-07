const express = require('express')


const app = express()
const api_url = '/api'
const port = 8080

//MongoDB
const { MongoClient } = require("mongodb");
// Connection URI
const url = 'mongodb://root:example@mongo/admin'
// Create a new MongoClient


//Use Express JSON parser
app.use(express.json())

//GET all devices
app.get(api_url+'/devices', (req, res) => {

  MongoClient.connect(url, (err, db) => {
      if (err) throw err
      let dbo = db.db("admin")
      dbo.collection("devices").find().toArray( (err, result) => {
        if (err) throw err
        res.json(result)
        db.close()
      })
    })

})

//GET device by id
app.get(api_url+'/devices/:id', (req, res) => {
    MongoClient.connect(url, (err, db) => {
      if (err) throw err
      let dbo = db.db("admin")

      query = { "_id": String(req.body.id) }
      dbo.collection("devices").find(query).toArray( (err, result) => {
        if (err) throw err
        res.json(result)
        db.close()
      })
    })

})



//POST new device
app.post(api_url+'/devices', (req, res) => {
  //Express JSON parser




})

//POST new device
app.put(api_url+'/devices/:id', (req, res) => {




})

//GET device by ID
app.delete(api_url+'/devices/:id', (req, res) => {

  }
)


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
