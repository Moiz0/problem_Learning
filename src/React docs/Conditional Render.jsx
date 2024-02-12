import React from "react";
import { useState } from "react";


function ConditionalComponent() {
  const [isLoggedin, setisLooedin] = useState(false);

  const handleLogin = () => {
    setisLooedin(true);
  }; 
     
  const handleLogout = () => {
    setisLooedin(false);
  };

  function Greetings({isLoggedin}) {

    if (isLoggedin) {
      return <h1>Greetings, you are logged In</h1>;
    } else {
      return <h1>You are logged out!</h1>;
    }
  }


  return (
    <div>
      <Greetings isLoggedin={isLoggedin} />

      {isLoggedin ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <button onClick={handleLogin}>Login</button>
      )}
    </div>
  );
}
export default ConditionalComponent;
