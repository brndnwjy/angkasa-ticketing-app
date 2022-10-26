const initialState = {
    user: [],
    isLoading: false,
    isError: false
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case "REGISTER_PENDING":
            return { ...state, isLoading: true }
        case "REGISTER_FULFILLED":
            return { ...state, isLoading: false}
        case "REGISTER_REJECTED":
            return { ...state, isLoading: false, isError: true }

        case "LOGIN_PENDING":
            return { ...state, isLoading: true }
        case "LOGIN_FULFILLED":
            return { ...state, isLoading: false, user: action.payload }
        case "LOGIN_REJECTED":
            return { ...state, isLoading: false, isError: true }
            
        default:
            return state
    }
};

export default userReducer;
