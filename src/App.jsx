import { useState } from 'react'
import './App.css'
import Header from './assets/Header'
import SearchSc from './assets/SearchSc'

/**
 * Descrizione:
 * @function isHam|setHam - esportazione di funzione in base al apertura del form
 * 
 */

function App() {
  const [isHam, setHam] = useState(true);

  return (
    <>
    <Header setOpen={setHam} isOpen={isHam}/>
    <SearchSc Ham={isHam} />
    </>
  )
}

export default App
