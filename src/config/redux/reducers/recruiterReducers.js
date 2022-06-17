const initialState = {
    recruiters: {
        name: ''
    },
    isLoading: false
}

const recruiterReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'GET_RECRUITER_PENDING':
            return {
                ...state,
                isLoading: true
            }
        case 'GET_RECRUITER_SUCCESS':
            return {
                ...state,
                recruiters: action.payload,
                isLoading: false
            }
        case 'GET_RECRUITER_ERROR':
            return {
                ...state,
                isLoading: false
            }

        case 'REGIS_RECRUITER_PENDING':
            return {
                ...state,
                isLoading: true
            }
        case 'REGIS_RECRUITER_SUCCESS':
            return {
                ...state,
                // users: action.payload,
                isLoading: false
            }
        case 'REGIS_RECRUITER_ERROR':
            return {
                ...state,
                isLoading: false
            }

        case 'LOGIN_RECRUITER_PENDING':
            return {
                ...state,
                isLoading: true
            }
        case 'LOGIN_RECRUITER_SUCCESS':
            return {
                ...state,
                isLoading: false
            }
        case 'LOGIN_RECRUITER_ERROR':
            return {
                ...state,
                isLoading: false
            }

        default:
            return state
    }

}

export default recruiterReducer