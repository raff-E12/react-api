
// Impostazione e Settaggio dell'Api in comunicazione.

import axios from "axios";
import Actors from "./Actors.json"

const list_actresses = "https://freetestapi.com/api/v1/actresses";
const list_actor = "https://freetestapi.com/api/v1/actors";
const list_local = Actors;

 async function handleApiCommunications(){
    try {
        const response = await axios.get(list_actor);
        return response.data;
      } catch (error) {
        console.error("Log dell'errore:", error);
        throw error; // puoi anche gestirlo diversamente se vuoi
      }
}

export{
    handleApiCommunications,
    list_actor,
    list_actresses
}
