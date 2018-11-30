const initialState = {
    error: null,
    response: {},
    isSuccess: false
}

const FormAdmin = (state = initialState, action) => {
    console.log('je rentre dans auth reducers')
    switch (action.type) {
        case 'FORM_ADMIN_SUCCESS':
            if (action.payload.json.flash === 'ok') {
                return {
                    ...state,
                    response: action.payload.json,
                    isSuccess: true
                }
            } else if
                (action.payload.json.flash === 'Not a yet a Success'){
                    return {
                        ...state,
                        response: action.payload.json,
                        isSuccess: false
                    }
                }
        break   
        case 'FORM_ADMIN_ERROR':
            return {
                ...state,
                error: true,
                isSuccess: false
            }

        default:
            return state;
    }
}

export default FormAdmin