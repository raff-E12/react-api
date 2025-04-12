import React, { useEffect, useState } from 'react'

/**
 * Descrizione:
 * @argument SearchSc - componente di ricerca della lista
 * @function Ham - Esportazione del valore e alternazione di chiusura con la sezione form
 */

export default function SearchSc({Ham, searchValue, SetSearch}) {
    const [isOpen, setOpen] = useState(true);

    const handleInputValueimport = () =>{
      let value_input = String(document.getElementById("search-id").value);
      SetSearch(value_input);
    }

  return (
    <>
    <div className='btn btn-search flex' onClick={() => {setOpen( value => !value)}}>
      <i class="fa-solid fa-magnifying-glass"></i>
    </div>
    <div className={`container-main box-search rounded-2xl ${isOpen || !Ham ? "none" : "show"}`}>
        <input type="text" name="search-box" id="search-id" placeholder='Cerca...'/>
        <button className='btn btn-inp' onClick={()=>{handleInputValueimport()}}>Add</button>
    </div>
    </>
  )
}
