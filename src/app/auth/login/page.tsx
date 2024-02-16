
import LoginForm from "@/components/auth/LoginForm";
import React from "react";

const Login = () => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '70vh'
    }}>
      <LoginForm/>
    </div>
  );
};

export default Login;
