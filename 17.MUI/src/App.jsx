import './App.css'
import MUIAutoComplete from './components/MUIAutoComplete'
import MUIButton from './components/MUIButton'
import MUICard from './components/MUICard'
import MUICheckbox from './components/MUICheckbox'
import MUIGrid from './components/MUIGrid'
import MUISelect from './components/MUISelect'
import MUIStack from './components/MUIStack'
import MUITextField from './components/MUITextField'

function App() {

  return (
    <div>
      <MUIButton />
      <MUITextField />
      <MUISelect />
      <MUICheckbox />
      <MUIAutoComplete />
      <MUIStack />
      <MUIGrid />
      <MUICard />
    </div>
  )
}

export default App
