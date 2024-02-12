
import React from "react";

const Login = async () => {


  return (
  <div>
      <form >
        <button>Click to login</button>
      </form>

      <form>
        <input type="text" placeholder="username" name="username" />
        <input type="password" placeholder="password" name="password" />
        <button >login with credentials</button>
      </form>
    </div>
  );
};

export default Login;
