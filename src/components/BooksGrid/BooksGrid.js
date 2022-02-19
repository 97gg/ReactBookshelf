import React from "react";
import BookCard from "../BookCard/BookCard";


function BooksGrid(props) {
    const {booksList, col} = props;

    const booksCardsCol = booksList.map((book) => {
        return (
            <div className="col mb-4" key={book.id}>
                <BookCard
                    id={book.id}
                    title={book.volumeInfo?.title}
                    authors={book.volumeInfo.authors}
                    image={book.volumeInfo?.imageLinks?.thumbnail}
                />
            </div>
        )
    });

    return (
        <div className={ `row
            row-cols-${col.xs}
            row-cols-sm-${col.sm}
            row-cols-md-${col.md}
            row-cols-lg-${col.lg}`
        }>
            {booksCardsCol}
        </div>
    )
}

export default BooksGrid;