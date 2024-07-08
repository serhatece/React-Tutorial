import './App.css'

function App() {
  // Jsx : {}
  // Javascript kodları yazılır

  let a = 15;
  const firstName = "Serhat";
  let vize1 = 80;
  let vize2 = 60;

  let sonuc = true;

  let isimler = [
    "ahmet1",
    "ahmet2",
    "ahmet3",
    "ahmet4"
  ]

  return (
    // Html kodları yazılır
    <div>
      <p>a değişkeni : {a}</p>
      <p>isim değişkeni : {firstName}</p>
      <p>Ort : {(vize1 + vize2) / 2}</p>
      {sonuc ? <p>Ehliyet alabilirsin</p> : <p>Ehliyet alamazsin</p>}
      {
        (vize1 + vize2) / 2 >= 50 ? <p>Dersten geçtin</p> : <p>Dersten kaldin</p>
      }

      {
        isimler.map((isim, index) => (
          <div style={{
            backgroundColor: "orange",
            border: "1px solid black",
          }} key={index}>{isim}</div>
        ))
      }
    </div>
  )
}

export default App
