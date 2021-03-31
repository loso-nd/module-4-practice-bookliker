import React,  { Component } from "react";
import {Menu} from "semantic-ui-react";
import BookList from './components/BookList'
import BookInfo from './components/BookInfo'

class App extends Component {
  state = {
    books: [],
    bookInfo: {}
  }

  componentDidMount() {
    fetch('http://localhost:3000/books')
      .then(resp => resp.json())
      .then(books => //console.log(books)
        {this.setState({ books })
      })}

  displayBook = (bookInfo) => {
   // console.log(bookInfo, 'I update to the main page')
    this.setState(prevState => {
      if(prevState.bookInfo === bookInfo){
        this.setState({bookInfo: null})
      }else{
        this.setState({bookInfo})
      }

      //  w/ ternary -> this.setState(prevState => prevState.bookInfo == bookInfo ? this.setState({bookInfo : null}):this.setState({bookInfo})
      //  no conditinoal  this.setState({bookInfo : book)}
      // or this.setState({ bookInfo }) and change the param of the method to bookInfo
    })
  }

//set state with new user who liked the book
//`{"id":1, "username":"pouros"}`, so to like a book send a `PATCH` request to `http://localhost:3000/books/:id` with our user
  

likeBook = (id) => {
  console.log(id, 'I like to read')
}

  render() {
    return (
      <div>
        <Menu inverted>
          <Menu.Item header>Bookliker</Menu.Item>
        </Menu>
        <main>
          <Menu vertical inverted>
          <BookList books={this.state.books} onClick={this.displayBook} />

          </Menu>
          {/*currently the bookInfo in state is set to null, If there is no book, we render null, if there is a book then we render the book info*/}
          {this.state.bookInfo ? <BookInfo bookInfo={this.state.bookInfo} 
          likeBook={this.likeBook}/> : null}

        
        </main>
      </div>
    );
  }
}

export default App;
