import { useReducer } from "react";
import setWith from "lodash/setWith";
import get from "lodash/get";

function formReducer(state, action) {
    let newArray;
    switch (action.type) {
        case "ADD_ARRAY":
            const { name, defaultFields } = action;
            const newArr = get(state, name);
            newArr.push(defaultFields);
            const newArrayState = { ...state };
            setWith(newArrayState, name, newArr);
            return { ...newArrayState };
        case "DELETE_ARRAY":
            const { id, arrayName } = action;
            const deleteArray = get(state, arrayName);
            deleteArray.splice(id, 1);
            const newDeleteArray = { ...state };
            setWith(newDeleteArray, arrayName, deleteArray);
            // newArray = [...state[arrayName]];
            // newArray.splice(id, 1);
            return { ...newDeleteArray };
        case "EDIT_FIELD":
            const { field, value } = action;
            const newState = { ...state };
            setWith(newState, field, value);
            return { ...newState };
        default:
            throw new Error();
    }
}

export const useForm = (initialState) => {
    const [formState, dispatch] = useReducer(formReducer, initialState);

    function pushArray(arrayName, defaultFields) {
        dispatch({
            type: "ADD_ARRAY",
            name: arrayName,
            defaultFields: defaultFields,
        });
    }

    function deleteArray(arrayName, id) {
        dispatch({
            type: "DELETE_ARRAY",
            id,
            arrayName,
        });
    }

    function editField(field, e) {
        e.preventDefault();
        dispatch({
            type: "EDIT_FIELD",
            field,
            value: e.target.value,
        });
    }

    return [formState, dispatch, pushArray, deleteArray, editField];
};

// import { useCallback, useReducer } from "react";

// const formReducer = (state, action) => {
//     switch (action.type) {
//         case "INPUT_CHANGE":
//             let formIsValid = true;
//             for (const inputId in state.inputs) {
//                 if (!state.inputs[inputId]) {
//                     continue;
//                 }
//                 if (inputId === action.inputId) {
//                     formIsValid = formIsValid && action.isValid;
//                 } else {
//                     formIsValid = formIsValid && state.inputs[inputId].isValid;
//                 }
//             }
//             return {
//                 ...state,
//                 inputs: {
//                     ...state.inputs,
//                     [action.inputId]: {
//                         value: action.value,
//                         isValid: action.isValid,
//                     },
//                 },
//                 isValid: formIsValid,
//             };
//         case "SET_DATA":
//             return {
//                 inputs: action.inputs,
//                 isValid: action.formIsValid,
//             };
//         default:
//             return state;
//     }
// };

// export const useForm = (initialInputs, initialFormValidity) => {
//   const [formState, dispatch] = useReducer(formReducer, {
//     inputs: initialInputs,
//     isValid: initialFormValidity
//   });

//   const inputHandler = useCallback((id, value, isValid) => {
//     dispatch({
//       type: 'INPUT_CHANGE',
//       value: value,
//       isValid: isValid,
//       inputId: id
//     });
//   }, []);

//   const setFormData = useCallback((inputData, formValidity) => {
//     dispatch({
//       type: 'SET_DATA',
//       inputs: inputData,
//       formIsValid: formValidity
//     });
//   }, []);

//   return [formState, inputHandler, setFormData];
// };
