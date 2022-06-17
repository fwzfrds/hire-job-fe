const initialState = {
    users: {
        name: '',
        role: ''
    },
    isLoading: false
}

export const userReducer = (state = initialState, action) => {

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
                // users: action.payload,
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

}

const initialState2 = {
    detailUser: {
        name: ''
    },
    isLoading: false
}

export const userDetailReducer = (state = initialState2, action) => {

    switch (action.type) {
        case 'GET_DETAIL_USER_PENDING':
            return {
                ...state,
                isLoading: true
            }
        case 'GET_DETAIL_USER_SUCCESS':
            return {
                ...state,
                detailUser: action.payload,
                isLoading: false
            }
        case 'GET_DETAIL_USER_ERROR':
            return {
                ...state,
                isLoading: false
            }

        default:
            return state
    }

}

const initialState3 = {
    userSkill: {
        skillname: ''
    },
    isLoading: false
}

export const userSkillReducer = (state = initialState3, action) => {

    switch (action.type) {
        case 'ADD_USER_SKILL_PENDING':
            return {
                ...state,
                isLoading: true
            }
        case 'ADD_USER_SKILL_SUCCESS':
            return {
                ...state,
                userSkill: action.payload,
                isLoading: false
            }
        case 'ADD_USER_SKILL_ERROR':
            return {
                ...state,
                isLoading: false
            }

        default:
            return state
    }

}

