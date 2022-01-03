import Header from "../../components/header/Header";
// import Posts from "../../posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import Posts from "../../components/posts/Posts";
import "./home.css";

const Home = () => {
    return (
        <>
            <Header />
            <div className="home">
                <Posts />
                <Sidebar />
            </div>
        </>
    )
}

export default Home
