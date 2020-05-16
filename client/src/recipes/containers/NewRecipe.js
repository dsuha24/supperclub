
import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
// import { Input } from "@material-ui/core";
import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import ErrorModal from '../../shared/components/UIElements/ErrorModal';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH
} from '../../shared/util/validators';
import { useForm } from '../../shared/hooks/form-hook';
import { useHttpClient } from '../../shared/hooks/http-hook';
import { AuthContext } from '../../shared/context/auth-context';
import './NewRecipe.css';
import ImageUpload from '../../shared/components/FormElements/ImageUpload';
import MultipleSelect from '../../shared/components/UIElements/MultipleSelect';


const NewRecipe = () => {
  const auth = useContext(AuthContext);
  const [cuisineValues, setCuisineValues] = useState([]);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [formState, inputHandler] = useForm(
    {
      title: {
        value: '',
        isValid: false
      },
      image: {
        value: null,
        isValid: false
      },
      description: {
        value: '',
        isValid: false
      },
    },
    false
  );

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

  const history = useHistory();

  // console.log("userID", auth.userId);
  // console.log("isLoggedIn", auth.isLoggedIn);

  const placeSubmitHandler = async event => {
    event.preventDefault();
    const cuisineVal = ["Italian"];
    console.log("image", formState.inputs);
    // console.log("title", formState.inputs.title.value); 
    try {
      const formData = new FormData();
      formData.append('recipeName', formState.inputs.title.value);
      formData.append('image', formState.inputs.image.value);
      formData.append('description', formState.inputs.description.value);
      formData.append('author', "Daryl Suharli")
      formData.append('authorId', auth.userId);
      formData.append('cuisine', cuisineVal);
      
      await sendRequest(
        // 'http://localhost:5000/api/recipes',
        process.env.REACT_APP_BACKEND_URL + '/recipes',
        'POST',
        formData, {
          Authorization: 'Bearer ' + auth.token
        }
        // JSON.stringify({
        //   recipeName: formState.inputs.title.value,
        //   // cuisine: data.cuisine,
        //   description: formState.inputs.description.value,
        //   image: "https://media.daysoftheyear.com/20171223132649/kouign-amann-day.jpg",
        //   author: "Daryl Suharli",
        //   // authorId: "5eaf1a21467b2f4eb88d9e7b",
        //   authorId: auth.userId
        // }),
        // { 'Content-Type': 'application/json' }
      );
      history.push('/');
    } catch (err) {}
  };

  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      <form className="new-recipe-form" onSubmit={placeSubmitHandler}>
        {isLoading && <LoadingSpinner asOverlay />}
        <Input
          id="title"
          element="input"
          type="text"
          label="Title"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Please enter a valid title."
          onInput={inputHandler}
        />
        <ImageUpload 
          id="image" 
          onInput={inputHandler}
          errorText="Please provide an image"
        />
        <Input
          id="description"
          element="textarea"
          label="Description"
          validators={[VALIDATOR_MINLENGTH(5)]}
          errorText="Please enter a valid description (at least 5 characters)."
          onInput={inputHandler}
        />
        <MultipleSelect
          list={CUISINES}
          setCuisineValues={setCuisineValues}
        />
        {/* <Input
          id="ingredient1"
          element="input"
          type="text"
          label="Ingredient"
          // validators={[VALIDATOR_MINLENGTH(5)]}
          // errorText="Please enter a valid ingredient (at least 5 characters)."
          onInput={inputHandler}
        />
        <Input
          id="ingredientQty1"
          element="input"
          type="text"
          label="Amount"
          // validators={[VALIDATOR_MINLENGTH(5)]}
          // errorText="Please enter a valid ingredient (at least 5 characters)."
          onInput={inputHandler}
        />
        <Input
          id="ingredientUnits1"
          element="input"
          type="text"
          label="Units"
          // validators={[VALIDATOR_MINLENGTH(5)]}
          // errorText="Please enter a valid ingredient (at least 5 characters)."
          onInput={inputHandler}
        /> */}
        <Button type="submit" disabled={!formState.isValid}>
          ADD RECIPE
        </Button>
      </form>
    </React.Fragment>
  );
};

export default NewRecipe;


// import React from 'react';
// import {Formik, Field, Form} from 'formik';
// import { makeStyles } from '@material-ui/core/styles';
// import {TextField, Button, Select, MenuItem, FormControl, InputLabel} from '@material-ui/core';
// // import MultipleSelect from '../../shared/components/UIElements/MultipleSelect';
// import { useHttpClient } from '../../shared/hooks/http-hook';
// import { useHistory } from 'react-router-dom';

// import './NewRecipe.css'
// // import CustomizedHook from '../../shared/components/UIElements/CustomizedHook';

// // const CUISINES = [
// //     'French',
// //     'Italian',
// //     'American Southern',
// //     'Spanish',
// //     'Vietnamese',
// //     'Indonesian',
// //     'British',
// //     'German',
// //     'Japanese',
// //     'Peruvian',
// // ];

// const CUISINES = [
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

// const INGREDIENTS = [
//     { title: 'Bread Flour'},
//     { title: 'Butter'},
//     { title: 'Water'},
//     { title: 'Yeast'},
// ];

// const UNITS = [
//     { title: 'Cups'},
//     { title: 'TSP'},
//     { title: 'TBSP'},
//     { title: 'OZ'},
// ];

// const EQUIPMENT = [
//     { title: 'Stand Mixer'},
//     { title: 'Rolling Pin'},
//     { title: 'Plastic Wrap'},
//     { title: 'Metal Pan'},
// ];

