import './App.css'
import useCounter from './hooks/useCounter'
import useToogle from './hooks/useToggle';

function App() {

  const { count, increase, decrease } = useCounter();
  const { open, change } = useToogle();

  return (
    <div>
      <div>{count}</div>
      <button onClick={increase}>Arttir</button>
      <button onClick={decrease}>Azalt</button>

      <hr />
      {
        open && <div style={{ width: '100px', height: '100px', background: 'red' }}>kutu</div>
      }
      <button onClick={change}>{open ? 'Gizle' : 'Göster'}</button>
    </div>
  )
}

export default App
