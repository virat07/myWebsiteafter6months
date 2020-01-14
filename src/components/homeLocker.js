import React, { Fragment } from 'react';
import '../components/loader.scss';
import Grid from '@material-ui/core/Grid';
import Homepage from '../container/homePage/homepage';

class homeLocker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openGates: false
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.setState({
      openGates: true
    })
  }


  render() {

    return (
      this.state.openGates ?
        (<Fragment>
          <Homepage />
        </Fragment>) : (<div>
          <div className='loader-page'>
            <div className='left-div-container'>
              <div className='init-left'>
              </div>
            </div>

            <div className='right-div-container'>
              <div className='init-right'>
              </div>
            </div>

          </div>
          <div className='loader-logo'>
            <div className='leftDiv'>
              <div className='loadingSpinner clockwise'>
                <div className='loadingStand'>
                </div>
              </div>
            </div>

            <div className='rightDiv'>
              <div className='loadingSpinner1'>
              </div>
            </div>

            <div className='rightDiv'>
              <div className='loadingSpinner2'>
              </div>
            </div>

            <div className='rightDiv'>
              <div className='loadingSpinner3'>
              </div>
            </div>

            <div className='rightDiv' >
              <img className='lockImg' src={"https://img.icons8.com/ios/50/000000/keyhole-shield.png"} onClick={(e) => this.handleClick(e)} />
            </div>

          </div>
        </div>)

    )
  }
}
export default homeLocker;