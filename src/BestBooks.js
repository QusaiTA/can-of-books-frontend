import React from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './BestBooks.css';
import Card from 'react-bootstrap/Card';

class MyFavoriteBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    };

  }

  componentDidMount = () => {
    const userEmail = this.props.auth0.user.email;
    axios.get(`${process.env.REACT_APP_SERVER}/books?email=${userEmail}`).then((axiosResponse) => {
      this.setState({
        books: axiosResponse.data
      });
    }).catch(error => alert(error));
  };
  render() {
    return (
      <Jumbotron>
        <div>
          <h1>My Favorite Books</h1>
          <p>
            This is a collection of my favorite books
          </p>
          <div>
            {
              this.state.books.length &&
              <div>
                {
                  this.state.books.map(book => {
                    return (

                      <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={book.img} />
                        <Card.Body>
                          <Card.Title>{book.title}</Card.Title>
                          <Card.Text>
                            {book.description}
                            {book.status}
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    )
                  })
                }
              </div>
            }

          </div>


        </div>
      </Jumbotron>
    )
  }
}

export default withAuth0(MyFavoriteBooks);
