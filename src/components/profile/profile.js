import React, { Fragment } from 'react';
import AppBar from '../../container/appBar/appBar';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import FacebookIcon from '@material-ui/icons/Facebook';
import Icon from '@material-ui/core/Icon';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  formFields: {
    flexDirection: 'column'
  },
  formControl: {
    // margin: theme.spacing(1),
  },
  button: {
    margin: theme.spacing(1),
  },
  inputUpload: {
    display: 'none'
  },
  uploadImageforprofile: {
    'background': 'gray',
    borderRadius: '50%',
    'height': '150px',
    'width': '150px',
  },
  uploadProfileImage: {

  },
  contactLinks: {
    margin: '2px',
    a: {
      marginLeft: '20px'

    }
  }
}));
export default function Profile() {

  const classes = useStyles();
  const [expanded, setExpanded] = React.useState('panel4');
  const [descirption, setDescription] = React.useState('Tell about yourself');
  const [name, setName] = React.useState('Chris Brown');
  const [gender, setGender] = React.useState('female');

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };


  const handleChangeDescription = event => {
    setDescription(event.target.value);
  };

  const handleChangeName = event => {
    setName(event.target.value);
  };
  const handleChangeGender = event => {
    setGender(event.target.value);
  };


  return (
    <Fragment>
      <AppBar />
      <h1>
        Profile
      </h1>
      <Grid container spacing={1} direction="row">
        <Grid item xs={3}>
          <Fragment>
            <div className={classes.uploadProfileImage}>
              <input
                accept="image/*"
                id="contained-button-file"
                type="file"
                className={classes.inputUpload}
              />
              <label htmlFor="contained-button-file">
                <div className={classes.uploadImageforprofile}>
                  <span> upload photo here </span>
                </div>
              </label>
            </div>

            <div>
              <Typography>
                <div>Contact me on : - </div>
                <label className={classes.contactLinks}> <a href='http://www.facebook.com' target='_blank'>
                  <FacebookIcon
                    fontSize="medium"
                    color='primary'
                  />
                </a>
                  <a href='http://www.github.com' target='_blank'>
                    <GitHubIcon
                      fontSize="medium"
                      color='primary'
                    />
                  </a>
                  <a href='http://www.twitter.com' target='_blank'>
                    <TwitterIcon
                      fontSize="medium"
                      color='primary'
                    />
                  </a>
                  <a href='http://www.linkedIn.com' target='_blank'>
                    <LinkedInIcon
                      fontSize="medium"
                      color='primary'
                    />
                  </a>
                </label>
              </Typography>

            </div>
          </Fragment>
        </Grid>
        <Grid item xs={8}>
          <form className={classes.root} noValidate autoComplete="off">
            <ExpansionPanel expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel4bh-content"
                id="panel4bh-header"
              >
                <Typography className={classes.heading}>Personal data</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails className={classes.formFields}>
                <TextField required id="standard-required" label="Required" value={name} onChange={handleChangeName} />

                <FormControl component="fieldset" className={classes.formControl}>
                  <FormLabel component="legend">Gender</FormLabel>
                  <RadioGroup aria-label="gender" name="gender1" value={gender} onChange={handleChangeGender}>
                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                    <FormControlLabel value="male" control={<Radio />} label="Male" />

                  </RadioGroup>
                </FormControl>
                <TextField
                  id="standard-multiline-flexible"
                  label="About Yourself"
                  multiline
                  rowsMax="4"
                  value={descirption}
                  onChange={handleChangeDescription}
                />
                <div>
                  <Typography>
                    Upload Your resume
                  </Typography>

                  <input
                    accept="application/pdf"
                    className={classes.inputUpload}
                    id="contained-button-file"
                    type="file"
                  />
                  <label htmlFor="contained-button-file">
                    <Button variant="contained" color="primary" component="span">
                      Upload
                    </Button>
                  </label>
                </div>

              </ExpansionPanelDetails>
            </ExpansionPanel>

          </form>
        </Grid>
      </Grid>
    </Fragment>

  )
}
