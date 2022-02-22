require('dotenv').config();
let defaultPw = "chamb3radm!n";
const bcrypt = require('bcrypt');
const saltRounds = 10;

function generateHash(password){
    return bcrypt.hashSync(password, saltRounds);
}

console.log(generateHash(defaultPw));
