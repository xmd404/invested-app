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
    });
};

let postToken = (req, res) => {
    readBody(req, (body) => {
        let credentials = JSON.parse(body);
        let { loginEmailInput, loginPasswordInput } = credentials;
        db.one(`SELECT * FROM users WHERE users.email = '${loginEmailInput}'`)
            .then(user => {
                if (user.password === loginPasswordInput && user.email === loginEmailInput) {
                    let token = createToken(user);
                    let userProfileInformation = { token: token, user: user };
                    res.send(JSON.stringify(userProfileInformation));
                } else {
                    res.send('Wrong password');
                }
            })
            .catch((err) => {
                res.send('Wrong login information');
            })
    });
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

let postUserSignupInformation = (req, res) => {
    readBody(req, (body) => {
        let userInformation = JSON.parse(body);
        db.query(`INSERT INTO
            users (userName, email, password, cash, portfolioQuantity)
            VALUES ('${userInformation.signupNameInput}', '${userInformation.signupEmailInput}', '${userInformation.signupPasswordInput}', '10000', '0' )`)
        .then(data=> {
            res.send(userInformation);
        })
    });
};

let postUserCash = (req, res) => {
    readBody(req, (body) => {
        let userInformation = JSON.parse(body);
        console.log(userInformation);
        db.query(`UPDATE users SET cash=${userInformation.cash} WHERE email='${userInformation.userEmail}'`)
        .then(results=> {
            console.log(result);
            res.send('cash updated');
        })
    })
}

let getUserInformation = (req, res) => {
    db.one('SELECT * FROM uers WHERE ')
};

let allowCORS = (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, Content-Type, X-Auth-Token');
    next();
};

let server = express();
server.use(allowCORS);
server.put('/updatecash', postUserCash)
server.post('/userinformation', getUserInformation)
server.post('/usersignup', postUserSignupInformation)
server.post('/userlogin', postToken);

server.listen(3001);