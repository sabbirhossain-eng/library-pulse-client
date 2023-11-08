import Footer from "../../Footer/Footer";
import Blog from "../Blog/Blog";
import PopularContent from "../PopularContent/PopularContent";
import Banner from "./Banner/Banner";
import Categories from "./Categories/Categories";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Categories></Categories>
            <Blog></Blog>
            <PopularContent></PopularContent>
            <Footer></Footer>
        </div>
    );
};

export default Home;