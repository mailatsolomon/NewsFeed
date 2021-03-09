import "babel-polyfill";
import express from "express";
import v1 from "./routes/v1";
import models from "./models";
import bodyParser from "body-parser";

const app = express();
let port = 8082;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, No-Auth, Accept, application/x-www-form-urlencoded, x-client-key, x-client-token, x-client-secret, Authorization, access_token, X-Auth-Token");
  	res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
  	next();
});

app.use("/v1", v1);

app.get("/", function (req, res) {
  res.status(200).json({
    code: 0,
    message: "it works !",
  });
});

models.sequelize.sync({}).then(() => {
  app.listen(port, () => console.log(`🚀 server running on port ${port}`));
});
