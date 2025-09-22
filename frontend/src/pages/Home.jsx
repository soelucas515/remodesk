// frontend/src/pages/Home.jsx
import { useEffect, useState } from "react";

export default function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/api/users")
      .then(res => res.json())
      .then(data => setUsers(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1>Usuarios demo</h1>
      <ul>
        {users.map(u => (
          import UserCard from "../components/UserCard";

{users.map(u => (
  <UserCard key={u._id} user={u} />
))}            
        ))}
      </ul>
    </div>
  );
}
