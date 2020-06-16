export const INITIAL_INGREDIENT_STATE = {
    ingredient: "",
    quantity: "",
    units: "",
};

export const INITIAL_STEP_STATE = {
    shortDescription: "",
    longDescription: "",
    ingredients: [],
    equipment: [],
    image: "",
};

export const INITIAL_STATE = {
    title: "",
    image: "",
    description: "",
    cuisine: "",
    ingredients: [{ ...INITIAL_INGREDIENT_STATE }],
    equipment: [],
    steps: [{ ...INITIAL_STEP_STATE }],
};

export function isInfoTab(formTab) {
    return formTab === "info";
}
