import Hero from "../components/Hero/Hero";
import Menus from "../Menus/Menus";
import { Banner } from "../components/Banner/Banner";
import { Banner2 } from "../components/Banner/Banner2";
import { Banner3 } from "../components/Banner/Banner3";
import { Footer } from "../components/footer/Footer";

const Home = () => {
    return (
        <>
            <Hero />
            <Menus />
            <Banner />
            <Banner2 />
            <Banner3 />
            <Footer />
        </>
    );
};

export default Home;
