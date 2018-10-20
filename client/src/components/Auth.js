import auth0 from 'auth0-js';

export default class Auth {
  auth0 = new auth0.WebAuth({
    domain: 'mash.au.auth0.com',
    clientID: 'SXf3mQzjbjyinX7rPcQL82iKszWPWH1T',
    redirectUri: 'http://localhost:3000/search',
    responseType: 'token id_token',
    scope: 'openid'
  });

  login() {
    this.auth0.authorize();
  }
}