var express = require('express');
var app = express();
app.listen(3000, ()=>{
    console.log('servidor esta corriendo')
})

app.get('/hello', (req, res) => {
    res.send({users:[

        {
            "id": 7,
            "email": "michael.lawson@reqres.in",
            "first_name": "Michael",
            "last_name": "Lawson",
            "avatar": "https://reqres.in/img/faces/7-image.jpg"
        },
    ]})
  })


  
