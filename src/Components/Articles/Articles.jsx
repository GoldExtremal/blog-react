import Classes from './Articles.module.scss'
import Navbar from '../Navbar/Navbar'
import Article from '../Article/Article'


function Articles() {

    return (
        <div className={Classes.Articles}>
            <Navbar />

            <div className={Classes.articles_container}>
                <Article 
                    date=''
                    author=''
                    title=''
                    text=''
                    tags={[]}
                />
            </div>

        </div>
    )
}

export default Articles
