import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TabPanel from '../../components/appBar/appBar';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import Grid from '@material-ui/core/Grid';

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  },

}));
export default function AppBarContainer() {
  const classes = useStyles();
  const [navItem, setValue] = React.useState(0);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const goToProfile = (event) => {
    //  this.props.histroy.push()
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" >
        <Grid container direction='row'>
          <Grid item xs={11}>
            <Tabs value={navItem} onChange={handleChange} aria-label="simple tabs example">
              <Tab label="Item One" {...a11yProps(0)} />
              <Tab label="Item Two" {...a11yProps(1)} />
              <Tab label="Item Three" {...a11yProps(2)} />
            </Tabs>
          </Grid>
          <Grid item xs={1}>
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={open}
              onClose={handleClose}
            >
              <MenuItem>
                <nav>
                  <Link to='/profile'>
                    Profile
              </Link>
                </nav></MenuItem>
              <MenuItem>My account</MenuItem>
            </Menu>
          </Grid>
        </Grid>
      </AppBar>
      <TabPanel value={navItem} index={0}>
        Item One
      </TabPanel>
      <TabPanel value={navItem} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={navItem} index={2}>
        Item Three
      </TabPanel>
    </div>
  );
}