import "./App.css";
import Api, { UserReadFull } from "@timetac/js-client-library";
import { environment, authCredentials } from "./apiConfig";
import { useEffect, useState } from "react";

const api = new Api(environment);
function App() {
  const [userData, setUserData] = useState<UserReadFull>();
  const [authenticated, setAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    if (!authenticated) {
      api.authentication.login(authCredentials).then((tokensData) => {
        setAuthenticated(true);
      });
    }
  }, [authenticated]);

  useEffect(() => {
    if (authenticated && !userData) {
      api.users.readMe().then((meData) => {
        setUserData(meData.Results);
      });
    }
  }, [authenticated, userData]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to TimeTac's react playground</h1>
        <p>{userData && userData.fullname}</p>  
      </header>
    </div>
  );
}

export default App;
