import { useState } from "react";
import "./App.css";
import Dashboard from "./Components/Screens/Dashboard/Dashboard";
import Login from "./Components/Screens/Login/Login";

function App() {
  const [login, setLogin] = useState(false);
  const handleLogin = () => {
    setLogin(true);
  };
  const handleLogoutClick = () => {
    setLogin(false);
  };
  return (
    <>
      {login ? (
        <Dashboard handleLogoutClick={handleLogoutClick} />
      ) : (
        <Login onClick={handleLogin} />
      )}
    </>
  );
}

export default App;
