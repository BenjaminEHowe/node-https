const fs = require('fs');
const https = require('https');

let key = fs.readFileSync('127-0-0-1.key', 'ascii');
let cert = fs.readFileSync('127-0-0-1.cert', 'ascii');
let dhparam = fs.readFileSync('dhparam.pem', 'ascii');

https.createServer(
  {
    key,
    cert,
    dhparam,
    ciphers:'ECDHE-RSA-AES128-GCM-SHA256:DHE-RSA-AES128-GCM-SHA256'
  },
  (req, res) => { res.end(); }
).listen(8443, '127.0.0.1');
