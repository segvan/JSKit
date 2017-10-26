"use strict";

import * as express from 'express';
import * as path from 'path';
import * as open from 'open';

const port = 60000;

let server = express();

server.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

server.listen(port, function (err) {
  if (err) {
    console.log(err);
  } else {
    open('http://localhost:' + port);
  }
});
