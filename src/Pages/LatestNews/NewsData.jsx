import LatestNews from "./LatestNews";
import { useEffect, useState } from "react";

const NewsData = () => {

    const [myNewData, setMyNewData] = useState([]);

    useEffect(() => {
        fetch('news.json')
            .then(res => res.json())
            .then(data => setMyNewData(data))
    }, []);



    return (
        <div>
            <h2 className="mb-12 text-center text-5xl font-bold">Latest News</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    myNewData.map(myDena => <LatestNews key={myDena.id} myDena={myDena}></LatestNews>)
                }
            </div>
        </div>
    );
};

export default NewsData;