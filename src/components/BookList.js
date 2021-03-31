import React from 'react'
import Book from './Book'

const BookList = (props) => (
        <div>
            {props.books.map(bookData => <Book book={bookData} onClick={props.onClick} key={bookData.id}/>)}
        </div>
    )


/**
 * const BookList = (props) => {
 *      return (
            <div>
                {props.books.map(bookData => <Book book={bookData}/>)}
            </div>
        )
    }
* */ 

export default BookList;