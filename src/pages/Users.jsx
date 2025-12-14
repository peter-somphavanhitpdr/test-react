import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Users() {
  const API = "https://jsonplaceholder.typicode.com/users";
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch(API);
        const data = await res.json();
        setUsers(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  if (loading) return <p>ກຳລັງໂຫຼດ...</p>;

  return (
    <div>
      <h1>Users List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.email}){" "}
            <Link to={`/user/${user.id}`}>ดูรายละเอียด</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Users;
