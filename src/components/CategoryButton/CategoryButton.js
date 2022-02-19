import React from "react";
import {NavLink} from "react-router-dom";
import style from "./CategoryButton.module.css"

function CategoryButton(props) {
    const {categoryName} = props;

    return (
        <button className={style.categoryContainer}>{categoryName}</button>
    )
}

export default CategoryButton;