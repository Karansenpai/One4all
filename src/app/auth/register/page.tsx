// import { registerUser } from "@/lib/action";
import React from "react";

const RegisterPage = () => {
  return (
    <div>
      <form>
        <input type="text" placeholder="username" name="username" />
        <input type="email" placeholder="email" name="email" />
        <input type="password" placeholder="password" name="password" />
        <input
          type="password"
          placeholder="confirmPassword"
          name="confirm-password"
        />
        <button>Click to register</button>
      </form>
    </div>
  );
};

export default RegisterPage;
