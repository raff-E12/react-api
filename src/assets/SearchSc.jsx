import React, { useState } from 'react'

/**
 * Descrizione:
 * @argument SearchSc - componente di ricerca della lista
 * @function Ham - Esportazione del valore e alternazione di chiusura con la sezione form
 */

export default function SearchSc({Ham}) {
    const [isOpen, setOpen] = useState(true);

  return (
    <>
    <div className='btn btn-search flex' onClick={() => {setOpen( value => !value)}}>
      <i class="fa-solid fa-magnifying-glass"></i>
    </div>
    <div className={`container-main box-search rounded-2xl ${isOpen || !Ham ? "none" : "show"}`}>
        <input type="text" name="search-box" id="search-id"/>
        <button className='btn btn-inp'>Add</button>
    </div>
    </>
  )
}
