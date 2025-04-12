
// Impostazione e Settaggio dell'Api in comunicazione.

/**
 * Descrizione:
 * @augments - Chiamata Api con Axios ed esportazione dati.
 * @generator - Ho implementato diverse variabili url per testare l'api purttroppo ho riscrontato diversi errori
 * di CORS Policy, dove il browser blocca le transizioni sconosciute dall'api utlizzato, quindi ho generato lo elenco
 * da un altro sito permettendo di bypassare la protezione.
 * 
 * @function handleApiCommunications - Funzione di chiamata all'api esportabile su una variabile di stato a un altro componente.
 */

import axios from "axios";
import Actors from "./Actors.json"
import Actresses from "./Actresses.json"

const list_actresses = "https://dummyjson.com/c/2b76-4cd5-41b3-b2a2";
const list_actor =  "https://dummyjson.com/c/94b3-0476-40e6-b73b";
const old_actors_api = " https://freetestapi.com/api/v1/actresses"; // risposta negata in errore (rif: cookies).
const list_poke_test = "https://pokeapi.co/api/v2/pokemon/ditto";
const list_local_1 = Actors;
const list_local_2 = Actresses;

 async function handleApiCommunications(){
    try {
        const response = await axios.get(list_actor);
        return response.data;
      } catch (error) {
        console.error("Log dell'errore:", error);
        return error
      }
}

export{
    handleApiCommunications,
    list_actor,
    list_actresses,
    list_local_1
}
