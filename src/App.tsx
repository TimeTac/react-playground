import "./App.css";
import Api, { User } from "@timetac/js-client-library";
import { environment, authCredentials } from "./apiConfig";
import { useEffect, useState } from "react";

function App() {
  const api = new Api(environment);

  const [userData, setUserData] = useState<User>();
  const [authed, setAuthed] = useState<boolean>(false);

  useEffect(() => {
    api.authentication.login(authCredentials).then((tokensData) => {
      api.authentication.setTokens(tokensData);
      setAuthed(true);
    });
    return;
  });

  useEffect(() => {
    if (authed) {
      api.users.readMe().then((meData) => {
        setUserData(meData);
      });
    }
  }, [authed, api.users]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to TimeTac's react playground</h1>
        {userData && userData.fullname}
      </header>
    </div>
  );
}

export default App;
