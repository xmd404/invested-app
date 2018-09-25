const jwt = require('jsonwebtoken');
const { signature, name } = require('./variables');
const pg = require('pg-promise')();
const dbConfig = name;
const db = pg(dbConfig);
const express = require('express');



let createToken = user => 
    jwt.sign(
        { userId: user.id },
        signature,
        { expiresIn: '7d' }
    );

let readBody = (req, callback) => {
    let body="";
    req.on('data', (chunk) => {
        body += chunk.toString();
    });
    req.on('end', () => {
        callback(body);
    })
}

let postToken = (req, res) => {
    readBody(req, (body) => {
        let credentials = JSON.parse(body);
        let { email, password } = credentials;
        console.log(credentials);
        db.one(`SELECT * FROM users WHERE users.email = '${email}'`)
            .then(user => {
                console.log(user)
                if (user.password === password && user.email === email) {
                    let token = createToken(user);
                    res.send(token);
                } else {
                    res.send('Wrong password');
                }
            })
            .catch((err) => {
                res.send('Wrong login information');
            })
    })
};

let checkToken = (req, res, next) => {
    let { authorization: token } = req.headers;
    let payload;
    try {
        payload = jwt.verify(token, signature);
    } catch(err) {
        console.log(err);
    }
    if (payload) {
        req.jwt = payload;
        next();
    } else {
        res.send('Woops! You do not have a token!');
    }
};

let postUserLogin = (req, res) => {
    readBody(req, (body) => {
        
    })
};

let postUserSignupInformation = (req, res) => {
    readBody(req, (body) => {
        let userInformation = JSON.parse(body);
        db.query(`INSERT INTO
            users (userName, email, password)
            VALUES ('${userInformation.userName}', '${userInformation.email}', '${userInformation.password}' )`)
        .then(data=> {
            res.send(JSON.stringify(userInformation));
        })
    })
};

let server = express();
server.post('/usersignup', postUserSignupInformation)
server.post('/userlogin', postToken);

server.listen(3001);