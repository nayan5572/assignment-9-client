// import { useLoaderData } from "react-router-dom";
import Header from "../Header/Header";
// import HomeData from "./HomeData";
import NewsData from "../LatestNews/NewsData";
import Upcoming from "../Upconing/Upcoming";
import HomeData from "./HomeData";

const Home = () => {
    // const simpleData = useLoaderData();
    return (
        <div className="">
            <Header></Header>
            <div className="max-w-7xl mx-auto pt-32 pb-52">
                <h2 className="text-center mb-10 text-5xl font-bold">Our Services</h2>
                <div className="">
                    <HomeData></HomeData>
                </div>
                <div className="mt-20">
                    <NewsData></NewsData>
                </div>
                <div>
                    <Upcoming></Upcoming>
                </div>
            </div>
        </div>
    );
};

export default Home;