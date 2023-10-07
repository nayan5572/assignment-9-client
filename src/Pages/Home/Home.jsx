import { useLoaderData } from "react-router-dom";
import Header from "../Header/Header";
import HomeData from "./HomeData";

const Home = () => {
    const simpleData = useLoaderData();
    console.log(simpleData);
    return (
        <div className="">
            <Header></Header>
            <div className="max-w-7xl mx-auto pt-32 pb-52">
                <h2 className="text-center mb-10 text-5xl font-bold">Explore Popular Courses</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {
                        simpleData.map(mainData => <HomeData key={mainData.id} mainData={mainData}></HomeData>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;