// const useStyles = makeStyles((theme) => ({
//     formControl: {
//       margin: theme.spacing(1),
//       minWidth: 120,
//     },
//     longBoxStyle: {
//         margin: theme.spacing(1),
//         minWidth: 200,
//     }
//   }));

// export default function NewRecipe() {

//     const classes = useStyles();
//     const { isLoading, error, sendRequest, clearError } = useHttpClient();

//     const history = useHistory();

//     return (
//         <div className="new-recipe-form">
//             <h1>Add New Recipe</h1>
//             <Formik 
//                 initialValues={
//                     {
//                         title:"",
//                         description:"",
//                         image:"",
//                         cuisine:[],
//                         ingredientAmount:"",
//                         ingredientUnit:"",
//                         ingredient:"",
//                         equipmentAmount:"",
//                         equipment:"",
//                         equipmentAmount:"",
//                         stepShortDescription:"",
//                         stepLongDescription:""
//                     }
//                 } 
//                 onSubmit={async (data, {setSubmitting, resetForm}) => {
//                     setSubmitting(true);
//                     console.log("data.title", data.title);
//                     console.log("data.description", data.description);

//                     try {
//                         await sendRequest(
//                           'http://localhost:5000/api/recipes',
//                           'POST',
//                           JSON.stringify({
//                             recipeName: data.title,
//                             // cuisine: data.cuisine,
//                             description: data.description,
//                             image: "https://media.daysoftheyear.com/20171223132649/kouign-amann-day.jpg",
//                             author: "Daryl Suharli",
//                             authorId: "5eaf1a21467b2f4eb88d9e7b"

//                           }),
//                           { 'Content-Type': 'application/json' }
//                         );
//                         history.push('/');
//                       } catch (err) {}


//                     setSubmitting(false);
//                     resetForm();
//                 }}
//             >
//                 {({values, isSubmitting}) => (
//                     <Form>
//                         <div>
//                             <Field placeholder="Title" name="title" type="input" as={TextField} />
//                             <Field multiline placeholder="Description" name="description" type="input" as={TextField} rows={5} variant="outlined"/>
//                         </div>
//                         <div>
//                             {/* <Field placeholder="Cuisines" name="cuisine" list={CUISINES} type="input" as={MultipleSelect} /> */}
//                             <FormControl className={classes.longBoxStyle}>
//                                 <InputLabel htmlFor="cuisine-type">Select a cuisine</InputLabel>
//                                 <Field id="cuisine-type" placeholder="Select a cuisine" name="cuisine-type" type="input" autoWidth="true" as={Select}>
//                                     {CUISINES.map(cuis => (
//                                         <MenuItem value={cuis.title}>{cuis.title}</MenuItem>
//                                     ))}
//                                 </Field>
//                             </FormControl>
//                         </div>
//                         <div>
//                             <h1>Ingredients</h1>
//                             <Field placeholder="Amount" name="ingredientAmount" type="input" as={TextField} />
//                             <FormControl className={classes.formControl}>
//                                 <InputLabel htmlFor="ingredient-unit">Units</InputLabel>
//                                 <Field id="ingredient-unit" placeholder="Ingredient" name="ingredientUnit" type="input" autoWidth="true" as={Select}>
//                                     {UNITS.map(units => (
//                                         <MenuItem value={units.title}>{units.title}</MenuItem>
//                                     ))}
//                                 </Field>
//                             </FormControl>
//                             <FormControl className={classes.longBoxStyle}>
//                                 <InputLabel htmlFor="ingredient-box">Ingregient</InputLabel>
//                                 <Field placeholder="Ingredient-box" name="ingredient" type="input" autoWidth="true" as={Select}>
//                                     {INGREDIENTS.map(ingredient => (
//                                         <MenuItem value={ingredient.title}>{ingredient.title}</MenuItem>
//                                     ))}
//                                 </Field>
//                             </FormControl>
//                         </div>
//                         <div>
//                             <h1>Equipment</h1>
//                             <Field placeholder="Amount" name="equipmentAmount" type="input" as={TextField} />
//                             <FormControl className={classes.longBoxStyle}>
//                                 <InputLabel htmlFor="equipment-box">Equipment</InputLabel>
//                                 <Field id="equipment-box" placeholder="Equipment" name="equipment" type="input" autoWidth="true" as={Select}>
//                                     {EQUIPMENT.map(units => (
//                                         <MenuItem value={units.title}>{units.title}</MenuItem>
//                                     ))}
//                                 </Field>
//                             </FormControl>
//                         </div>
//                         <div>
//                             <h1>Steps</h1>
//                             <Field placeholder="Short description" name="stepShortDescription" type="input" as={TextField} />
//                             <div>
//                                 <Field multiline placeholder="Long description" name="stepLongDescription" type="input" as={TextField} rows={5} variant="outlined"/>
//                             </div>
//                         </div>
//                         <div>
//                             {/* <Field placeholder="Last Name" name="lastName" type="input" as={TextField} /> */}
//                         </div>
//                         <div>
//                             {/* <Field placeholder="Last Name" name="lastName" type="input" as={MultipleSelect} /> */}
//                             {/* <CustomizedHook list={CUISINES1}/> */}
//                         </div>
//                         <div>
//                             <Button disable={isSubmitting} type="submit">
//                                 Submit
//                             </Button>
//                         </div>
//                     </Form>
//                 )}
//             </Formik>
//         </div>
//     );
// }


