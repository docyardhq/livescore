const API_KEY = "2a8b9485-f848-447c-9db1-1f39345d3cc5"

export const getMatches=()=>{
    const url=`https://api.cricapi.com/v1/matches?apikey=${API_KEY}&offset=0`;
    console.log("URL", url);
    return fetch(url)
    .then((response)=>response.json())
    .catch((error)=>console.log("ERROR : ",error))
}