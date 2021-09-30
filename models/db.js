const mongoose = require('mongoose');
mongoose.connect(process.env.URL1, (err)=>{
    if(!err){
         console.log('Mongo DB Connected');
        }
    else{ 
        console.log('error in mgdb connection');
    }
});

require('./user.model');