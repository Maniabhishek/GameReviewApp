const initState = {
    popular:[],
    newGames:[],
    upcoming:[],
    searched:[],
    isLoading:false,
}

export const gameReducer = (state=initState,action)=>{
    switch(action.type){
        case 'FETCH_GAMES':
            return {...state,
                popular:action.payload.popular,
                upcoming:action.payload.upcoming,
                newGames:action.payload.newGames,
                isLoading:false,
                
            };
        
        case 'SEARCHED_GAME':
            return {
                ...state,
                searched:action.payload.searched,
            }

        case 'CLEAR_SEARCH':
            return {
                ...state,
                searched:[],
            }
        case 'ISLOADING':
            return {
                ...state,
                isLoading:true,
            }
        default:
            return state;
    }
}

