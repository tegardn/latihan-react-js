import Logo from "./Logo";
import Button from "../Button";
import Navbar from "../Navbar";
import "./Header.css";
export default function Header() {
  const handlerClickLogin = () => alert("Ini Login");
  const handlerClickRegister = () => alert("Ini Sign Up");
  return (
    <header>
      <Logo />
      <Navbar />
      <Button text="Login" buttonClick={handlerClickLogin} />
      <Button text="Register" buttonClick={handlerClickRegister} className="register-btn" />
    </header>
  );
}