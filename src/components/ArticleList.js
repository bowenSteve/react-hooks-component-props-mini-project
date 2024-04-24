import React from "react";
import Article from "./Article";

function ArticleList(props){
    const article = props.posts.map(articles=><Article key={articles.id} title={articles.title} date={articles.date} preview={articles.preview} minutes={articles.minutes}/>)
    return(
        <main>
            {article}
        </main>
    )
}

export default ArticleList;