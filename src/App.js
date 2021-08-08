import React from 'react';
import Header from './Header';
// import IsLoadingAndError from './IsLoadingAndError';
import BestBooks from './BestBooks';
import Profile from './component/Profile'
import { withAuth0 } from '@auth0/auth0-react';


import Footer from './Footer';
import Login from './Login';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

class App extends React.Component {

  render() {
    console.log('app', this.props);
    // const {isAuthenticated} = this.props.auth0;
    return(
      <>
        <Router>
          {/* <IsLoadingAndError> */}
            <Header />
            <Switch>
              <Route exact path="/">

                {
                  this.props.auth0.isAuthenticated ? <BestBooks/> : <Login/>
                }
                
                  </Route>
                  <Route exact path = "/profile">
                  {
                   <Profile/>
                }
                
              </Route >
              {/* TODO: add a route with a path of '/profile' that renders a `Profile` component */}

            </Switch>
            <Footer />
          {/* </IsLoadingAndError> */}
        </Router>
      </>
    );
  }
}

export default withAuth0(App);
