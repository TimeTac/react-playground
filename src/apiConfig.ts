import { ApiConfig, Credentials } from "@timetac/js-client-library";

export const environment: ApiConfig = {
  https: true,
  host: "localhost:3000/proxy",
  account: "playground",
  version: 3,
  clientId: "TT_WEB_APP_PLAYGROUND", // sandbox access only
  clientSecret: "playground", // public secret
};

export const authCredentials: Credentials = {
  grant_type: "password",
  username: "manager",
  password: "playgroundNotSoSecure",
  client_id: "TT_WEB_APP_PLAYGROUND", // sandbox access only
  client_secret: "playground", // public secret
};
