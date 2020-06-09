import React from 'react';
// import Chip from '@material-ui/core/Chip';
import { Autocomplete } from '@material-ui/lab';
// import Autocomplete from '@material-ui/lab/Autocomplete';
// import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
// import { List } from '@material-ui/core';

export default function FilterBar(props) {

    const {handleCuisineFilter, handleIngredientFilter, handleEquipmentFilter} = props;

    const storeCuisineFilterValue = (value) => {
        console.log(value);
        const desArray = value.map(arr => arr.title)
        handleCuisineFilter(desArray);
    }

    const storeIngredientFilterValue = (ingredientValue) => {
        // console.log(ingredientValue)
        const desIngredientFilterArray = ingredientValue.map(arrIngredient => arrIngredient.title)
        handleIngredientFilter(desIngredientFilterArray);
    }

    const storeEquipmentFilterValue = (equipmentValue) => {
        // console.log(ingredientValue)
        const desEquipmentFilterArray = equipmentValue.map(arrEquipment => arrEquipment.title)
        handleEquipmentFilter(desEquipmentFilterArray);
    }

    return (
        <div className="main-filter-bar">
            {/* <h1>Filters</h1> */}
            <Autocomplete
                multiple
                id="size-small-standard-multi"
                size="small"
                options={CUISINES}
                onChange={(event, value) => storeCuisineFilterValue(value)}
                getOptionLabel={(option) => option.title}
                renderInput={(params) => (
                <TextField {...params} variant="standard" label="Cuisines" placeholder="Cuisines" />
                )}
            />
            <Autocomplete
                multiple
                id="size-small-standard-multi"
                size="small"
                options={INGREDIENTS}
                onChange={(event, ingredientValue) => storeIngredientFilterValue(ingredientValue)}
                getOptionLabel={(option) => option.title}
                renderInput={(params) => (
                <TextField {...params} variant="standard" label="Ingredients" placeholder="Ingredients" />
                )}
            />
            <Autocomplete
                multiple
                id="size-small-standard-multi"
                size="small"
                options={EQUIPMENT}
                onChange={(event, ingredientValue) => storeEquipmentFilterValue(ingredientValue)}
                getOptionLabel={(option) => option.title}
                renderInput={(params) => (
                <TextField {...params} variant="standard" label="Equipment" placeholder="Ingredients" />
                )}
            />
        </div>
    );
}

const INGREDIENTS = [
    { title: 'Bread Flour'},
    { title: 'Butter'},
    { title: 'Water'},
    { title: 'Yeast'},
];

const CUISINES = [
    { title: 'French'},
    { title: 'Italian'},
    { title: 'American Southern'},
    { title: 'Spanish'},
    { title: 'Vietnamese'},
    { title: 'Indonesian'},
    { title: 'British'},
    { title: 'German'},
    { title: 'Japanese'},
    { title: 'Peruvian'},
];

const EQUIPMENT = [
    { title: 'Stand Mixer'},
    { title: 'Rolling Pin'},
    { title: 'Plastic Wrap'},
    { title: 'Metal Pan'},
];