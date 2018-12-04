import { fetchDatas } from "./FetchData";

export const deleteDataSuccess = (res) => ({
    type : 'PUT_FORM_SUCCESS', 
    payload : {res}
})


export const deleteDataError  = (error) => ({ 
    type : 'PUT_FORM_ERROR', 
    payload : {error}
})

function handleError(response){
   
    if (!response.ok){
        throw Error(response.statusText)
    }
   return response
}


export function deleteData(category, id){ 
    return (dispatch) => { 
        return fetch(`http://localhost:4000/admin/${category}/delete/${id}`, {
        method : 'DELETE', 
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
       })
       .then(handleError)
       .then(res => res.json())
       .then(res => {
           console.log('res', res)
           dispatch(fetchDatas(category))
       }, 
        err => {
            dispatch(deleteData(err));
            console.log('erreur de response', err)
        })
    }
 }