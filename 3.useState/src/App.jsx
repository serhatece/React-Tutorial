import { useState } from 'react'
import './App.css'

function App() {

  // useState : hooks
  // useState : Bir state'in değerini set metodunu kullanrarak değiştirdiğinde component yeniden render edilir!

  const [firstName, setfirstName] = useState('Serhat');
  const [lastName, setlastName] = useState('Ece');

  const [names, setName] = useState(["Ali", "Ahmet", "Hakan", "Recep"]);

  const handleChange = () => {
    setlastName("Yildirim");
  }

  const [userInfo, setuserInfo] = useState({ username: "serhatece", pasword: "1234" })

  const [count, setCount] = useState(0);

  const arttir = () => {
    setCount(count + 1);
  }

  const azalt = () => {
    setCount(count - 1);
  }

  return (
    <div>
      <div>
        {firstName} {lastName}
      </div>
      <div>
        <button onClick={() => {
          setfirstName("Ömer")
        }}>İsmi Değiştir</button>
        <button onClick={handleChange}>Soyismi Değiştir</button>
      </div>
      <hr />
      {names.map((name, index) => (
        <div key={index}>{name}</div>
      ))}
      <hr />
      {userInfo.username} {userInfo.pasword}
      <hr />

      <div>{count}</div>
      <div>
        <button onClick={arttir}>Arttir</button>
        <button onClick={azalt}>Azalt</button>
      </div>
    </div>
  )
}

export default App
