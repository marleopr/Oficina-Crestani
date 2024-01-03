import React from 'react';
import '../../App.css';
import * as s from "./styled";

import errorImage from "../../assets/img/trator404.jpg"

export default function ErrorPage() {

    return (
        <s.Body>
            <s.MainHeader>

            </s.MainHeader>
            <s.MainCards>
                <s.CardMovies>
                    Error 404 - Page not found <br /> Página não encontrada 🙁
                    <s.PosterPath src={errorImage} />
                </s.CardMovies>
            </s.MainCards>

        </s.Body>
    )
}