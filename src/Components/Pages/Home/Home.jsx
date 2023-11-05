import Footer from "../../Footer/Footer";
import Blog from "../Blog/Blog";
import Banner from "./Banner/Banner";
import Categories from "./Categories/Categories";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Categories></Categories>
            <Blog></Blog>
            <Footer></Footer>
        </div>
    );
};

export default Home;