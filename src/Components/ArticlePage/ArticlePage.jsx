/* eslint-disable react/prop-types */
import Classes from './ArticlePage.module.scss'

function ArticlePage(props) {
   
    return (
        <div className={Classes.ArticlePage}>
            <div className={Classes.article_container}>
                <h2 className={Classes.title}>{props.title}</h2>
                <div className={Classes.author}>
                    <p>written by {props.author.email}</p>
                    <p>on {props.author.date}</p>
                </div>
                <div className={Classes.article_text}>{props.text}</div>
            </div>
        </div>
    )
}

export default ArticlePage
