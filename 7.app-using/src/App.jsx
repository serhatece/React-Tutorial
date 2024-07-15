import { useEffect } from 'react';
import './App.css'
import axios from 'axios'

const BASE_URL = "http://localhost:3005";

function App() {
  const getAllUsers = async () => {
    const response = await axios.get(BASE_URL + "/users");
    console.log(response.data)
  }

  const getUserById = async (userId) => {
    const response = await axios.get(BASE_URL + "/users/" + userId);
    console.log(response.data)
  }

  const createUser = async (newUser) => {
    // Post veri eklemek için kullanılır!
    const response = await axios.post(`${BASE_URL}/users`, newUser);
    console.log(response.data);
  }

  const updateUser = async (userId, updatedUser) => {
    // Put : veri güncellemek için kullanılır
    await axios.put(`${BASE_URL}/users/${userId}`, updatedUser);
  }

  const deleteUserById = async (userId) => {
    const deletedResponse = await axios.delete(`${BASE_URL}/users/${userId}`);
    console.log(deletedResponse.data);
  }


  useEffect(() => {
    //getAllUsers();

    //getUserById(1);

    /*const newUser = {
      "username": "smile",
      "password": "7965"
    }
    createUser(newUser);*/

    /*updateUser("7d6d", {
      "username": "ömer",
      "password": "5436"
    })*/

    //deleteUserById("7d6d");
  }, [])

  return (
    <div>
    </div>
  )
}

export default App
