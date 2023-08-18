import Classes from './Homepage.module.scss'
import Navbar from '../Navbar/Navbar'

function Homepage() {

    return (
        <div className={Classes.Homepage}>
            <Navbar />
            <div className={Classes.homepage_container}>
                <h1 className={Classes.title}>Some information of the main page.</h1>
                <p className={Classes.description}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab quisquam aspernatur omnis doloribus consequatur iusto, esse earum animi neque vel beatae saepe incidunt praesentium? Consectetur nam dolorum dolores magnam cupiditate! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab quisquam aspernatur omnis doloribus consequatur iusto, esse earum animi neque vel beatae saepe incidunt praesentium? Consectetur nam dolorum dolores magnam cupiditate!
                </p>

                <div className={Classes.block}>
                    <h3 className={Classes.block_name}>Any block</h3>
                    <div className={Classes.block_items}>
                        <div className={Classes.block_item}>
                            <h6 className={Classes.item_title}>Lorem, ipsum dolor.</h6>
                            <p className={Classes.item_text}>
                                Lorem ipsum dolor sit adipisicing elit. Autem, minus dint ilique incidunt ex delectus.
                            </p>
                            <p className={Classes.item_text}>
                                Illo obcaecati alias similique id, inventore incidunt ex vero pariatur necessitatibus earum magnam explicabo delectus.
                            </p>
                        </div>
                        <div className={Classes.block_item}>
                            <h6 className={Classes.item_title}>Lorem, ipsum.</h6>
                            <p className={Classes.item_text}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, minus ducimus quis neque dignissimos sint illo obcaecati alias similique id, inventore incidunt ex vero pariatur necessitatibus earum magnam explicabo delectus?
                            </p>
                        </div>
                        <div className={Classes.block_item}>
                            <h6 className={Classes.item_title}>Lorem ipsum dolor sit amet.</h6>
                            <p className={Classes.item_text}>
                                Lorem ipsum dolor sit adipisicing elit. Autem, minus dint ilique incidunt ex delectus.
                            </p>
                            <p className={Classes.item_text}>
                                Illo obcaecati alias similique id, inventore incidunt ex vero pariatur necessitatibus earum magnam explicabo delectus.
                            </p>
                        </div>
                    </div>
                </div>

                <p className={Classes.description}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum fuga molestias voluptatem, vel iure dolorem dolorum voluptates ducimus dignissimos blanditiis ipsam suscipit quo maxime, incidunt modi, harum consequuntur accusamus nobis?
                </p>
                <p className={Classes.description}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur cupiditate repellendus temporibus sint laboriosam nemo! Quos quaerat tempore explicabo soluta maxime porro vel doloremque placeat? Quo odit itaque sapiente consequuntur rerum harum id esse voluptatum! Aspernatur quisquam ad repudiandae laborum aliquid culpa eum nemo animi reprehenderit, a magnam quidem consectetur accusamus ea architecto aliquam officiis distinctio? Pariatur sint natus odio eum voluptatum ducimus rerum tempore soluta modi, adipisci dignissimos eligendi quaerat, nobis eius aliquid repudiandae. Excepturi est mollitia impedit quia temporibus, quis ipsam, at voluptas unde eveniet libero tempore officia aperiam atque. Qui a hic perspiciatis illo voluptates quo at delectus similique numquam quod laboriosam in, placeat voluptate, tenetur nostrum itaque neque quasi veniam velit fuga impedit consectetur ad. Repellendus blanditiis, veritatis similique ipsa in iste necessitatibus vitae reprehenderit possimus dicta rerum fuga eius debitis nostrum expedita quaerat cumque repellat dolore nobis numquam. Porro nam nesciunt sunt, in dicta, sit impedit, necessitatibus dignissimos consequatur rem voluptas tempora perferendis illo numquam dolores quasi error officiis at blanditiis quae doloremque sed. Consectetur quas ut consequuntur nesciunt. Magnam tempore veniam dolor deserunt dolores quasi deleniti illo quam temporibus vero, autem officiis minima nemo voluptas incidunt assumenda animi itaque eius inventore? Eveniet, dignissimos id.
                </p>
                <p className={Classes.description}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint facere asperiores nihil obcaecati delectus quaerat fugit modi maxime, deleniti laboriosam eos ut doloribus ab expedita totam nulla, aliquid veniam dignissimos. Aspernatur ipsa quo nihil aperiam magni magnam libero suscipit, ut reprehenderit deleniti facilis corporis hic necessitatibus architecto reiciendis vitae porro deserunt minima. Sint quo placeat inventore modi quaerat unde eligendi facere fugiat deleniti dolor! Dolore, eaque. Assumenda, cupiditate distinctio odio ratione aliquid ipsam, labore similique dolorem non illo iusto ab nihil voluptatibus soluta ducimus rerum culpa eius molestias porro praesentium necessitatibus libero explicabo aliquam officia. Aut dolor quibusdam laudantium accusantium.
                </p>
            </div>
        </div>
    )
}

export default Homepage
