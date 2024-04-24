import React from "react";
import ArticleList from "./ArticleList";

function Article({title,date="January 1, 1970",preview, minutes}){

    return(
        <article>
            <h3>{title}</h3>
            <small>{date}</small>
            <p>{preview}</p>
            <p>Reading time: {minutes} minutes</p>
        </article>

    )

}
export default Article;