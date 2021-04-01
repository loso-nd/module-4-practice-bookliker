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
      if(prevState.bookInfo == bookInfo){
        return({bookInfor:null})
      }else {
        return ({bookInfo})
      }
      //   this.setState({bookInfo : book)}
    })// or this.setState({ bookInfo }) and change the param of the method to bookInfo
  }
  

  // {"id":1, "username":"pouros"}`, so to like a book send a `PATCH` request to `http://localhost:3000/books/:id` with an array of users who like the book. This array should be equal to the existing array of users that like the book, plus your user.

  likeBook = (id) => {
    console.log("Found User")
    let ourUser = {"id":1, "username":"pouros"}
    if(this.state.bookInfo.users.find(user => ourUser.id == user.id)){
      console.log("Found User")
    } else{
      console.log("Found User")
      this.setState({bookInfo: {...this.state.bookInfo, users: [...this.state.bookInfo.users, ourUser]}}, this.updateBook())
    }
   
  }


  updateBook = () => {
    fetch(`http://localhost:3000/books/${this.state.bookInfo.id}`,{
    method: 'PATCH', 
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(this.state.bookInfo),
  })
  .then(resp => resp.json())
  .then(console.log)
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
          {this.state.bookInfo ? <BookInfo bookInfo={this.state.bookInfo} likeBook={this.likeBook}/> : null}

        
        </main>
      </div>
    );
  }
}

export default App;