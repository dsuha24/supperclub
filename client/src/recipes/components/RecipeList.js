import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import RecipeItem from './RecipeItem';
import './RecipeList.css'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflowX: 'auto',
    flexWrap: 'nowrap'
  },
  control: {
    padding: theme.spacing(2),
  },
}));

export default function RecipeList(props) {

  const classes = useStyles();
  // console.log('props: ', props)

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid container justify="left" wrap="nowrap">
        {props.items.map(recipe => (
          <RecipeItem
              // onClick={props.onItemclick}
              // open={props.open}
              handleModalClose={props.handleModalClose}
              key={recipe.id}
              id={recipe.id}
              image={recipe.image}
              name={recipe.recipeName}
              time={recipe.time}
              description={recipe.description}
              author={recipe.author}
              ingredients={recipe.ingredients}
              steps={recipe.steps}
              equipmentTable={recipe.equipmentTable}
              cuisine={recipe.cuisine}
              commentList={recipe.commentList}
              likes={recipe.likes}
              saved={recipe.saved}
          />
        ))} 
      </Grid>
    </Grid>
  );
}
