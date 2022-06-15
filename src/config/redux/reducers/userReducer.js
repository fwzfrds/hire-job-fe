const initialState = {
    users: {
        
    },
    isLoading: false
}

const userReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'GET_USER_PENDING':
            return {
                ...state,
                isLoading: true
            }
        case 'GET_USER_SUCCESS':
            return {
                ...state,
                users: action.payload,
                isLoading: false
            }
        case 'GET_USER_ERROR':
            return {
                ...state,
                isLoading: false
            }
        case 'REGIS_USER_PENDING':
            return {
                ...state,
                isLoading: true
            }
        case 'REGIS_USER_SUCCESS':
            return {
                ...state,
                users: action.payload,
                isLoading: false
            }
        case 'REGIS_USER_ERROR':
            return {
                ...state,
                isLoading: false
            }
        case 'LOGIN_USER_PENDING':
            return {
                ...state,
                isLoading: true
            }
        case 'LOGIN_USER_SUCCESS':
            return {
                ...state,
                isLoading: false
            }
        case 'LOGIN_USER_ERROR':
            return {
                ...state,
                isLoading: false
            }

        default:
            return state
    }

    // if(action.type === 'USER_LOGIN_PENDING'){
    //     return {
    //         ...state,
    //         isLoading: true
    //     }
    // }else if(action.type === 'USER_LOGIN_SUCCESS'){
    //     return{
    //         ...state,
    //         user: action.payload,
    //         isLoading: false
    //     }
    // }else{
    //     return state
    // }
}

export default userReducer