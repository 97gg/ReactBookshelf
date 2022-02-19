import React, {useEffect, useState} from "react";
import style from "./BookDetail.module.css";
import {NavLink, useParams} from "react-router-dom";
import {Button, Card, CardBody, CardHeader, CardImg, CardSubtitle, CardText, CardTitle} from "reactstrap";
import bestsellerListData from '../../assets/data/bestseller.json'

const API_KEY = process.env.REACT_APP_API_KEY;
const API_URL = process.env.REACT_APP_API_URL;


function BookDetail() {
    const {bookId} = useParams();
    const [bookData, setBookData] = useState([]);

    function getBookDetails() {
        fetch(`${API_URL}/v1/volumes/${bookId}?&key=${API_KEY}`)
            .then(response => response.json())
            .then(result => {
                setBookData(result);
            })
            .catch(error => console.log('error', error));
    }

    useEffect(() => {
        if(parseInt(bookId) < 4) {
            setBookData(bestsellerListData[bookId-1]);
        }
        else
            getBookDetails();
    }, [bookId]);

    return (
        <div className="container">
            <div className="row">
                <div className="col-10 mx-auto">
                    <Card className={style.cardDetail+" my-5"}>
                        <div className="d-flex flex-row">
                            <CardImg top className={style.detailImage+ " mb-4 col-3"} src={bookData.volumeInfo?.imageLinks?.thumbnail} alt="Card image cap" />
                            <div className="m-5 col-7">
                                <h1 className="mb-2">{bookData.volumeInfo?.title}</h1>
                                <h5 className="mb-4">{bookData.volumeInfo?.subtitle}</h5>
                                <p><strong>Autore: </strong>{bookData.volumeInfo?.authors}</p>
                                <p><strong>Editore: </strong>{bookData.volumeInfo?.publisher}</p>
                                <p><strong>Anno di pubblicazione: </strong>{bookData.volumeInfo?.publishedDate}</p>
                                <p className="mb-4"><strong>Categorie: </strong>{bookData.volumeInfo?.categories}</p>
                                <button className={ bookData.saleInfo?.buyLink ? "d-inline "+style.buyButton : "d-none" } onClick={()=> window.open(bookData.saleInfo.buyLink, "_blank")}>Compra su Google Libri</button>
                            </div>
                        </div>
                        <CardBody className="m-5">
                            <h2>Descrizione</h2>
                            <p>{bookData.volumeInfo?.description.replace(/<[^>]+>/g, '')}</p>
                        </CardBody>
                    </Card>
                </div>
            </div>
        </div>
    )

}

export default BookDetail;