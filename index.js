const express = require("express");
const messagesRouter = require("./routers/messagesRouter");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json()); 


app.use(bodyParser.urlencoded({ extended: true }));

app.use('/messages', messagesRouter); 

const port = 8080;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});