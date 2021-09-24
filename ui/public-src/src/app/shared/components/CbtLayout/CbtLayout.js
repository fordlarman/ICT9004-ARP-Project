import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import MenuIcon from '@material-ui/icons/Menu';
import AddIcon from '@material-ui/icons/Add';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ClearIcon from '@material-ui/icons/Clear';
import { mainListItems, secondaryListItems } from './listItems';
import AddButton from '../AddButton';
import { FAKE_DATA } from '../../constants/fakeData';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import AssignmentIcon from '@material-ui/icons/Assignment';

import SettingsIcon from '@material-ui/icons/Settings';
import DvrIcon from '@material-ui/icons/Dvr';
import View from '../../../screens/Main/components/View';


import AddEditSituationModalWrapped from '../AddEditSituationModal/AddEditSituationModal';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import AddIcon from '@material-ui/icons/Add';
const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  gridroot: {
    flexGrow: 1,
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  sidebarHeader: {
    marginLeft: '20px'
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing.unit * 7,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing.unit * 9,
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    height: '100vh',
    overflow: 'auto',
    background: '#FBFCFD',
    width: 'calc(100vw - 240px)'
  },
  chartContainer: {
    marginLeft: -22,
  },
  tableContainer: {
    height: 320,
  },
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
  noContentText: {
    fontSize: '24px',
    color: '#757575'
  }
});

class CbtLayout extends React.Component {
  state = {
    open: true,
    openModal: false,
    addEditSituationModalMode: "ADD_MODE",
    selected: 0
  };

  closeAddEditSituationModal = () => {
    this.setState({ openModal: false });
  }

  openAddEditSituationModal = () => {
    this.setState({ openModal: true });
  }

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <CssBaseline />
        <div className={classes.root}>
          <AppBar
            position="absolute"
            className={classNames(classes.appBar, this.state.open && classes.appBarShift)}
          >
            <Toolbar disableGutters={!this.state.open} className={classes.toolbar}>
              <IconButton
                color="inherit"
                aria-label="Open drawer"
                onClick={this.handleDrawerOpen}
                className={classNames(
                  classes.menuButton,
                  this.state.open && classes.menuButtonHidden,
                )}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="title" color="inherit" noWrap className={classes.title}>
                IOT PROJECT
              </Typography>
              <IconButton color="inherit">

              </IconButton>
            </Toolbar>
          </AppBar>
          <Drawer
            variant="permanent"
            classes={{
              paper: classNames(classes.drawerPaper, !this.state.open && classes.drawerPaperClose),
            }}
            open={this.state.open}
          >
            <div className={classes.toolbarIcon}>
              <strong className={classes.sidebarHeader}>IoT Benchmark Tool</strong>
              <IconButton onClick={this.handleDrawerClose}>
                <ChevronLeftIcon />
              </IconButton>
            </div>
            <Divider />
            <List>{mainListItems()}</List>
            <Divider />
            <List>{secondaryListItems}</List>

          </Drawer>
          <main className={classes.content}>
            <div className={classes.appBarSpacer} />
            {this.props.page}
            <div className={classes.appBarSpacer} />
            <div className={classes.appBarSpacer} />
            <div className={classes.appBarSpacer} />
            {/* {this.props.page} */}
            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justify="center"
            >
                <div className={classes.noContentText}>No situation to display</div>
                <Button color="primary" variant="contained"  className={classes.button} onClick={this.openAddEditSituationModal}>
                    <AddIcon /> Add situaiton
                </Button>
            </Grid> 
            {/* {
              !FAKE_DATA.situations && (
                <AddButton><AddIcon /> Add New Situation</AddButton>
              )
            } */}

          </main>
        </div>
        {
            <AddEditSituationModalWrapped
                modalTitle={this.state.addEditSituationModalMode == "ADD_MODE" ? "Add Situation" : "Edit Situation"}
                open={this.state.openModal}
                closeModal={this.closeAddEditSituationModal}
            >
            </AddEditSituationModalWrapped>
        }
      </React.Fragment>
    );
  }
}

CbtLayout.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CbtLayout);