const initialState = {
    datas : [], 
    loading : false,
    error : null, 
}


const Bestiaire = (state = initialState, action) =>{
    switch (action.type) {
        case 'FETCH_DATA_BEGIN': 
        return {
            ...state, 
            loading : true,
            error : null, 
        }
        case 'FETCH_DATA_SUCCESS': 
        return {
            ...state, 
            loading : false,
            datas : action.payload.datas
        }
        case 'FETCH_DATA_ERROR':
        return {
            ...state, 
            loading : false, 
            error : action.payload.error,
            datas : []
        }
        default:
        return state;
    }
}

export default Bestiaire;