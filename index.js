const express = require('express')
const app = express()
const port = 3000
// const bodyParser = require('body-parser')

app.use(express.json());

app.use(express.urlencoded({extended: true}))

app.post('/user', (req, res)=>{
    res.send({
        message: 'CREATE NEW USER: POST /user',
        body: req.body
    })
})

app.get('/user/', (req,res)=>{
    res.send('GET USER LIST: GET /user/')
})

app.get('/user/:id', (req, res)=>{
    res.send('GET USER: GET /user/'+ req.params.id);
})

app.patch('/user/:id', (req, res)=>{
    const msg = {
        message: 'update user: PATCH /user/'+ req.params.id,
        body:req.body
    };
    res.send(msg);
})

app.get('/helloworld', (req, res)=>{
    res.send('hello world!')
})

app.listen(port, ()=>{
    console.log(`cli-nodejs-api listening at http://localhost:${port}`)
})