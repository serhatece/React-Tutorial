import { useEffect } from "react";
import "./App.css";
import axios from "axios";

const BASE_URL = "http://localhost:3005";

function App() {
  // Tüm kullanıcıları almak için bir fonksiyon tanımlıyoruz.
  const getAllUsers = async () => {
    // Axios kullanarak GET isteği yapıyoruz ve yanıtı response değişkeninde saklıyoruz.
    const response = await axios.get(BASE_URL + "/users");
    console.log(response.data); // Sunucudan gelen verileri konsola yazdırıyoruz.
  };

  // Belirli bir ID'ye sahip kullanıcıyı almak için bir fonksiyon tanımlıyoruz.
  const getUserById = async (userId) => {
    // Belirtilen ID ile GET isteği yapıyoruz ve yanıtı response değişkeninde saklıyoruz.
    const response = await axios.get(BASE_URL + "/users/" + userId);
    console.log(response.data); // Sunucudan gelen verileri konsola yazdırıyoruz.
  };

  // Yeni bir kullanıcı oluşturmak için bir fonksiyon tanımlıyoruz.
  const createUser = async (newUser) => {
    // POST isteği ile yeni kullanıcı verisini sunucuya gönderiyoruz.
    const response = await axios.post(`${BASE_URL}/users`, newUser);
    console.log(response.data); // Oluşturulan kullanıcının verilerini konsola yazdırıyoruz.
  };

  // Varolan bir kullanıcıyı güncellemek için bir fonksiyon tanımlıyoruz.
  const updateUser = async (userId, updatedUser) => {
    // PUT isteği ile belirtilen ID'ye sahip kullanıcıyı güncelliyoruz.
    await axios.put(`${BASE_URL}/users/${userId}`, updatedUser);
  };

  // Belirli bir ID'ye sahip kullanıcıyı silmek için bir fonksiyon tanımlıyoruz.
  const deleteUserById = async (userId) => {
    // DELETE isteği ile belirtilen ID'ye sahip kullanıcıyı siliyoruz.
    const deletedResponse = await axios.delete(`${BASE_URL}/users/${userId}`);
    console.log(deletedResponse.data); // Silme işlemine dair yanıtı konsola yazdırıyoruz.
  };

  // useEffect hook'u, bileşen yüklendiğinde veya güncellendiğinde çalışır.
  useEffect(() => {
    // Tüm kullanıcıları almak için fonksiyonu çağırabiliriz.
    // getAllUsers();
    // Belirli bir kullanıcıyı ID ile almak için fonksiyonu çağırabiliriz.
    // getUserById(1);
    // Yeni bir kullanıcı oluşturmak için fonksiyonu çağırabiliriz.
    /*
    const newUser = {
      "username": "smile",
      "password": "7965"
    }
    createUser(newUser);
    */
    // Varolan bir kullanıcıyı güncellemek için fonksiyonu çağırabiliriz.
    /*
    updateUser("7d6d", {
      "username": "ömer",
      "password": "5436"
    })
    */
    // Belirli bir kullanıcıyı silmek için fonksiyonu çağırabiliriz.
    // deleteUserById("7d6d");
  }, []); // Boş bağımlılık dizisi kullanıldığında, useEffect sadece bileşen ilk kez yüklendiğinde çalışır.

  return <div>{/* Uygulamanın ana yapısını temsil eden div */}</div>;
}

export default App; // App bileşenini dışa aktarıyoruz, böylece başka dosyalarda kullanabiliriz.
