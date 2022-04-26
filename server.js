const express=require('express');
const bodyparser=require('body-parser')
const cors=require('cors')

const app=express();

app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json())

app.use(cors())

app.use(express.static('website'));

const port= 5000;

const server= app.listen(port,()=> console.log(`local server: ${port}`))

let projectData={};

app.post('/post',add)
function add(req,res){
    console.log(req.body)
    let newdata={
        date:req.body.date,
        temperature:req.body.temperature,
        Feelings:req.body.user
    }
    console.log(newdata)
    projectData=newdata;
    console.log(projectData)
};

app.get('/get', function (req,res){
    res.send(projectData)
});

