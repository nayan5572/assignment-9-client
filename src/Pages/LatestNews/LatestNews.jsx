import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { useEffect } from "react";


const LatestNews = ({ myDena }) => {
    const { id } = myDena;

    useEffect(() => {
        AOS.init({duration: 2000})
    }, [])
    

    return (
        <div data-AOS ="fade-down">
            <div className="card card-compact w-96 bg-base-100 shadow-xl h-50">
                <figure><img className="" src={myDena.image} alt="Shoes" /></figure>
                <div className="card-body text-left">
                    <h2 className="card-title text-2xl hover:text-orange-500">{myDena.name}</h2>
                    <p>{myDena.description} <Link to={`/latestService/${id}`}><a className="text-orange-500" href="">Read More...</a></Link></p>
                </div>
            </div>
        </div>
    );
};

export default LatestNews;