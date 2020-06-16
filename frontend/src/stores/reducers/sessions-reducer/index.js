const INITIAL_STATE = {
    user: {},
};

const sessionReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "RECEIVE_CURRENT_USER":
            return {
                ...state,
                isAuthenticated: !!action.payload.userId,
                user: action.payload,
            };
        default:
            return state;
    }
};

export default sessionReducer;
