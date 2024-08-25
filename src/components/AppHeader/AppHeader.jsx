import "./AppHeader.css";
import SiteLogo from "../../img/SiteLogo.png";

function AppHeader() {
  return (
    <header className="header">
      <div className="logo-container">
        {/* <img src={SiteLogo} alt={SiteLogo} /> */}
        <p>דיווח אירוע חריג </p>
      </div>
    </header>
  );
}

export default AppHeader;
