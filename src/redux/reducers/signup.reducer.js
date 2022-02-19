const initialState = {
    userToken: '',
    loading: false,
    error: null
}

export const signUpReducer = (state = initialState, action) => {
    switch (action.type) {

        case "SIGN_UP":
            return {
                ...state,
                loading: true,
            }

        case "FETCH_USER_SUCCESS":
            return {
                ...state,
                loading: false,
                userToken: action.payload
            }

        case "FETCH_USER_FAILURE":
            return {
                ...state,
                loading: false,
                error: action.error,
                userToken: ''
            }
        default:
            return state
    }
}