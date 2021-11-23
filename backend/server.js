const express = require('express');
const app = express();
const port = process.env.PORT || 8081;
const path = require('path');
require('dotenv').config({path: path.resolve(__dirname,'\.env')});
const firebaseAdmin = require('./firebase-admin');
const db = require('./database');
const cors = require('cors');


app.use(cors({
    origin:"https://parking-space-442.herokuapp.com/",
    // origin:"http//localhost:5000/",
    credentials: true,
}));

app.use(require('body-parser').urlencoded({ extended: true }));
app.use(require('body-parser').json());
app.use(require('body-parser').text());
app.use(require('body-parser').raw());

let uid = "";

app.get('/current-user-details', function(res,req){
   const authHeader = res.get('authorization');
   firebaseAdmin.admin.auth()
       .verifyIdToken(authHeader)
       .then((decodeToken)=>{
           uid = decodeToken.uid;
           db.get_user_data(res.body,req,uid)
       })
});

app.post('/personal-info', function(res,req){
    const authHeader = res.get('authorization');
    firebaseAdmin.admin.auth()
        .verifyIdToken(authHeader)
        .then((decodeToken)=>{
            const uid = decodeToken.uid;
            console.log(uid);
            db.store_user_data(res.body,req,uid);
        })
});

app.post('/personal-info-update', function(res,req){
    const authHeader = res.get('authorization');
    firebaseAdmin.admin.auth()
        .verifyIdToken(authHeader)
        .then((decodeToken)=>{
            const uid = decodeToken.uid;
            console.log(uid);
            console.log(res.body);
            db.update_user_data(res.body,req,uid);
        })
    req.send(res.body);
});

app.get('/dashboard-details', cors(), db.parking_lots);

app.get('/user-profile-schedule',cors(), db.get_user_schedule);

app.use(express.static('frontend/build'));
app.listen(port, () => console.log(`Listening on port ${port}`));

app.get('*', (req,res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
})
