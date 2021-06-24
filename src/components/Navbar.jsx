import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">Heartbake</Link>
      <Link to="/new">Bake My Heart</Link>
    </nav>
  )
}

export default Navbar;