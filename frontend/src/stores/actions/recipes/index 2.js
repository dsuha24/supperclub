import axios from "axios";

export const RECEIVE_SINGLE_RECIPE = "RECEIVE_SINGLE_RECIPE";

export const receiveSingleRecipe = (id) => {
    return {
        type: RECEIVE_SINGLE_RECIPE,
        payload: id,
    };
};

export const fetchSingleRecipe = (id) => (dispatch) => {
    axios.get(`http://localhost:5000/api/recipes/${id}`).then(res => {
        dispatch(receiveSingleRecipe(res.data.recipe))
    }).catch(err => console.log(err))
};
