import React, {useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Auth from './Auth';
import { MenuItem } from '@material-ui/core';

import { AuthContext } from '../../shared/context/auth-context';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'top',
    justifyContent: 'center',
    height: "600px",
    marginTop: "100px",
    // marginBottom: "100px",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    overflowY: "auto",
    borderRadius:"20px",
    outline: 0
  },
}));

export default function AuthModal(props) {

  const auth = useContext(AuthContext);
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  
  // console.log("auth.isloggedin", auth.isLoggedIn)
  // if(auth.isLoggedIn) {
  //   setOpen(false);
  // }

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <MenuItem onClick={handleOpen}>
        Login/Signup
      </MenuItem>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <Auth />
          </div>
        </Fade>
      </Modal>
    </div>
  );
}