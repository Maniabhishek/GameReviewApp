import {gameDetailsURL,gameScreenshotURL} from "../api";
import axios from "axios";

export const detailAction = (id) => async( dispatch )=>{

    dispatch({
        type:'ISLOADING',
    })

    const detailData = await axios.get(gameDetailsURL(id));
    const screenShotData = await axios.get(gameScreenshotURL(id));

    dispatch({
        type:"FETCH_DETAIL",
        payload:{
            gameDetail:detailData.data,
            screenshot:screenShotData.data,
        }
    })

}