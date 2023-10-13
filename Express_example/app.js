const express = require("express");
const bankRouter = require("./controllers/bank");
const loginRouter = require("./controllers/login");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(express.static("public"));

app.listen(port,function() {
    console.log("Kuunnellaan porttia "+port);
});

app.get("/", function(request,response) {
    response.sendFile("C:/Users/juhoh/Koulutehtavat/Tietokannat ja rajapinnat/Express_example/index.html");
});



app.use('/bank',bankRouter);
app.use('/login',loginRouter);

module.exports = app;