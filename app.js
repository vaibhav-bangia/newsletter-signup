const bodyParser = require('body-parser')
const request = require('request')
const express = require('express')
const app = express()
const port = 3000
app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended:true}));
app.get('/', (req, res) => res.sendFile(__dirname+ '/index.html'))

app.post("/",function(req,res){
    var firstName = req.body.fName;
    var lastName = req.body.lName;
    var email = req.body.email;
    console.log(firstName);
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))


// 861c7e9f16409ed6f10f6687ea6069cf-us6