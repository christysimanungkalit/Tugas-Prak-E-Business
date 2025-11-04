import React, { useEffect, useState } from "react";

export default function App() {
  const [users, setUsers] = useState([]);      
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null);     

  useEffect(() => {
    let isMounted = true; 

    async function fetchUsers() {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        const data = await res.json();
        if (isMounted) {
          setUsers(data);
        }
      } catch (err) {
        if (isMounted) setError(err.message);
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    fetchUsers();

   
    return () => {
      isMounted = false;
    };
  }, []); 

  return (
    <div style={{ padding: 20, fontFamily: "system-ui, sans-serif" }}>
      <h1>User List (useEffect contoh)</h1>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}

      {!loading && !error && (
        <ul>
          {users.map(user => (
            <li key={user.id} style={{ marginBottom: 8 }}>
              <strong>{user.name}</strong> — {user.email}
            </li>
          ))}
        </ul>
      )}

      <p style={{ marginTop: 20, color: "#555" }}>

      </p>
    </div>
  );
}
