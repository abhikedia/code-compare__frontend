import GitHubImage from "../../assets/github.svg";
import "./index.scss";

const Header = () => {
  return (
    <div id="header">
      <h1 className="header-text">CodeCompare</h1>
      <div className="icons">
        <a
          href="https://github.com/abhikedia/code-compare__frontend"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={GitHubImage} alt="github-logo" />
        </a>
        <a
          href="https://abhikedia.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          About Developer
        </a>
      </div>
    </div>
  );
};

export default Header;
