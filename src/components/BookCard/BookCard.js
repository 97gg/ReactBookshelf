import React from "react";
import style from "./BookCard.module.css";
import {NavLink} from "react-router-dom";
import {Card, CardBody, CardHeader, CardImg, CardText, CardTitle} from "reactstrap";


function BooksCard(props) {
    const {id, title, authors, image} = props;

    return (
        <Card className={style.bookCard+" mx-4"}>
            <CardHeader>
                <CardImg className={style.cardImage} top src={image}/>
            </CardHeader>
            <CardBody className={style.cardBodyContainer}>
                <CardTitle className={" fw-bold pt-2"}>{title}</CardTitle>
                <CardText>
                    Autore: {authors} <br/>
                </CardText>
                <NavLink className={style.cardDetailsButton+" float-end"} to={`/books/${id}`}>Dettagli</NavLink>
            </CardBody>
        </Card>
    )
}

export default BooksCard;