const express = require('express')
const app = express()
const port = 3000

app.use(bodyParser.json());

app.post('/user', (req, res)=>{
    res.send({
        message: 'CREATE NEW USER: POST /user',
        body:req.body
    })
})

app.get('/helloworld', (req, res)=>{
    res.send('hello world!')
})



app.listen(port, ()=>{
    console.log(`cli-nodejs-api listenint at http://localhost:${port}`)
})