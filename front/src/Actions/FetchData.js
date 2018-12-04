export const fetchDataBegin = (category) => ({
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



export function fetchDatas(category){
    return(dispatch) => {
        dispatch(fetchDataBegin(category)); 
        const url = `http://localhost:3000/api/${category}`;
        // console.log('url dans action redux', url)
        return fetch(url, {
            method : 'POST'
        })
        .then(handleError)
        .then(res => res.json())
        .then(json => {
            dispatch(fetchDataSuccess(json));
            // console.log('json de bestiaire ou vegetal', json)
            return json
        })
        .catch(error => dispatch(fetchDataError(error)))
        
    }
}