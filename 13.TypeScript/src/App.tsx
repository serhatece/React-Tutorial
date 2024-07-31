import './App.css';

function App() {

  //! 1. Temel Tipler
  // string, number, boolean gibi temel tipler

  const isim: string = "Serhat";
  const yas: number = 20;
  const aktif: boolean = true;

  console.log(isim, yas, aktif);

  //! 2. Union Types
  // Birden fazla tipi aynı anda kullanabilme

  let id: number | string = 123;
  id = "ABC123";
  
  console.log(id);

  //! 3. Type ve Interface
  // Kendi tiplerimizi oluşturmak için kullanılır.

  // Type Kullanımı
  type User= {
    name: string;
    age: number;
  };

  // Interface Kullanımı
  interface User2 {
    name: string;
    age: number;
  }

  // Nesne Tanımlamaları
  const object1: User = {
    name: "Serhat",
    age: 20
  };

  const object2: User2 = {
    name: "Harun",
    age: 21
  };

  console.log(object1);
  console.log(object2);

  //! 4. Fonksiyonlar
  // Fonksiyon tanımlama ve kullanımı

  function topla(a: number, b: number): number {
    return a + b;
  }

  const sonuc = topla(17, 9);
  console.log(sonuc);

  // void: Geriye bir değer döndürmeyen fonksiyon
  function write(array: Array<string>): void {
    array.forEach((value: string) => console.log(value));
  }

  const array: Array<string> = ["enes", "ali", "yagmur"];
  write(array);

  //! 5. Generic Yapılar
  // Türden bağımsız çalışabilen kodlar

  function yazdir<T>(array: T[]): void {
    console.log(array);
  }

  yazdir(["enes", "ali"]);
  yazdir([1, 2]);
  yazdir([true, false]);

  //! 6. Extending Yapılar (Miras Alma)
  // Ortak alanları miras almak için kullanılır.

  interface OrtakAlanlar {
    id: string;
    olusturmaTarihi: string;
    olusturanKisi: string;
  }

  interface Kurum extends OrtakAlanlar {
    MusteriNo: string;
  }

  const kurum: Kurum = {
    id: "1",
    olusturmaTarihi: "01/01/2024",
    olusturanKisi: "Serhat",
    MusteriNo: "24"
  };

  console.log(kurum);

  //! 7. Utility Types
  // Nesne özelliklerini yönetmek için kullanılır: Partial, Required, ReadOnly, Pick, Omit

  // Partial: Tüm özellikleri isteğe bağlı hale getirir.
  interface User {
    name: string;
    age: number;
  }

  const user1: Partial<User> = {
    name: "Serhat",
    age: 21
  };

  console.log(user1);

  // Required: Tüm özellikleri zorunlu hale getirir.
  const user2: Required<User> = {
    name: "Harun",
    age: 22,
  };

  console.log(user2);

  // ReadOnly: Tüm özellikleri sadece okunabilir hale getirir.
  const user3: Readonly<User> = {
    name: "Ayşe",
    age: 23,
  };

  console.log(user3);

  // Pick: Belirli özellikleri seçip, setlenmesi zorunlu hale getirir.
  const user4: Pick<User, 'name' | 'age'> = {
    name: "Ahmet",
    age: 24
  };

  console.log(user4);

  // Omit: Belirli özellikleri çıkarıp, geriye kalanları setlenmesi zorunlu hale getirir.
  const user5: Omit<User, 'tckn'> = {
    name: "Mehmet",
    age: 25
  };

  console.log(user5);

  return (
    <div>
      TypeScript Öğreniyorum!
    </div>
  );
}

export default App;
