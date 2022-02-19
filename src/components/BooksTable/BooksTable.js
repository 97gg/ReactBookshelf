import React from "react";
import style from "./BooksTable.module.css";
import {NavLink} from "react-router-dom";


function BooksTable(props) {
    const {booksList} = props;

    const bookTr = booksList.map( (book) => {
        return (
            <tr key={book.id}>
                <td className="col-3 text-center">
                    <img src={book.volumeInfo?.imageLinks?.thumbnail} className="w-50" loading="lazy" alt="book image"/>
                </td>
                <td className="col-3">{book.volumeInfo?.title}</td>
                <td className="col-2">{book.volumeInfo?.authors}</td>
                <td className="col-2">
                    <a className={book.saleInfo?.buyLink ? "d-inline "+style.buyLink : "d-none"} href={book.saleInfo?.buyLink} target="_blank" rel="noreferrer">Compra</a>
                </td>
                <td className="col-2 text-center">
                    <NavLink className={style.detailsButton} to={`/books/${book.id}`}>Dettagli</NavLink>
                </td>
            </tr>
        )
    });

    return (
        <div className="overflow-auto">
            <table className="table">
                <thead>
                <tr>
                    <td className="col-2">Immagine</td>
                    <td className="col-2">Titolo</td>
                    <td className="col-2">Autore</td>
                    <td className="col-3">Compra</td>
                    <td className="col-3 text-center">Dettagli</td>
                </tr>
                </thead>
                <tbody>
                {bookTr}
                </tbody>
            </table>
        </div>

    )
}

export default BooksTable;