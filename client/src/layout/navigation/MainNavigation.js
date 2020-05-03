import React, {useContext} from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
// import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import FilterListIcon from '@material-ui/icons/FilterList';
import AddCircleIcon from '@material-ui/icons/AddCircle';
// import { List } from '@material-ui/core';

import "./MainNavigation.css";
import AuthModal from '../../shared/components/AuthModal';
import { Drawer, Modal } from '@material-ui/core';
import FilterBar from './Filters/FilterBar';
import NewRecipe from '../../recipes/containers/NewRecipe';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
// import PersistentDrawerLeft from '../../shared/components/PersistentDrawerLeft';
// import clsx from 'clsx';
// import { Drawer } from '@material-ui/core';

import {AuthContext} from '../../shared/context/auth-context';
import { NavLink } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  // drawer: {
  //   width: "300px",
  // },

  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },

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
    overflowY: "scroll",
    borderRadius:"20px",
    width: "500px"
  },

  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

export default function MainNavigation() {

  const auth = useContext(AuthContext);
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [filterMenu, setFilterMenu] = React.useState(null);
  const [newRecipe, setNewRecipe] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const isFilterMenuOpen = Boolean(filterMenu);
  const isNewRecipeOpen = Boolean(newRecipe);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleFilterMenuOpen = (event) => {
    setFilterMenu(event.currentTarget);
  }

  const handleFilterMenuClose = () => {
    setFilterMenu(null);
  };

  const handleNewRecipeOpen = (event) => {
    setNewRecipe(event.currentTarget);
  };

  const handleNewRecipeClose = () => {
    setNewRecipe(null);
  };


  const menuId = 'primary-search-account-menu';
  const filterMenuId = 'primary-filter-menu';

  const renderNewRecip = (
    <Modal 
      open={isNewRecipeOpen}
      onClose={handleNewRecipeClose}
      closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      className={classes.modal}
    >
      <Fade in={newRecipe}>
          <div className={classes.paper}>
            <NewRecipe />
          </div>
        </Fade>
    </Modal>
  );

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={isMenuOpen}
      onClose={handleMenuClose}
      onClick={handleMenuClose} //closes after you click the button, so it doesn't linger
    >
    <AuthModal
      open={isMenuOpen}
    />
      
      <NavLink to="/uid">
        <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      </NavLink>
      <MenuItem onClick={handleMenuClose}>Settings</MenuItem>
    </Menu>
  );

  const renderFilterMenu = (
    <div className="filter-drawer">
      <Drawer
        // className={classes.drawer}
        // variant="permanent"
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
        id={filterMenuId}
        keepMounted
        transformOrigin={{ vertical: 'top', horizontal: 'left' }}
        open={isFilterMenuOpen}
        onClose={handleFilterMenuClose}
      >
      <FilterBar />
      </Drawer>
    </div>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="sticky">
        <Toolbar>
          <IconButton
            // edge="start"
            // className={classes.menuButton}
            // color="inherit"
            // aria-label="open drawer"
            aria-label="show more"
            aria-controls={filterMenuId}
            aria-haspopup="true"
            onClick={handleFilterMenuOpen}
            color="inherit"
          >
            <FilterListIcon />
          </IconButton>
          <NavLink to="/">
            <Typography className={classes.title} variant="h6" noWrap>
              Supper Club
            </Typography>
          </NavLink>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton 
              color="inherit"
              onClick={handleNewRecipeOpen}
            >
              Add New Recipe
              <AddCircleIcon />
            </IconButton>
            {auth.isLoggedIn && (
              <div>
                <IconButton aria-label="show 4 new mails" color="inherit">
                  <Badge badgeContent={4} color="secondary">
                    <MailIcon />
                  </Badge>
                </IconButton>
                <IconButton aria-label="show 17 new notifications" color="inherit">
                  <Badge badgeContent={17} color="secondary">
                    <NotificationsIcon />
                  </Badge>
                </IconButton>
              </div>
            )}
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>  
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
      {renderFilterMenu}
      {renderNewRecip}
    </div>
  );
}
