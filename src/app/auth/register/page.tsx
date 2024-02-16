import RegisterForm from "@/components/auth/RegisterForm";




const RegisterPage = () => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '80vh',
      position: 'relative',
    }}>
      <RegisterForm/>
    </div>
  );
};

export default RegisterPage;
