import reactImage from "../../assets/react-core-concepts.png";
import "./Header.css";

const reactDescriptions = ["Fundamental", "Core", "Crucial"];
function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  const qualifier = reactDescriptions[genRandomInt(2)];
  return (
    <header>
      <img src={reactImage} />
      <h1>React Essentials</h1>
      <p>
        {qualifier} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

export default Header;
