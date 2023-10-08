import { Link } from "react-router-dom";

const UpcomingService = ({ myUpcoming }) => {
    const { id } = myUpcoming;
    return (
        <div>
            <div className="hero bg-base-100 shadow-xl rounded-xl">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={myUpcoming.image} className="max-w-sm rounded-lg shadow-2xl" />
                    <div className="pl-4">
                        <h1 className="text-3xl font-bold">{myUpcoming.title}</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>

                        <Link to={`/ourUpComingService/${id}`}>
                            <button className="btn btn-outline text-orange-500 hover:bg-orange-500 hover:text-white hover:border-0">Read More</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpcomingService;