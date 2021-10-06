const express = require('express')
const app = express()
const port = 3000
// const bodyParser = require('body-parser')

app.use(express.json());

app.use(express.urlencoded({extended: true}))


//create new user
app.post('/user', (req, res)=>{
    res.send({
        message: 'CREATE NEW USER: POST /user',
        body: req.body
    })
})


//get all user
app.get('/user/', (req,res)=>{
    res.send('GET USER LIST: GET /user/')
})


//get user by id
app.get('/user/:id', (req, res)=>{
    res.send('GET USER: GET /user/'+ req.params.id);
})


//update user
app.patch('/user/:id', (req, res)=>{
    const msg = {
        message: 'UPDATE USER: PATCH /user/'+ req.params.id,
        body:req.body
    };
    res.send(msg);
})

//delete user
app.delete('/user/delete/:id', (req, res)=>{
    res.send('DELETE USER: DELETE /user/'+ req.params.id)
})


//helloworld
app.get('/helloworld', (req, res)=>{
    res.send('hello world!')
})

app.listen(port, ()=>{
    console.log(`cli-nodejs-api listening at http://localhost:${port}`)
})