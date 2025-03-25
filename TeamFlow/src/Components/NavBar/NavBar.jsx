import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
  return (
    <header>
      <div className="container">
        <div className="container__logo">
          <h3 className="container__logo-logo"> TeamFlow</h3>
        </div>
        <div className="nav">
          <nav className="nav__links">
            <NavLink to="/employees">Employees</NavLink>
            <NavLink to="/dashboard">Dashboard</NavLink>
            <div className="profile-circle"></div>
            <div className="dropdown">
              <h3>Taariq Charles</h3>
              <br />
              <span>HR Manager</span>
              <Link to="/settings">Settings</Link>
              <Link to= "/login">Logout</Link>
            </div>
          </nav>
        </div>
        <div className="hamburger-menu">
          <nav className="nav__links mobile">
            <NavLink to="/Employees">Employees</NavLink>
            <NavLink to="/Dashboard">Dashboard</NavLink>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default NavBar;