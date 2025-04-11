import React from 'react'

export default function Header() {
  return (
   <header className='header-sc container-main flex'>
      <div className='hd-container flex'>
      <div className='icon-box'>
        <i className="fa-solid fa-bars"></i>
      </div>
      <h3 className='text-hero text-center'>BooLean Movie</h3>
      <button className='btn btn-primary'>Cerca</button>
      </div>
   </header>
  )
}
