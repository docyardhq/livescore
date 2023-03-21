import { responsiveProperty } from "@mui/material/styles/cssUtils";

const API_KEY ="2a8b9485-f848-447c-9db1-1f39345d3cc5"

//All the upcoming matches

export const getMatches=()=>{
    const url=`https://api.cricapi.com/v1/matches?apikey=2a8b9485-f848-447c-9db1-1f39345d3cc5&offset=0`

    return fetch(url)
    .then((response) => response.json())
    .catch((error)=>console.log("ERROR :", error));
}