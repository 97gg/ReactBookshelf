import React, {useState} from "react";
import {Button, Col, Form, FormGroup, Input, InputGroup, Label} from "reactstrap";
import style from "./SearchBar.module.css"
import {Link, NavLink} from "react-router-dom";
import {input} from "../../views/Books/Books";

function SearchBar(props){
    const {placeholder, title, ctaText, handleSearch, handleSubmit} = props;

    return (
        <div>
            <h3 className={style.label+" pb-3"}>
                {title}
            </h3>
            <Form onSubmit={handleSubmit}>
                <InputGroup>
                    <Input
                        id="search"
                        name="search"
                        placeholder={placeholder}
                        className={style.bar}
                        onInput={handleSearch}
                    />
                    <button className={style.searchButton+" px-4"}>Cerca</button>
                </InputGroup>
            </Form>
        </div>
    )

}

export default SearchBar;