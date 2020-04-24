import React from 'react';
// import Chip from '@material-ui/core/Chip';
import { Autocomplete } from '@material-ui/lab';
// import Autocomplete from '@material-ui/lab/Autocomplete';
// import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
// import { List } from '@material-ui/core';

export default function FilterBar(props) {

    // function valueStore () {
    //     //store the value of the selected autocomplete
    //     //find the values in the displayed recipelist
    //     //make sure cuisine is an array
    //     //hide the values that are not on the recipelist
    // }

    const storeValue = (value) => {
        // console.log(value);
        return value;
    }

    return (
        <div>
            {/* <h1>Filters</h1> */}
            <Autocomplete
                multiple
                id="size-small-standard-multi"
                size="small"
                options={CUISINES}
                onChange={(event, value) => storeValue(value)}
                getOptionLabel={(option) => option.title}
                renderInput={(params) => (
                <TextField {...params} variant="standard" label="Cuisines" placeholder="Cuisines" />
                )}
            />
            {/* <Autocomplete
                multiple
                id="size-small-standard-multi"
                size="small"
                options={INGREDIENTS}
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
                getOptionLabel={(option) => option.title}
                renderInput={(params) => (
                <TextField {...params} variant="standard" label="Equipment" placeholder="Ingredients" />
                )}
            /> */}
            <h1>{storeValue}</h1>
        </div>
    );
}

// const INGREDIENTS = [
//     { title: 'Bread Flour'},
//     { title: 'Butter'},
//     { title: 'Water'},
//     { title: 'Yeast'},
// ];

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

// const EQUIPMENT = [
//     { title: 'Stand Mixer'},
//     { title: 'Rolling Pin'},
//     { title: 'Plastic Wrap'},
//     { title: 'Metal Pan'},
// ];