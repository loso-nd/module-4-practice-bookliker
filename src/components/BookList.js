import React from 'react'

const BookList = (props) => (
        <div>
            {props.books.map(book => {
                return <div>{book.title}</div>
            })}
        </div>
    )

export default BookList;