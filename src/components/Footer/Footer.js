import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons"
import style from "./Footer.module.css"
import {NavLink} from "react-router-dom";

function Footer(props) {
    const {copyright, navItems} = props;

    const itemList = navItems.map((item) => {
        return (
            <li key={item.url}>
                <NavLink className="nav-link"
                        exact={item.exact}
                        to={item.url}
                >
                    {item.text}
                </NavLink>
            </li>
        )
    })

    return(
        <div>
            <footer className={style.footer}>
                <div className={"d-md-flex flex-row justify-content-md-between align-items-center p-2 "+style.copyright}>
                    <div className="d-flex flex-col justify-content-center mx-md-5">
                        © 2022 Copyright: {copyright}
                    </div>
                    <div className="d-flex flex-col justify-content-center mx-md-5">
                        <a
                            className="btn btn-lg mx-4"
                            href="/"
                            role="button"
                        >
                            <FontAwesomeIcon icon={faFacebookF} className={style.socialIcon}/>
                        </a>
                        <a
                            className="btn btn-lg mx-4"
                            href="/"
                            role="button"
                        >
                            <FontAwesomeIcon icon={faTwitter} className={style.socialIcon}/>
                        </a>
                        <a
                            className="btn btn-lg mx-4"
                            href="/"
                            role="button"
                        >
                            <FontAwesomeIcon icon={faInstagram} className={style.socialIcon}/>
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    )

}

export default Footer;