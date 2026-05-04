import "./Navbar.css";
function navbar() {
  return (
    <section className="navigation-section">
      <nav className="navbar">
        <div className="navbar-overlay">
          <div className="navigation">

            <div className="logo">
              <h1>Logo</h1>
            </div>

            <ul className="navbar-links">
              <li className="link">
                <a href="">Home</a>
              </li>
              <li className="link">
                <a href="">About</a>
              </li>
              <li className="link">
                <a href="">Contact</a>
              </li>
            </ul>
            
            <div class="start">
              <button>Projects</button>
            </div>
          </div>
        </div>
      </nav>
    </section>
  );
}
export default navbar;
