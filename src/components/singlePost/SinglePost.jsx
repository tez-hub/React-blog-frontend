import './singlepost.css'

const SinglePost = () => {
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img src="./images/post1.jpg" alt="" className="singlePostImg" />
                <h1 className="singlePostTitle">
                    Lorem ipsum dolor sit amet.
                    <div className="singlePostEdit">
                        <i className="singlePostIcon far fa-edit"></i>
                        <i className="singlePostIcon far fa-trash-alt"></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">Author: <b>Mwema</b></span>
                    <span className="singlePostDate">1 hour ago</span>
                </div>
                <p className="singlePostDesc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos et nesciunt delectus dolore, quae, neque alias similique minima atque deleniti odio ullam dignissimos sed repellendus labore enim eius adipisci. Dolor, eum impedit quod voluptate voluptas optio expedita deleniti asperiores dolorum laborum at, doloribus sapiente autem dicta tempora odio veritatis ipsam ullam magni adipisci nobis non pariatur? Molestiae, eius voluptate eligendi et quisquam maiores provident officia, commodi odio excepturi voluptates sed, error esse laudantium ipsam autem labore culpa libero ad? Maiores, iste? Suscipit, odio nobis cum similique dignissimos quae obcaecati officiis repellendus voluptate atque nisi veniam. Qui dolorum illo unde aspernatur?
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos et nesciunt delectus dolore, quae, neque alias similique minima atque deleniti odio ullam dignissimos sed repellendus labore enim eius adipisci. Dolor, eum impedit quod voluptate voluptas optio expedita deleniti asperiores dolorum laborum at, doloribus sapiente autem dicta tempora odio veritatis ipsam ullam magni adipisci nobis non pariatur? Molestiae, eius voluptate eligendi et quisquam maiores provident officia, commodi odio excepturi voluptates sed, error esse laudantium ipsam autem labore culpa libero ad? Maiores, iste? Suscipit, odio nobis cum similique dignissimos quae obcaecati officiis repellendus voluptate atque nisi veniam. Qui dolorum illo unde aspernatur?</p>
            </div>
        </div>
    )
}

export default SinglePost
