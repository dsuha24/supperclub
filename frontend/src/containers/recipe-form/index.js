import React, { useState } from "react";
import View from "./style";
import { connect } from "react-redux";
import axios from "axios";
import { useHistory } from "react-router-dom";

import { useForm } from "../../utils/hooks/form-hooks";

// Utils
import { INITIAL_STATE, isInfoTab } from "./utils";

// Components
import Button from "../../components/button";
import RecipeBasicInfo from "./components/recipe-form-info";
import RecipeInstructions from "./components/recipe-instructions";
import Nav from "./components/nav";
import Preview from "./components/preview";

const RecipeForm = ({ userId }) => {
    const [formTab, handleFormTab] = useState("info");
    const { formState, pushArray, deleteArray, editField } = useForm(
        INITIAL_STATE
    );
    const history = useHistory();

    const {
        title,
        image,
        description,
        cuisine,
        ingredients,
        equipment,
        steps,
    } = formState;

    async function submit() {
        const formData = new FormData();

        Object.keys(formState).forEach((formKey) => {
            formData.append(formKey, formState[formKey]);
        });

        axios
            .post("api/recipes", formState)
            .then((res) => {
                history.push("/");
            })
            .catch((err) => console.log(err));
    }

    return (
        <View formTab={formTab}>
            <div className='recipe-form__info'>
                <Nav formTab={formTab} handleFormTab={handleFormTab} />
                <h2 className='recipe-form__header'>
                    {formTab === "info" ? "Basic Information" : "Instructions"}
                </h2>
                <div className='recipe-form__form'>
                    <form onSubmit={submit}>
                        {isInfoTab(formTab) ? (
                            <RecipeBasicInfo
                                editField={editField}
                                title={title}
                                cuisine={cuisine}
                                description={description}
                                image={image}
                                pushArray={pushArray}
                                deleteArray={deleteArray}
                                ingredients={ingredients}
                                equipment={equipment}
                            />
                        ) : (
                            <RecipeInstructions
                                editField={editField}
                                pushArray={pushArray}
                                deleteArray={deleteArray}
                                steps={steps}
                            />
                        )}
                    </form>
                </div>
                <div className='recipe-form__bottom-nav'>
                    <Button
                        variant='contained'
                        color='primary'
                        className='recipe-form__next'
                        size='medium'
                        onClick={() =>
                            formTab === "info"
                                ? handleFormTab("instructions")
                                : handleFormTab("info")
                        }
                    >
                        {formTab === "info" ? "Next" : "Previous"}
                    </Button>
                </div>
            </div>
            <Preview formState={formState} submit={submit} />
        </View>
    );
};

function mapStateToProps(state) {
    return { userId: state.sessions.user.userId };
}

export default connect(mapStateToProps, {})(RecipeForm);
