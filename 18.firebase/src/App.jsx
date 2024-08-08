import './App.css'
import Navbar from './components/Navbar'
import RouterConfig from './config/RouterConfig'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {

  return (
    <div>
      <Navbar />
      <RouterConfig />
      <ToastContainer position='top-right' autoClose={2500} />
    </div>
  )
}

export default App
