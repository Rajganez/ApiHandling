import aparts from "/aparts.svg";
const Header = () => {
  return (
    <div>
      <nav className="navbar bg-dark">
        <div className="container-fluid">
          <div className="navbar-brand">
            <img
              src={aparts}
              alt="Logo"
              width="30"
              height="24"
              className="d-inline-block align-text-top"
            />
            <span style={{ color: "#D2F4EA" }}>House Residents</span>{" "}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
