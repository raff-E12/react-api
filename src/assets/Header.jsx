import React, { useState } from 'react'

/**
 * Descrizione:
 * @augments - Componente Header della Pagina
 * @function SetOpen - Apertura e chiusura della sezione Form.
 * @function handleNewCardsParm - Implemtazione dei parametri configurati tramite la usestate
 * @function handleNewCardsAdd - controllo dei valori dell'oggetto e aggiunta di nuove card nella lista API
 * @object IsParm - Oggetto di contenimento di parametri
 * @hooks - implementazione della usestate sul controllo dei parametri di input
 */


export default function Header({setOpen, isOpen, setsList, Api}) {
   const [isName, setName] = useState("");
   const [isBirth, setBirth] = useState("");
   const [isDeath, setDeath] = useState("");
   const [isNation, setNation] = useState("");
   const [isAward, setAward] = useState([]);
   const [isBio, SetBio] = useState("");
   const [isImg, setImg] = useState("");

  let isParm ={
    name: isName,
    birth_year: isBirth,
    death_year: isDeath,
    nationality: isNation,
    awards: isAward,
    biography: isBio, 
    image: isImg
 };

  const handleNewCardsParm = (e) =>{
    const { id, value } = e.target;
    // console.log(value);
    const value_string = String(value);
    switch (id) {
      case "name-id":
        setName(value_string)
      break;

      case "born-id":
        setBirth(value_string)
      break;

      case "cont-id":
       setNation(value_string)  
      break;

      case "bio-id":
        SetBio(value_string)
      break;

      case "img-id":
        setImg(value_string)
      break;

      case "ric-id":
        setAward(value_string.split(","))
      break;

      case "death-id":
        setDeath(value_string);
      break;
    }
  };

  const handleNewCardsAdd = () =>{
    // console.log(isParm);

    // Accede a tutte le proprietà dell'oggetto.
    for (const key in isParm) {
      if (isParm.hasOwnProperty(key) && isParm[key] === "") {
        return window.alert("Inserisci Le Informazioni nei Form, Grazie!!");
      }
    }

    setName("");
    setBirth("");
    setImg("");
    setDeath("");
    setNation("");
    setAward([])
    SetBio("")

    return setsList( list => { return [...list, {id: list[list.length - 1].id + 1, ...isParm}]})
  };

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
             <label id='index-nome'>Nome e Cognome:</label>
             <input type="text" className='input' id='name-id' value={isName} placeholder='Inserisci...' onChange={handleNewCardsParm}/>
           </li>
           <li className='input-form'>
             <label id='index-born'>Anno di Nascita:</label>
             <input type="text" className='input' id='born-id' value={isBirth} placeholder='Inserisci...' onChange={handleNewCardsParm}/>
           </li>
           <li className='input-form'>
             <label id='index-country'>Nazionalità:</label>
             <input type="text" className='input' id='cont-id' value={isNation} placeholder='Inserisci...' onChange={handleNewCardsParm}/>
           </li>
           <li className='input-form'>
             <label id='index-bio'>Biografia:</label>
             <textarea name="bio-sc" id="bio-id" value={isBio} placeholder='Inserisci...' onChange={handleNewCardsParm}></textarea>
           </li>
           <li className='input-form'>
             <label id='index-img'>Immagine:</label>
             <input type="text" className='input' value={isImg} id='img-id' placeholder='Inserisci...' onChange={handleNewCardsParm}/>
           </li>
           <li className='input-form'>
             <label id='index-ric'>Riconoscimenti:</label>
             <input type="text" className='input' value={isAward} id='ric-id' placeholder='Inserisci...' onChange={handleNewCardsParm}/>
           </li>
           <li className='input-form'>
             <label id='index-ric'>Anno di Decesso:</label>
             <input type="text" className='input' value={isDeath} id='death-id' placeholder='Inserisci...' onChange={handleNewCardsParm}/>
           </li>
           <li className='input-form'>
             <button className='btn btn-sub' onClick={() => {handleNewCardsAdd()}}>Inserisci</button>
           </li>
         </ul>
       </div>
      </div>
   </header>
  )
}
