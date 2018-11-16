export const fetchDataBegin = () => ({
    type : 'FETCH_DATA_BEGIN', 
})

export const fetchDataSuccess = (datas) => ({
    type : 'FETCH_DATA_SUCCESS', 
    payload : {datas}
})

export const fetchDataError = (error) => ({
    type : 'FETCH_DATA_ERROR', 
    payload : {error}
})

function handleError(response){
    if (!response.ok){
        throw Error(response.statusText)
    }
    return response
}



export function fetchDatas(){
    return(dispatch) => {
        dispatch(fetchDataBegin()); 
        return fetch('http://localhost:3000/api/bestiaire', {
            method : 'POST'
        })
        .then(handleError)
        .then(res => res.json())
        .then(json => {
            dispatch(fetchDataSuccess(json));
            return json
        })
        .catch(error => dispatch(fetchDataError(error)))
    }
}