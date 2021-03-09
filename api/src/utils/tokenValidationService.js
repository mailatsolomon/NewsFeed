import models from "../models";
import cognito from "./cognitoAuth";

const tokenValidationService = async (token) => {
  let user_params = {};

  try {
    user_params.AccessToken = token;
    let result = await cognito.getUser(user_params).promise();
    console.log(result.Username);
    var response = await models.User.findAll({
      where: {
        cognitoId: result.Username,
      },
    });
    return { cognitoId: result.Username, userId: response[0].dataValues };
  } catch (e) {
    // console.log(e.message)
    return e.message;
  }
};

export default tokenValidationService;
