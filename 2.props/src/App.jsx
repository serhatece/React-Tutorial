import './App.css'
import Product from './Product'
import Container from './Container';

function App() {

  const productName = "Buzdolabi";
  const price = 7500;


  return (
    <div>
      <Product productName="Ayakkabi" price={3200} />
      <hr />
      <Product productName="Pantalon" price={750} />
      <hr />
      <Product productName={productName} price={price} />

      <Container>
        <Product productName="Telefon" price={4000} />
      </Container>

    </div>
  )
}

export default App
