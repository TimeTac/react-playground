import { Credentials } from "@timetac/js-client-library";

export const environment = {
  https: false,
  host: "localhost:3000",
  account: "playground",
  version: 3,
  autoRefreshToken: false,
};

export const authCredentials: Credentials = {
  grant_type: "password",
  username: "manager",
  password: "playgroundNotSoSecure",
  client_id: "TT_WEB_APP_PLAYGROUND", // sandbox access only
  client_secret: "playground", // public secret
};
