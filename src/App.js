
import React, { Component } from 'react';
import './App.css';
import clsx from 'clsx';


//import core components
import {Typography, Grid ,Paper , Container } from '@material-ui/core'
import { withStyles , MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import AppBar from './functions/AppBar'

//import custom components
import VerticalComposedChart from './functions/VerticalComposedChart';
import PositiveNegativeChart from './functions/PositiveNegativeChart';
import SimpleBarChart from './functions/SimpleBarChart';
import ReactVirtualizedTable from './functions/VirtualTable';

const theme = createMuiTheme({

  palette: {
    primary: {
      main: '#212121',
      contrastText: '#ffffff'
    },
    secondary: {
      main : '#6e6e6e',
      contrastText: '#ffffff'
    },
    background : {
      paper : "#ffffff",
      main: "000000"
    },
  },

});


const styles = theme => (

  {

    root : {
      backgroundColor: "#ffffff", 
      fontStyle: 'italic',
    },
    container : {
      paddingTop : theme.spacing(4),
      paddingBottom : theme.spacing(4),
    },

    paper : {
      padding: theme.spacing(2,2,2,2),
      height: 350
    },

    paper2 : {
      padding: theme.spacing(2,2,2,2),
      height: '80%',
    },

    paper3 : {
      padding: theme.spacing(2,2,2,2),
      height: '90%',
    },
    appBarSpacer: theme.mixins.toolbar,

    givePadding : {
      padding : theme.spacing(3,3,3,3)
    }
  }
);


class App extends Component{
  render(){
  const { classes} = this.props
  return (
    <div className="App">
      <body>
        <div className={clsx('App',classes.root)}>
          <MuiThemeProvider theme={theme}>
          <AppBar/>
          <div className={classes.appBarSpacer}/>
            <Container className={classes.container} maxWidth="lg" >
            <Grid container direction='row' spacing={3} >
                <Grid item sm={12} xs={12} >
                    <Paper className={classes.paper2} elevation={6} >
                      <Typography color="secondary">
                        <h3>
                          <span style={{ color: '#8884d8' }}>The NEED Meter</span>
                        </h3>
                        <p> 
                          Distributing the resources based on the percentage need for a given area so as to minimize crises. Suppose you have 1000 entities of any medical entity then distributing it to different regoin based on the percent spread of crises could be the best solution.
                        </p>
                      </Typography>
                    </Paper>
                  </Grid>
              </Grid>
              <br></br>
              <Grid container spacing={2}  alignItems="center" >
                <Grid item sm={6} xs={12} >
                  <Paper className={classes.paper}  elevation={6}>
                    <SimpleBarChart/>
                  </Paper>
                </Grid>
                <Grid item sm={6} xs={12} >
                  <Paper className={classes.paper}  elevation={6}>
                    <ReactVirtualizedTable/>
                  </Paper>
                </Grid>
              </Grid>
              <br/>
              <Grid container direction='row' spacing={3} >
                <Grid item sm={12} xs={12} >
                    <Paper className={classes.paper3} elevation={6} >
                      <Typography color="secondary">
                        <p>
                          Logistics could be a great asset to the any Nation at the time of crisis. Data has proven to be the best combat to solve any problem. With proper data during any commuinty spread pandemic providing appropriate resources to the
                          region at the right time could prove to be a great fighting strategy to combat any crisis.   
                        </p>
                        <p>
                          This calulator has been made on the past data and and help medical logistics to visulize the data so that all the small and the big logistics personal can contribute by providing adequate resources to the needy region.
                          The <span >Data Crisis And Logistics Calculator </span> Can maximize the amount of resources we have so that the entire resources pool can be utilized effectively  
                        </p> 
                      </Typography>
                    </Paper>
                  </Grid>
              </Grid>
              <br></br>
              <Grid container spacing={2}  alignItems="center" >
                <Grid item sm={6} xs={12} >
                  <Paper className={classes.paper}  elevation={6}>
                    <VerticalComposedChart/>
                  </Paper>
                </Grid>
                <Grid item sm={6} xs={12} >
                  <Paper className={classes.paper}  elevation={6}>
                    <PositiveNegativeChart/>
                  </Paper>
                </Grid>
              </Grid>
            </Container>
          </MuiThemeProvider>
        </div>
      </body>
    </div>
  );
  }
}

export default withStyles(styles)(App);

