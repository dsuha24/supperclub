import React from 'react';
import {Formik, Field, Form} from 'formik';
import { makeStyles } from '@material-ui/core/styles';
import {TextField, Button, Select, MenuItem, FormControl, InputLabel} from '@material-ui/core';
import MultipleSelect from '../../shared/components/UIElements/MultipleSelect';

import './NewRecipe.css'
// import CustomizedHook from '../../shared/components/UIElements/CustomizedHook';

const CUISINES = [
    'French',
    'Italian',
    'American Southern',
    'Spanish',
    'Vietnamese',
    'Indonesian',
    'British',
    'German',
    'Japanese',
    'Peruvian',
];

// const CUISINES1 = [
//     { title: 'French'},
//     { title: 'Italian'},
//     { title: 'American Southern'},
//     { title: 'Spanish'},
//     { title: 'Vietnamese'},
//     { title: 'Indonesian'},
//     { title: 'British'},
//     { title: 'German'},
//     { title: 'Japanese'},
//     { title: 'Peruvian'},
//   ];

const INGREDIENTS = [
    { title: 'Bread Flour'},
    { title: 'Butter'},
    { title: 'Water'},
    { title: 'Yeast'},
];

const UNITS = [
    { title: 'Cups'},
    { title: 'TSP'},
    { title: 'TBSP'},
    { title: 'OZ'},
];

const EQUIPMENT = [
    { title: 'Stand Mixer'},
    { title: 'Rolling Pin'},
    { title: 'Plastic Wrap'},
    { title: 'Metal Pan'},
];

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    longBoxStyle: {
        margin: theme.spacing(1),
        minWidth: 200,
    }
  }));

export default function NewRecipe() {

    const classes = useStyles();

    return (
        <div className="new-recipe-form">
            <h1>Add New Recipe</h1>
            <Formik 
                initialValues={
                    {
                        title:"",
                        cuisine:"",
                        ingredientAmount:"",
                        ingredientUnit:"",
                        ingredient:"",
                        equipmentAmount:"",
                        equipment:""
                    }
                } 
                onSubmit={(data, {setSubmitting, resetForm}) => {
                    setSubmitting(true);
                    console.log(data);
                    setSubmitting(false);
                    resetForm();
                }}
            >
                {({values, isSubmitting}) => (
                    <Form>
                        <div>
                            <Field placeholder="Title" name="title" type="input" as={TextField} />
                        </div>
                        <div>
                            <Field placeholder="Cuisines" name="cuisine" list={CUISINES} type="input" as={MultipleSelect} />
                        </div>
                        <div>
                            <h1>Ingredients</h1>
                            <Field placeholder="Amount" name="ingredientAmount" type="input" as={TextField} />
                            <FormControl className={classes.formControl}>
                                <InputLabel htmlFor="ingredient-unit">Units</InputLabel>
                                <Field id="ingredient-unit" placeholder="Ingredient" name="ingredientUnit" type="input" autoWidth="true" as={Select}>
                                    {UNITS.map(units => (
                                        <MenuItem value={units.title}>{units.title}</MenuItem>
                                    ))}
                                </Field>
                            </FormControl>
                            <FormControl className={classes.longBoxStyle}>
                                <InputLabel htmlFor="ingredient-box">Ingregient</InputLabel>
                                <Field placeholder="Ingredient-box" name="ingredient" type="input" autoWidth="true" as={Select}>
                                    {INGREDIENTS.map(ingredient => (
                                        <MenuItem value={ingredient.title}>{ingredient.title}</MenuItem>
                                    ))}
                                </Field>
                            </FormControl>
                        </div>
                        <div>
                            <h1>Equipment</h1>
                            <Field placeholder="Amount" name="equipmentAmount" type="input" as={TextField} />
                            <FormControl className={classes.longBoxStyle}>
                                <InputLabel htmlFor="equipment-box">Equipment</InputLabel>
                                <Field id="equipment-box" placeholder="Equipment" name="equipment" type="input" autoWidth="true" as={Select}>
                                    {EQUIPMENT.map(units => (
                                        <MenuItem value={units.title}>{units.title}</MenuItem>
                                    ))}
                                </Field>
                            </FormControl>
                        </div>
                        <div>
                            <h1>Steps</h1>
                            <Field placeholder="Short description" name="stepShortDescription" type="input" as={TextField} />
                            <div>
                                <Field multiline placeholder="Long description" name="stepLongDescription" type="input" as={TextField} rows={5} variant="outlined"/>
                            </div>
                        </div>
                        <div>
                            {/* <Field placeholder="Last Name" name="lastName" type="input" as={TextField} /> */}
                        </div>
                        <div>
                            {/* <Field placeholder="Last Name" name="lastName" type="input" as={MultipleSelect} /> */}
                            {/* <CustomizedHook list={CUISINES1}/> */}
                        </div>
                        <div>
                            <Button disable={isSubmitting} type="submit">
                                Submit
                            </Button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
}


