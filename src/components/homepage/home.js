import React, { Fragment } from 'react';
import AppBar from '../../container/appBar/appBar';
import Grid from '@material-ui/core/Grid';

import './home.scss';
const moreAnimation = () => {
  console.log('hello')
}
export default function Home() {

  return (
    <Fragment>
      <div className='home-container'>
        <div className='header'>
          <Grid container direction='row'>
            <Grid item xs={6}>
              <div className='logo'>
                Profile
        </div>
            </Grid>
            <Grid item xs={6}>
              <div className='navbar-links'
                onClick={() => moreAnimation()}
              >
                More Animations
        </div>
            </Grid>
          </Grid>

        </div>

        <div className="typing-name">
          <p>
            Hi I'm Bharat Gupta! Looking to start my career as a Front-End Developer.
          </p>
          <p>
            I have experience with HTML, SASS, Bootstrap, JavaScript, jQuery, React.
          </p>
          <p>
            This site was designed and built by me - the code is available on Github.
          </p>
        </div>
      </div>
    </Fragment>
  )

}