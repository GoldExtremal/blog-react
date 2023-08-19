import Classes from './NewsFeedPage.module.scss'
import Navbar from '../Navbar/Navbar'
import Article from '../Article/Article'


function NewsFeedPage() {

    return (
        <div className={Classes.NewsFeedPage}>
            <Navbar />

            <div className={Classes.articles_container}>
                <Article
                    date=''
                    author=''
                    title=''
                    text=''
                    tags={[]}
                />

                <Article/>
                <Article/>
                <Article/>
                <Article/>
            </div>

        </div>
    )
}

export default NewsFeedPage
