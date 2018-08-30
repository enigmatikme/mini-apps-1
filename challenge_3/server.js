const express = require('express');
const app = express();
const bodyParser = require('body-parser');
var db = require('./database/index.js')

app.use(express.static('public'));
app.use(bodyParser.json());

// app.get('/', (req, res) => {
//   res.send(console.log("GETTR DONE"));
// });

app.post('/forms', (req, res) => {
  // console.log(req.body.name);

  const sendToClient = (err, data) => {
    if (err) return;
    res.send(data);
  }

  db.postMessage(req.body.name, sendToClient);
  // res.send(JSON.stringify("success"));
});

var PORT = 3007;
app.listen(PORT, () => console.log('Listening on ' + PORT));

