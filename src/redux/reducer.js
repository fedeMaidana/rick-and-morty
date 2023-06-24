const initialState = {
    myFavorites: []
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case 'ADD_FAV':
            return {...state, myFavorites: [...state.myFavorites, action.payload]};

        case 'REMOVE_FAV':
            const updateFavorites = state.myFavorites.filter(character => character.id !== action.payload)

            return {...state, myFavorites: updateFavorites}

        default:
            return state
    }
}

export default reducer 