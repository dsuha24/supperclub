import React from "react";
import View from "./style";

import Input from "../../../../components/input";
import Button from "../../../../components/button";
import ImageUplaod from "../../../../components/image-upload";
import IngredientsForm from "../ingredients-form";
import EquipmentForm from "../equipment-form";

// Utils
import { INITIAL_INGREDIENT_STATE } from "../../utils";

const RecipeFormInfo = ({
    editField,
    title,
    cuisine,
    description,
    image,
    ingredients,
    equipment,
    pushArray,
    deleteArray,
}) => (
    <View>
        <Input
            className='recipe-form-info__title'
            label='Title'
            value={title}
            onChange={(e) => editField("title", e)}
        />
        <div className='recipe-form-info__flex'>
            <Input
                className='recipe-form-info__cuisine'
                value={cuisine}
                onChange={(e) => editField("cuisine", e)}
                label='Cuisine'
            />
            <ImageUplaod
                onInput={editField}
                image={image}
                id='image'
                field='image'
            />
        </div>
        <Input
            className='recipe-form-info__description'
            multiline
            value={description}
            label='Description'
            rows={2}
            rowsMax={2}
            onChange={(e) => editField("description", e)}
        />
        <EquipmentForm
            equipment={equipment}
            deleteArray={deleteArray}
            pushArray={pushArray}
        />
        <IngredientsForm
            ingredients={ingredients}
            editField={editField}
            pushArray={pushArray}
            deleteArray={deleteArray}
        />
    </View>
);

export default RecipeFormInfo;
