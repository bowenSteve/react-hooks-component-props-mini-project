import React from "react";
import Article from "./Article";

function ArticleList(props){
    let prop= props.posts;
    const article = prop.map(articles=><Article key={articles.id} title={articles.title} date={articles.date} preview={articles.preview} minutes={articles.minutes}/>)
    return(
        <main>
            {article}
        </main>
    )
}

export default ArticleList;