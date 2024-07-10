import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [firstName, setfirstName] = useState('');
  const [lastName, setlastName] = useState('');

  useEffect(() => {
    console.log("Her zaman çalişir")
  })

  useEffect(() => {
    console.log("İlk render edildiğinde çalişir")
  }, [])

  useEffect(() => {
    console.log("İlk render edilidiğinde ve firstName state degeri değiştiğinde çalişir")
  }, [firstName])

  useEffect(() => {
    console.log("İlk render edilidiğinde ve lastName state degeri değiştiğinde çalişir")
  }, [lastName])


  return (
    <div>
      <div><button onClick={() => setfirstName("Enes")}>Adi Değiştir</button></div>
      <div><button onClick={() => setlastName("Bayram")}>Soyadi Değiştir</button></div>
    </div>
  )
}

export default App
