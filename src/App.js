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

  displayBook = (book) => {
    console.log(book, 'I update to the main page')
    this.setState({
      bookInfo : book
    })
    // or this.setState({ bookInfo }) and change the param of the method to bookInfo
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
          {this.state.bookInfo ? <BookInfo bookInfo={this.state.bookInfo}/> : null}

        
        </main>
      </div>
    );
  }
}

export default App;
