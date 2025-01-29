const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "~Sn5jACYT#fmVyNIkrvnXJ1vHRPQboXc2SSvQ-evAyZ9GEbK_YmZM",  //session id put
ALIVE_IMG: process.env.ALIVE_IMG || "https://i.ibb.co/6nT5R2M/0ccb2d898e907180.jpg",
ALIVE_MSG: process.env.ALIVE_IMG || "*HEY DEAR* ${pushname}\n *I Am AlIVE NOW....! 🖐🏻*",
SUDO_NB: process.env.SUDO_NB || "94740250759",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
MODE: process.env.MODE || "public",
AUTO_VOICE:"flase"
};

