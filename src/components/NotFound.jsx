import React from "react";
import { Link } from "react-router-dom";

export const NotFound = () => {

    return (
        <section style={{color: "white", backgroundColor: 'rgb(33, 37, 41)', maxWidth: "100%", minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
            <img src='https://prestashop.com/sites/default/files/wysiwyg/404_not_found.png' alt="error404" />
            <Link to="/" style={{textDecoration: 'none', fontSize: 24}}>Take me home!</Link>
        </section>
    )
}