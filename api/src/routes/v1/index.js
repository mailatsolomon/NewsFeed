import { Router } from "express";
const router = Router();

import rssfeed from "./rss";

router.get("/", (_req, res) => {
  var params = {
    SecretId: process.env.AWS_SECRETS_MANAGER_SECRET_ID /* required */,
  };
  secrets.getSecretValue(params, function (err, data) {
    if (err) console.log(err, err.stack);
    else console.log(data); // successful response
  });
  res.status(200).json({
    message: "hello from v1",
  });
});

router.use("/rss", rssfeed);

export default router;
