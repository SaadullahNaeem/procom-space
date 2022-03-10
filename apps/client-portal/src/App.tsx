import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

import { IUser, ProButton } from "@procom-space/common";

function App() {
  const [user, setUser] = useState<IUser | null>(null);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <h2>Hi {user ? user.firstName : "Guest"}</h2>

        <ProButton
          clickHandler={() => {
            if (user) {
              setUser(null);
            } else {
              setUser({
                firstName: "Saad",
                lastName: "Naeem",
                email: "saadullah.naeem@gmail.com",
              });
            }
          }}
        >
          {user ? "Logout" : "Login"}
        </ProButton>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
