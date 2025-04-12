import { useEffect, useState } from 'react'
import './App.css'
import Header from './assets/Header'
import SearchSc from './assets/SearchSc'
import { handleApiCommunications } from './assets/Api_Actor'
import ContentsCards from './assets/ContentsCards'

/**
 * Descrizione:
 * @function isHam|setHam - esportazione di funzione in base al apertura del form
 * @function isApi|SetApi - Trasporta la chiamata api nell'array per poi passarlo al componente "ContentsCards"
 * 
 */

function App() {
  const [isHam, setHam] = useState(true);
  const [isApi, setApi] = useState([]);

  useEffect(()=>{
   async function Data_list() {
    try {
      const data = await handleApiCommunications();
      setApi(data);
    } catch (error) {
      console.log(error);
    }
   }

   Data_list()
  },[isApi])

  return (
    <>
    <Header setOpen={setHam} isOpen={isHam}/>
    <SearchSc Ham={isHam} />
    <ContentsCards list={isApi}/>
    </>
  )
}

export default App
