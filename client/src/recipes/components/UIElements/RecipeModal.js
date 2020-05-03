import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import RecipeInstructions from '../../containers/RecipeInstructions';
// import RecipeList from '../RecipeList';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'top',
    justifyContent: 'center',
    marginTop: "30px",
    marginBottom: "20px",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    overflowY: "auto",
    borderRadius:"20px"
  },
}));


export default function RecipeModal(props) {
  const classes = useStyles();
  
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={props.open}
        onClose={props.onClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={props.open}>
          <div className={classes.paper}>
            <RecipeInstructions 
              recipeName={props.recipeName}
              image={props.image}
              ingredients={props.ingredients}
              steps={props.steps}
              equipmentTable={props.equipmentTable}
              cuisine={props.cuisine}
              commentList={props.commentList}
              likes={props.likes}
              saved={props.saved}
            />
          </div>
        </Fade>
      </Modal>
    </div>
  );
}