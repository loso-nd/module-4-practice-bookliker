import React,  { Component } from "react";
import {
  Container,
  Header,
  Menu,
  Button,
  List,
  Image
} from "semantic-ui-react";

import BookList from './components/BookList'

class App extends Component {

  state = {
    books: []
  }

  componentDidMount() {
    fetch('http://localhost:3000/books')
      .then(resp => resp.json())
      .then(books => //console.log(books)
        {this.setState({ books })

      })
  }

  render() {

    return (
      <div>
        <Menu inverted>
          <Menu.Item header>Bookliker</Menu.Item>
        </Menu>
        <main>
          <Menu vertical inverted>
            <Menu.Item as={"a"} onClick={e => console.log("book clicked!")}>
              <BookList books={this.state.books}/>
            </Menu.Item>
          </Menu>
          <Container text>
            <Header>Book title</Header>
            <Image
              src="https://react.semantic-ui.com/images/wireframe/image.png"
              size="small"
            />
            <p>Book description</p>
            <Button
              color="red"
              content="Like"
              icon="heart"
              label={{
                basic: true,
                color: "red",
                pointing: "left",
                content: "2,048"
              }}
            />
            <Header>Liked by</Header>
            <List>
              <List.Item icon="user" content="User name" />
            </List>
          </Container>
        </main>
      </div>
    );
  }
}

export default App;
