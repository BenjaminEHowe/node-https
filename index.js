const express = require('express');
const fs = require('fs');
const https = require('https');

const app = express();

let key = fs.readFileSync('127-0-0-1.key', 'ascii');
let cert = fs.readFileSync('127-0-0-1.cert', 'ascii');

https.createServer(
  {
    key,
    cert,
    ciphers:'ECDHE-RSA-AES128-GCM-SHA256:DHE-RSA-AES128-GCM-SHA256'
  },
  app
).listen(8443, '127.0.0.1');
