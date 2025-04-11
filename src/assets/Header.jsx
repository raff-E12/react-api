import React, { useState } from 'react'

/**
 * Descrizione:
 * @augments - Componente Header della Pagina
 * @function SetOpen - Apertura e chiusura della sezione form
 */


export default function Header({setOpen, isOpen}) {

  return (
   <header className='header-sc container-main flex relative'>
      <div className='hd-container flex'>
      <div className='icon-box' onClick={()=>{setOpen( value => !value)}}>
        <i className="fa-solid fa-bars"></i>
      </div>
      <h3 className='text-hero text-center'>BooLean Movie</h3>
      <button className='btn btn-primary'>Login</button>
      </div>
      <div className={`left-menu-sc fixed flex ${isOpen ? "none" : "show"}`}>
         <div className='title-menu flex'>
             <div className='fluid reverse'>
                <div className='icon-box' onClick={()=>{setOpen( value => !value)}}>
                  <i class="fa-solid fa-xmark"></i>
                </div>
             </div>
            <h4 className='lead'>Aggiungi un Attore:</h4>
         </div>
       <div className='form-sc flex'>
         <ul className='list-form flex'>
           <li className='input-form'>
             <label id='index-nome'>Nome:</label>
             <input type="text" className='input' id='name-id' placeholder='Inserisci...'/>
           </li>
           <li className='input-form'>
             <label id='index-born'>Nascita:</label>
             <input type="text" className='input' id='born-id' placeholder='Inserisci...'/>
           </li>
           <li className='input-form'>
             <label id='index-country'>Nazionalità:</label>
             <input type="text" className='input' id='cont-id' placeholder='Inserisci...'/>
           </li>
           <li className='input-form'>
             <label id='index-bio'>Biografia:</label>
             <textarea name="bio-sc" id="bio-id" placeholder='Inserisci...'></textarea>
           </li>
           <li className='input-form'>
             <label id='index-img'>Immagine:</label>
             <input type="text" className='input' id='img-id' placeholder='Inserisci...'/>
           </li>
           <li className='input-form'>
             <label id='index-ric'>Riconoscimenti:</label>
             <input type="text" className='input' id='ric-id' placeholder='Inserisci...'/>
           </li>
           <li className='input-form'>
             <button className='btn btn-sub'>Inserisci</button>
           </li>
         </ul>
       </div>
      </div>
   </header>
  )
}
