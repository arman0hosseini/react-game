// npm install axios
import axios from "axios";
import { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
}

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get<User[]>("#").then((response) => setUsers(res.data));
  }, []);

  return (
    <ul>
      {users.map((users) => (
        <li key={users.id}>{users.name}</li>
      ))}
    </ul>
  );
};

export default App;
