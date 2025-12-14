import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ padding: 10 }}>
      <Link to="/">Home</Link>
      {" | "}
      <Link to="/users">Users</Link>
      {" | "}
      <Link to="/user-crud">User CRUD</Link>
    </nav>
  );
}

export default Navbar;
