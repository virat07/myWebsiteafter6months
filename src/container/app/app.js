import React from 'react';
import './app.scss';
import appBar from '../appBar/appBar';
import Profile from '../profile/profile';
import homeLocker from '../../components/homeLocker';
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';
import ROUTES from '../../constants/routers';

class App extends React.Component {
  render() {
    let locationPath = window.location.pathname;
    return (
      <div>
        {/* <MSContentWrapper/> */}
        <BrowserRouter basename="/">
          <div>
            {(locationPath === ROUTES.PROFILE)}
            <div>
              <Switch>
                <Route exact path={ROUTES.PROFILE} component={Profile} />
                <Route component={homeLocker} />
              </Switch>
            </div>
          </div>
        </BrowserRouter>
      </div>
    )
  }
}
export default App;