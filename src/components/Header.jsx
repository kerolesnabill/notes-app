import firebaseLogo from "../assets/firebase.svg";
import reactLogo from "../assets/react.svg";
import sassLogo from "../assets/sass.svg";

const Header = () => {
  return (
    <div className="header">
      <span>
        <img src={reactLogo} alt="React logo" />
      </span>
      <span className="plus">+</span>
      <span>
        <img src={firebaseLogo} alt="Firebase Logo" />
      </span>
      <span className="plus">+</span>
      <span>
        <img src={sassLogo} alt="Sass logo" />
      </span>
    </div>
  );
};

export default Header;
