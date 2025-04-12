import { useEffect, useState } from 'react'
import './App.css'
import Header from './assets/Header'
import SearchSc from './assets/SearchSc'
import { handleApiCommunications } from './assets/Api_Actor'
import ContentsCards from './assets/ContentsCards'

/**
 * Descrizione:
 * @function isHam|setHam - esportazione di funzione in base al apertura del form.
 * @function Data_list - Trasporta la chiamata api nell'array per poi passarlo al componente "ContentsCards".
 * @function setSearchList - Implementazione di ricerca sulle relative card partendo dal nome.
 */

function App() {
  const [isHam, setHam] = useState(true);
  const [isApi, setApi] = useState([]);
  const [isSearch, SetSearch] = useState("");

  async function Data_list() {
    try {
      const data = await handleApiCommunications();
      setApi(data);
    } catch (error) {
      console.log(error);
    }
   }

   function setSearchList () {
    //  console.log(isSearch);
     const list_search = isApi.filter( list => list.name.includes(isSearch));
    //  console.log(list_search);
     const validate_result = JSON.stringify(isApi) === JSON.stringify(list_search); // Confronto tra due valori di espressi un json restituito.
     setApi( list => {return list_search.length === 0 || validate_result ? list : list_search})
   }

  useEffect(() => { Data_list() }, [isSearch]);
  useEffect(() =>{ if (isSearch !== "") return setSearchList() }, [isApi])

  return (
    <>
    <Header setOpen={setHam} isOpen={isHam} setsList={setApi} Api={isApi}/>
    <SearchSc searchValue={isSearch} SetSearch={SetSearch}/>
    <ContentsCards list={isApi}/>
    </>
  )
}

export default App
