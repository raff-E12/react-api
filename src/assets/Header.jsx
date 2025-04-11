import React from 'react'

/**
 * Descrizione:
 * @augments - Componente Header della Pagina
 * 
 */


export default function Header() {
  return (
   <header className='header-sc container-main flex relative'>
      <div className='hd-container flex'>
      <div className='icon-box'>
        <i className="fa-solid fa-bars"></i>
      </div>
      <h3 className='text-hero text-center'>BooLean Movie</h3>
      <button className='btn btn-primary'>Cerca</button>
      </div>
      <div className='left-menu-sc fixed'>
         <div className='title-menu'>
            <h2>Aggiungi un Attore:</h2>
         </div>
        <form action="#" method="POST" enctype="multipart/form-data" className='form'>
        <fieldset className='list-form flex'>
            <legend>Dati Attore</legend>

            <div className='section-form'>
            <label for="nome">Nome:</label>
            <input type="text" id="nome" name="nome" required />
            </div>

            <div className='section-form'>
            <label for="anno_nascita">Anno di nascita:</label>
            <input type="number" id="anno_nascita" name="anno_nascita" min="1900" max="2100" required />
            </div>

            <div className='section-form'>
            <label for="nazionalita">Nazionalità:</label>
            <input type="text" id="nazionalita" name="nazionalita" required />
            </div>

            <div className='section-form'>
            <label for="biografia">Biografia:</label>
            <textarea id="biografia" name="biografia" rows="6" required></textarea>
            </div>

            <div className='section-form'>
            <label for="immagine">Immagine profilo:</label>
            <input type="file" id="immagine" name="immagine" accept="image/*" required />
            </div>

            <div className='section-form'>
            <label for="riconoscimenti">Riconoscimenti:</label>
            <textarea id="riconoscimenti" name="riconoscimenti" rows="4"></textarea>
            </div>

            <div className='section-form'>
            <label for="galleria">Altre immagini (opzionali):</label>
            <input type="file" id="galleria" name="galleria[]" accept="image/*" multiple />
            </div>

            <div className='section-form'>
            <button type="submit">Salva Attore</button>
            </div>
        </fieldset>
        </form>
      </div>
   </header>
  )
}
