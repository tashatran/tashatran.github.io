//build the express app
var express = require ('express')
const path= require("path")
var app = express()
//set up port
var PORT= 3000
var PORT= process.env.PORT||3000//just for heroku, to set global variable
//middleware
app.use(express.json())//req.body
app.use(express.urlencoded({extended:true}))//req.params
app.use(express.static("public"))//serves all static assets without an active request

//api routes
app.get('/api/notes', function (req, res) {
  // const allTheNotes= 
  // res.json(allTheNotes)
  res.sendFile(path.join(__dirname,"./db/db.json"))
})
app.post('/api/notes', function (req, res) {
  //pull the data out of the request
  console.log(req.body)
  //write the data to db.json
    //fs.write
})
app.delete('/api/notes/:id', function(req, res){
  console.log(req.params.id)
})

// html routes
app.get('/notes', function (req, res) {
    res.sendFile(path.join(__dirname,"./public/notes.html"))
  })
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname,"./public/index.html"))
  })
//listen on the port
app.listen(PORT, ()=>console.log(`the server listens on port ${PORT}`))

