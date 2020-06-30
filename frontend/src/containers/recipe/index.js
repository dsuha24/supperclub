import React, { useEffect } from "react";
import View from "./style";
import { connect } from "react-redux";

import { useParams } from "react-router-dom";

import { fetchSingleRecipe} from '../../stores/actions/recipes';

const Recipe = ({ fetchSingleRecipe, recipe}) => {
    const { id } = useParams();

    console.log(recipe)


    useEffect(() => {
        fetchSingleRecipe(id)
    }, [id, fetchSingleRecipe]);


    return (
        <View>
            <div>Comments go here</div>
            <div>Everything else</div>
        </View>
    )
};

function mapStateToProps(state){
    return {
        recipe: state.recipes.recipe
    }
}

function mapDispatchToProps(dispatch){
    return {
        fetchSingleRecipe: (id) => dispatch(fetchSingleRecipe(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Recipe);
