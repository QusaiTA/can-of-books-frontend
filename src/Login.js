import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';

import './Login.css';

class Login extends React.Component {


  render() {
    return(
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Log In</Card.Title>
          <Card.Text>
            Click Log In Button to login
          </Card.Text>
          
         
           
           
        </Card.Body>
      </Card>
    )
  }
}

export default Login;
