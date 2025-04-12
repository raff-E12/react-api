import React from 'react'
import Cards from './Cards'

export default function ContentsCards({list}) {
    const export_list = list;
  return (
    <div className={`container-main ${export_list.length ===  0 ? "flex" : "grid"} cards-content`}>
        {export_list.length === 0 ? <div className='fluid flex-center'>
           <h4 className='highlight'>Loading...</h4>
            </div> : <Cards listsEx={list}/>}
    </div>
  )
}
