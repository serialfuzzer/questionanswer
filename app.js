const express = require("express");
const app = express(); // create an express application
const mongoose = require("mongoose");

const { MONGODB } = require("./database");





const questionRoute = require('./routes/questions');
const postsRoute = require('./routes/post');
const nocache = require('nocache');

app.use(nocache());

app.use('/', express.static(__dirname + '/webpage'));
app.use(express.json())




const port = 80;


app.use('/api/question', questionRoute);
app.use('/api/posts', postsRoute);



app.use((err, req, res, next) => {
    const status = err.status || 500;
    res.status(status).json({
        "error": {
            "msg": err.message
        }
    });
})

app.use((req, res, next) => {
    const err = {
        "error": {
            "msg": "404 Not Found"
        }
    }
    res.status(404).json(err);
})



mongoose.connect(MONGODB, { useNewUrlParser: true, useUnifiedTopology: true })
.then(
    () => {
        console.log("connected to mongodb");
        
        return app.listen(port);
        
    }
    )
    .then(
        () => {
            console.log(`server running at port ${port}`)
        }
        )
        .catch(
            err => {
                console.log(err.message)
            }
            );
            
            
            // 
            