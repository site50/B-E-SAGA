import { GET_SUCCESS } from "./actions";

const myReducer = (state = { data: [] }, action) => {
    switch (action.type) {
        case GET_SUCCESS:
            return { ...state, data: action.data }
        default:
            return state;
    }
}

export default myReducer;

