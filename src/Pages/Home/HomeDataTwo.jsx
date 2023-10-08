import { Link } from "react-router-dom";
import PropTypes from "prop-types"; // Import PropTypes



const HomeDataTwo = ({ myDena }) => {

    const { id, description } = myDena;

    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl mt-20">
            <figure><img src={myDena.image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title text-2xl">{myDena.name}</h2>
                {
                    description.length > 80 ? <p>{description.slice(0, 80)} <Link to={`/serviceDetail/${id}`}><a className="text-orange-500" href="">Read More...</a></Link></p>
                    :
                    <p>{description}</p>
                }
                <h5 className="text-2xl">Price: {myDena.price}</h5>
                <div className="card-actions">
                    <Link to={`/serviceDetail/${id}`}>
                        <button className="btn btn-primary bg-orange-500 hover:bg-orange-500 border-0 text-white">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};


HomeDataTwo.propTypes = {
    cate: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            value: PropTypes.number.isRequired,
        })
    ).isRequired,
};

export default HomeDataTwo;