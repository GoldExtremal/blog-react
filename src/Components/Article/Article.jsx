/* eslint-disable react/prop-types */
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
                {/* развернуть массив в N элементов */}
                <div>tag</div>
                <div>tag</div>
            </div>


            {/* 
            {props.date}
            {props.author}
            {props.title}
            {props.text}
            tags={[]}
             */}
        </div>
    )
}

export default Article
