const jwt = require('jsonwebtoken');
const pg = require('pg-promise');
const db = pg(dbConfig);
const { signature } = require('./variables');


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
    let credentials = JSON.parse(body);
    let { email, password } = credentials;

}