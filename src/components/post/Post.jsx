import './post.css';
import { Link } from 'react-router-dom';

const Post = () => {
    return (
        <div className="post">
            <img className="postImg" src="./images/post1.jpg" alt="" />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Music</span>
                    <span className="postCat">Life</span>
                </div>
                <span className="postTitle">
                   <Link to="/post/:postId" className="link"> Lorem ipsum dolor sit amet.</Link>
                </span>
                <hr />
                <span className="postDate">1 hour ago</span>
            </div>
            <p className="postDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi sapiente veritatis quibusdam voluptatum aut id voluptate illo voluptas explicabo omnis nostrum reprehenderit, eum unde cumque, placeat non expedita totam quam!</p>
        </div>
    )
}

export default Post
