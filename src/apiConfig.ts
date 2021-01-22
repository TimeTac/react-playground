import { Credentials, Tokens } from "@timetac/js-client-library";

export const environment = {
  https: false,
  host: "localhost:3003",
  account: "playground",
  version: 3,
  //Callback, called on refresh of the token. object of access token and refresh {accessToken, refreshTOken}  token are passed as parameter
  onTokenRefreshedCallback: (tokens: Tokens) =>
    console.log(`${tokens.accessToken} ${tokens.refreshToken}`),
  //Callback called when refresh of the token fails.
  onTokenRefreshedFailed: () => {
    console.log("Intended action, such as logout");
  },
  //If true, it tries to refresh token on failed request. Default true.
  autoRefreshToken: true,
};

export const authCredentials: Credentials = {
  grant_type: "password",
  username: "manager",
  password: "playgroundNotSoSecure",
  client_id: "TT_WEB_APP_PLAYGROUND", // sandbox access only
  client_secret: "playground", // public secret
};
