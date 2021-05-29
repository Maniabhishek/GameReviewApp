import {popularGamesURL} from "../api";
import {useDispatch} from "react-redux"
import axios from "axios";

const FETCH_GAMES = 'FETCH_GAMES';

// actionn creator

export const loadGames = ()=>async (dispatch) =>{
    const gameData = await axios.get(popularGamesURL());
    console.log("😙",gameData);
    dispatch({
        type:"FETCH_GAMES",
        payload:{
            popular:gameData.data.results,
        }
    })
}

