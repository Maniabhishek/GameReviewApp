const initState = {
    gameDetail:{platforms:[]},
    screenshot:{results:[]},
    isLoading:false,
}

export const detailReducer = (state=initState,action)=>{
    switch(action.type){
        case 'FETCH_DETAIL':
            return {
                ...state,gameDetail:action.payload.gameDetail,screenshot:action.payload.screenshot,isLoading:false
            }

        case 'ISLOADING':
            return {
                ...state,isLoading:true
            }    
        default :
            return {
                ...state
            }
    }
}