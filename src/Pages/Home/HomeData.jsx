// import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import HomeDataTwo from "./HomeDataTwo";

const HomeData = () => {

    const [myNewData, setMyNewData] = useState([]);

    useEffect(() => {
        fetch('myData.json')
            .then(res => res.json())
            .then(data => setMyNewData(data))
    }, []);



    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-20">
                {
                    myNewData.map(myDena => <HomeDataTwo key={myDena.id} myDena={myDena}></HomeDataTwo>)
                }
            </div>
        </div>
    );
};

export default HomeData;




{/* <div className="card card-compact w-96 bg-base-100 shadow-xl">
<figure><img src={mainData.image} alt="Shoes" /></figure>
<div className="card-body">
    <h2 className="card-title text-2xl">{mainData.name}</h2>
    <p>{mainData.description} <a className="text-blue-700" href="">Read More...</a></p>
    <h5 className="text-2xl">Price: {mainData.price}</h5>
    <div className="card-actions">
        <Link to={`/serviceDetail/${id}`}>
            <button className="btn btn-primary bg-orange-500 hover:bg-orange-500 border-0 text-white w-full">View Details</button>
        </Link>
    </div>
</div>
</div> */}