import React, { useState, useEffect } from 'react';

function Tugas4() {
  // State untuk menyimpan data dari API
  const [users, setUsers] = useState([]);

  // useEffect untuk memanggil API ketika komponen pertama kali dipasang
  useEffect(() => {
    // API sederhana untuk contoh data user
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())  // Mengubah hasil tanggapan menjadi json
      .then(data => {
        setUsers(data);  // Simpan data ke state users
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []); // [] artinya useEffect hanya dipanggil sekali saat komponen dimount

  return (
    <div>
      <h1>Daftar Nama dan Email</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <strong>Nama:</strong> {user.name} <br/>
            <strong>Email:</strong> {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Tugas4;
