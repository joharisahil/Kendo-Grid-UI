import Logo from "../assests/Logo.png";

const Login = () => {
  return (
    <div className="d-flex justify-content-around align-items-center vh-100 bg-dark text-white">
      <img src={Logo} alt="Logo" />
      <div className="d-flex flex-column justify-content-around align-items-center ">
        <div className="mb-50 display-1 fw-bold">Welcome!!</div>
        <div>Richest</div>
      </div>
    </div>
  );
};

export default Login;
