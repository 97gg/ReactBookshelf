import React, {useEffect, useState} from "react";
import clsx from "clsx";
import BooksGrid from "../../components/BooksGrid/BooksGrid";
import BooksTable from "../../components/BooksTable/BooksTable";
import {useParams} from "react-router-dom";
import SearchBar from "../../components/SearchBar/SearchBar";
import style from './Books.module.css'


const API_KEY = process.env.REACT_APP_API_KEY;
const API_URL = process.env.REACT_APP_API_URL;


function Books() {
    const [displayGrid, setDisplayGrid] = useState(true);
    const [booksListData, setBooksListData] = useState([]);
    const [input, setInput] = useState(" ");
    const {categoryName} = useParams();
    const placeholder = "Inserisci una parola chiave";
    const title = "Cerca per parola chiave";
    const ctaText = "Cerca";


    const handleSearch = (e) => {
        setInput(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        getBooksByKeyword();
    }

    function getBooks() {
        fetch(`${API_URL}/v1/volumes?q=avventura+&printType=books&orderBy=newest&key=${API_KEY}`)
            .then(response => response.json())
            .then(result => {
                const data = result.items;
                setBooksListData(data);
            })
            .catch(error => console.log('error', error));
    }

    function getBooksByCategory() {
        fetch(`${API_URL}/v1/volumes?q=${categoryName}+subject=${categoryName}&orderBy=newest&key=${API_KEY}`)
            .then(response => response.json())
            .then(result => {
                const data = result.items;
                setBooksListData(data);
            })
            .catch(error => console.log('error', error));
    }

    function getBooksByKeyword(){
        fetch(`${API_URL}/v1/volumes?q=?${input}&orderBy=newest&key=${API_KEY}`)
            .then(response => response.json())
            .then(result => {
                const data = result.items;
                setBooksListData(data);
            })
            .catch(error => console.log('error', error));
    }

    useEffect(() => {
        if(categoryName) {
            getBooksByCategory();
        }
        else getBooks();

    }, []);




    return (
        <div className="container">

            {/* Search Bar*/}
            <div className="row justify-content-center">
                <div className="col-11 col-md-4 mt-5 mb-3 mx-auto">
                    <SearchBar placeholder={placeholder} title={title} ctaText={ctaText} handleSearch={handleSearch} handleSubmit={handleSubmit}> </SearchBar>
                </div>
            </div>

            <div className="row justify-content-between">
                <div className="col">
                    <h1 className={categoryName ? style.title : "d-none"}>{categoryName}</h1>
                </div>

                {/* Switch Button */}
                <div className="col">
                    <div className={style.switch}>
                        <div className={clsx(style.option, {[style.active] : displayGrid})}
                             onClick={ () => setDisplayGrid(true)}>
                            Griglia
                        </div>

                        <div className={clsx(style.option, {[style.active] : !displayGrid})}
                             onClick={ () => setDisplayGrid(false)}>
                            Tabella
                        </div>
                    </div>
                </div>
            </div>

            <div className="row justify-content-center">
                {/* Conditional Rendering */}
                <div className="col">
                    {displayGrid ?
                        <BooksGrid booksList={booksListData} col={{xs:1, sm:2, md:3, lg:4}}/> :
                        <BooksTable booksList={booksListData}/>}
                </div>
            </div>

        </div>
    )
}

export default Books;