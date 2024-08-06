import './App.css'
import MUIAccordion from './components/MUIAccordion'
import MUIAppbar from './components/MUIAppbar'
import MUIAutoComplete from './components/MUIAutoComplete'
import MUIBadge from './components/MUIBadge'
import MUIButton from './components/MUIButton'
import MUICard from './components/MUICard'
import MUICheckbox from './components/MUICheckbox'
import MUIDrawer from './components/MUIDrawer'
import MUIGrid from './components/MUIGrid'
import MUIImageList from './components/MUIImageList'
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
      <MUIAccordion />
      <MUIAppbar />
      <MUIImageList />
      <MUIDrawer />
      <MUIBadge />
    </div>
  )
}

export default App
