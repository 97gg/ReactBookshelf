import React from "react";
import BookCard from "../../components/BookCard/BookCard";
import bestsellerListData from '../../assets/data/bestseller.json'
import {NavLink} from "react-router-dom";
import CategoryButton from "../../components/CategoryButton/CategoryButton";


function Home() {
    const categories = ["narrativa", "amore", "avventura", "fantasy", "horror", "gialli", "sport", "viaggi"];

    const categoriesRow = categories.map( (category) => {
        return (
            <div className="col m-4 my-5 text-center">

                <NavLink to={`/books/category/${category}`}>
                    <CategoryButton categoryName={category}/>
                </NavLink>

            </div>
        )
    })

    const bestsellerRow = bestsellerListData.map((book) => {
        return (
            <div className="col m-4" key={book.id}>
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
        <div className="container">
            <div className="col my-5">
                <div className="row mb-5">
                    <h2>Bestseller</h2>
                    {bestsellerRow}
                </div>

                <div className="row">
                    <h2 className="mb-3">Categorie in evidenza</h2>
                    {categoriesRow}
                </div>
            </div>
        </div>
    )
}


export default Home;