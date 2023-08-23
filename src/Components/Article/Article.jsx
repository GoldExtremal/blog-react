/* eslint-disable react/prop-types */
import { createElement } from 'react'
import Classes from './Article.module.scss'

function Article(props) {

    return (
        <div className={Classes.Article}>
            <div className={Classes.about}>
                <p className={Classes.date}>{props.date}</p>
                <p className={Classes.author}>{props.author}</p>
            </div>

            <div className={Classes.feed}>
                <h3 className={Classes.title}>{props.title}</h3>
                {/* разбить на абзацы входящую простыню */}
                <div className={Classes.text}>{props.text}</div>
            </div>

            <div className={Classes.tags}>
                {props.tags.map(tag => createElement('div', { className: Classes.tag, key:tag }, `#${tag}`))}
            </div>
        </div>
    )
}

export default Article
