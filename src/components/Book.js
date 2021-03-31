import React from 'react'
import {Menu} from "semantic-ui-react";
const Book = ({book, onClick}) => {
//let {book} = props or remove {book} in the param above and replace with props
    return (
        <div>
        <Menu.Item as={"a"} onClick={() => onClick(book)}>
            {book.title}
        </Menu.Item>

        </div>
    )

}


export default Book;