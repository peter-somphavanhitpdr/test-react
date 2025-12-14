import { useEffect, useState } from "react";

const API = "https://jsonplaceholder.typicode.com/users";

function UserCRUD() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  // GET Users
  const fetchUsers = async () => {
    setLoading(true);
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

  useEffect(() => {
    fetchUsers();
  }, []);

  // POST User
  const addUser = async () => {
    const newUser = { name: "New User", email: "newuser@example.com" };
    try {
      const res = await fetch(API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newUser),
      });
      const data = await res.json();
      console.log("Created:", data);
      alert("POST สำเร็จ ตรวจสอบ console");
    } catch (err) {
      console.error(err);
    }
  };

  // PUT User
  const updateUser = async (id) => {
    const updatedUser = { name: "Updated Name" };
    try {
      const res = await fetch(`${API}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedUser),
      });
      const data = await res.json();
      console.log("Updated:", data);
      alert("PUT สำเร็จ ตรวจสอบ console");
    } catch (err) {
      console.error(err);
    }
  };

  // DELETE User
  const deleteUser = async (id) => {
    try {
      await fetch(`${API}/${id}`, { method: "DELETE" });
      console.log("Deleted user id:", id);
      alert("DELETE สำเร็จ ตรวจสอบ console");
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) return <p>ກຳລັງໂຫຼດ...</p>;

  return (
    <div>
      <h1>User CRUD Example</h1>
      <button onClick={addUser}>POST: Add User</button>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.email}){" "}
            <button onClick={() => updateUser(user.id)}>PUT</button>{" "}
            <button onClick={() => deleteUser(user.id)}>DELETE</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserCRUD;
