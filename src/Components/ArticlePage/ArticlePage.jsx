/* eslint-disable react/prop-types */
import Classes from './ArticlePage.module.scss'
import { useParams } from 'react-router-dom'

function ArticlePage(props) {
    const {id} = useParams();

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
            {id}
        </div>
    )
}

export default ArticlePage
