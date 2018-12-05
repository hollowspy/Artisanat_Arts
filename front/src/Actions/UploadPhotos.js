function handleError(response){
   
    if (!response.ok){
        throw Error(response.statusText)
    }
    console.log(response)
    return response
}



export function UploadPhotos(categorie, form){
    console.log(form, categorie)
    return (dispatch) => {
        return fetch ('http://localhost:4000/upload/upload_bestiaire', {
            method : 'POST', 
            body : form
        })
        .then(handleError)
        .then(res => res.json())
        .then(res => {
            return res
        }, 
        err => {
            console.log(err)
        }
    
        )
    }
}