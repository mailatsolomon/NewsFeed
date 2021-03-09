import AWS from "../lib/aws";

const cognito = new AWS.CognitoIdentityServiceProvider({
  region: "us-east-1",
  apiVersion: "2016-04-18",
});

export default cognito;
