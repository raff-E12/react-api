import { useEffect, useState } from 'react'
import './App.css'
import Header from './assets/Header'
import SearchSc from './assets/SearchSc'
import { handleApiCommunications, list_actor } from './assets/Api_Actor'
import axios from 'axios'

/**
 * Descrizione:
 * @function isHam|setHam - esportazione di funzione in base al apertura del form
 * 
 */

function App() {
  const [isHam, setHam] = useState(true);
  const [isApi, setApi] = useState(null);

  useEffect(()=>{
   async function Data_list() {
    try {
      const data = await handleApiCommunications();
      setApi(data);
      console.log(isApi);
    } catch (error) {
      console.log(error);
    }
   }

   Data_list()
  },[])

  return (
    <>
    <Header setOpen={setHam} isOpen={isHam}/>
    <SearchSc Ham={isHam} />
    </>
  )
}

export default App
