import { fetchDatas } from "./FetchData";

export const postFormDataSuccess = (res) => ({
    type : 'PUT_FORM_SUCCESS', 
    payload : {res}
})


export const postFormDataError  = (error) => ({ 
    type : 'PUT_FORM_ERROR', 
    payload : {error}
})

function handleError(response){
   
    if (!response.ok){
        throw Error(response.statusText)
    }
   return response
}


export function postFormData(form,category){ 
    return (dispatch) => { 
        return fetch(`http://localhost:4000/admin/${category}/new`, {
        method : 'POST', 
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        body : JSON.stringify(form)
       })
       .then(handleError)
       .then(res => res.json())
       .then(res => {
           console.log('res', res)
           dispatch(fetchDatas(category))
       }, 
        err => {
            dispatch(postFormDataError(err));
            console.log('erreur de response', err)
        })
    }
 }