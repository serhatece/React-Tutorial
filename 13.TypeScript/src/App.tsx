import './App.css'

function App() {

  //! string , boolean , number
  //! interface - type = kendi tipimizi oluşturmaya yarar.

  type User = {
    name : string,
    age : number
  }

  interface User2{
    name : string,
    age : number
  }

  // let array :string[] = [];
  // let array2 :User[] = [{name: "Ali", age: 19}];

  const object1 : User = {
    name : "Serhat",
    age : 20
  }

  const object2 : User2 = {
    name : "Harun",
    age : 21
  }

  console.log(object1)
  console.log(object2)




  //! Function : Çok önemli!!!

  function topla(a:number,b:number):number | string{
    return a + b
  }

  const sonuc = topla(17,9);

  console.log(sonuc)

  // void : geriye bir şey döndürmeyen metottur.

  function write(array : Array<string>) :void{
    array.forEach((value:string)=>console.log(value))
  }

  let array: Array<string> = ["enes","ali","yagmur"]

  write(array)

  return (
    <div>
      TypeScript
    </div>
  )
}

export default App
