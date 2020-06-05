export const INITIAL_INGREDIENT_STATE = {
    ingredient: "",
    quantity: 0,
    units: "",
};

export const INITIAL_STEP_STATE = {
    step: "",
    shortDescription: "",
    longDescription: "",
    ingredients: [],
    ingredientUnits: [],
    equipment: [],
    image: "",
};

export const INITIAL_STATE = {
    title: "",
    image: "",
    description: "",
    cuisine: "",
    ingredients: [INITIAL_INGREDIENT_STATE],
    equipment: [""],
    steps: [INITIAL_STEP_STATE],
};
