export const postFormAdminSuccess = (json) => ({
    type : 'FORM_ADMIN_SUCCESS', 
    payload : {json}
})

export const postFormAdminError = (error) => ({
    type : 'FORM_ADMIN_ERROR', 
    payload : {error}
})



function handleError(response){
   
    if (!response.ok){
        throw Error(response.statusText)
    }
   return response
}


export function getFormAdmin(formAdmin){
   return(dispatch) => {
        return fetch('http://localhost:4000/admin', {
            method : 'POST', 
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            body : JSON.stringify(formAdmin)
        })
        .then(handleError)
        .then(res => res.json())
        .then(
            res => {
                dispatch(postFormAdminSuccess(res));
            },
            err => {
                dispatch(postFormAdminError(err)); 
                console.log('erreur de response', err)
            }
        )
    }
}