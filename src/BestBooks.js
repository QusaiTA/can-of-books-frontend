import React from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './BestBooks.css';
// import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import FormModal from './component/FormModal';

class MyFavoriteBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      displayAddModal: false
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


  handelDisplayModal = () => {
    this.setState({ displayModal: !this.state.displayAddModal });
  };

  handelAddBookForm = (e) => {

    e.preventDefault();
    this.handelDisplayModal(); // hide the modal after form submission
    console.log('title ', e.target.title.value);
    // console.log('breed: ', e.target.catBreed.value);
    // console.log('Image: ', e.target.catImage.value);

    const body = {
      email: this.props.auth0.user.email, // we are getting the email of the user from auth0
      title: e.target.title.value,
      description: e.target.bookDescription.value,
      img: e.target.bookImage.value,
      status:e.target.bookStatus.value,
    };

    axios.post(`${process.env.REACT_APP_SERVER}/book`, body).then(axiosResponse => {
      // console.log(axiosResponse.data);
      this.state.books.push(axiosResponse.data);
      this.setState({
        books: this.state.books
      });
    }).catch(error => alert(error));
  }

  render() {
    return (
      <Jumbotron>
        <div>
          <h1>My Favorite Books</h1>
          <p>
            This is a collection of my favorite books
          </p>
          <Button variant='secondary' onClick={()=>{this.handelDisplayModal()}}>Add a Book</Button>
          <FormModal
          show={this.state.displayAddModal}
          handelDisplayModal={this.handelDisplayModal}
          handelSubmitForm={this.handelAddBookForm}
        />
          <br />
          <br />

          <div>
            {
              this.state.books.length &&
              <div>
                {
                  // this.state.books.map(book => {
                  // return (
                  <Carousel style={{width:'40rem'}}>
                    <Carousel.Item >
                      <img
                        className="d-block w-100"
                        src={this.state.books[0].img}
                        alt="First slide"
                        
                      />
                      <Carousel.Caption >
                        <h3 >{this.state.books[0].title}</h3>
                        <p>{this.state.books[0].description}</p>
                        <p>{this.state.books[0].status}</p>
                      </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src={this.state.books[1].img}
                        alt="Second slide"
                      />

                      <Carousel.Caption>
                        <h3>{this.state.books[1].title}</h3>
                        <p>{this.state.books[1].description}</p>
                        <p>{this.state.books[1].status}</p>
                      </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src={this.state.books[2].img}
                        alt="Third slide"
                      />

                      <Carousel.Caption>
                        <h3>{this.state.books[2].title}</h3>
                        <p>{this.state.books[2].description}</p>
                        <p>{this.state.books[2].status}</p>
                      </Carousel.Caption>
                    </Carousel.Item>
                  </Carousel>

                  // <Card style={{ width: '18rem' }}>
                  //   <Card.Img variant="top" src={book.img} />
                  //   <Card.Body>
                  //     <Card.Title>{book.title}</Card.Title>
                  //     <Card.Text>
                  //       {book.description}
                  //       {book.status}
                  //     </Card.Text>
                  //   </Card.Body>
                  // </Card>
                  // )
                  // })
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
