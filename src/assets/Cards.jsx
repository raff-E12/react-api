import React from 'react'
import { list_local_1 } from './Api_Actor';

// Renderizzazione delle Cards

export default function Cards({listsEx}) {
    const list_export = listsEx;
    // console.log(listsEx);
  return (
    <>
    {list_export.map((element, index) =>{
        return(
            <div key={element.id} className='card flex-center column-flex'>
                <div className='img-box-card'>
                    <div className='fluid'>
                      <img src={element.image} alt="actor-img"/>
                    </div>
                </div>
                <div className='text-card flex'>
                   <h5 className='title-secondary'>{element.name}</h5>
                   <p>{element.biography}</p>
                   <p><b>Nascita:</b> {!element.death_year ? element.birth_year : `${element.birth_year} - ${element.death_year}`}.</p>
                   <p><b>Riconoscimenti:</b> {element.awards.findIndex( value => value !== "None" ) ? "Nessuno" : element.awards.join(" , ")}.</p>
                </div>
            </div>
        )
    })}
    </>
  )
}
