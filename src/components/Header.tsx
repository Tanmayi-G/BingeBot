import logo from "../assets/logo.png";

const Header = () => {
  return (
    <div className="absolute py-2">
      <img src={logo} alt="Logo" className="w-40" />
    </div>
  );
};

export default Header;
