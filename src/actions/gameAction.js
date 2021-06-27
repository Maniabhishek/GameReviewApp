import {popularGamesURL,newGamesURL} from "../api";
import {upcomingGamesURL,searchGameURL} from "../api";
import axios from "axios";

export const loadGames = () => async (dispatch)=>{

    dispatch({
        type:'ISLOADING',
    })

    const gameData = await axios.get(popularGamesURL());
    const upComingGmeData = await axios.get(upcomingGamesURL());
    const newGamesData = await axios.get(newGamesURL());

    dispatch({
        type:"FETCH_GAMES",
        payload:{
            popular:gameData.data.results,
            upcoming:upComingGmeData.data.results,
            newGames:newGamesData.data.results,
            
        },
    })
}

export const searchedGames = (searchedGame) =>async (dispatch)=>{

    const searchedData = await axios.get(searchGameURL(searchedGame));

    dispatch({
        type:"SEARCHED_GAME",
        payload:{
            searched:searchedData.data.results,
        },
    })
}

export const clearSearched = () =>{
    return {
        type:'CLEAR_SEARCH',
    }
}