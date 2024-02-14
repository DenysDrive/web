import {enc, HmacSHA256} from "crypto-js";
import {AuthenticationDetails, CognitoUser, CognitoUserPool, CognitoUserAttribute} from "amazon-cognito-identity-js";
import {reject, resolve} from "eslint-plugin-promise/rules/lib/promise-statics";
import {api} from "boot/axios";

const signIn = async(email, password) => {
  const data = { email, password };
  return  await api.post('auth/login', data, {
    headers: {
      "Content-Type": "application/json"
    }
  });
}

const signUp = async(email, password) => {
    const data = { email, password };
    return  await api.post('auth/signup', data, {
      headers: {
        "Content-Type": "application/json"
      }
    });
  }

export { signUp, signIn }
