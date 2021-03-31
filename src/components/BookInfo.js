import React from 'react'
import {
    Container,
    Header,
    Button,
    List,
    Image
  } from "semantic-ui-react";
  
  
  const BookInfo = (props) => {
      return (
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

      )
  }
  
export default BookInfo;