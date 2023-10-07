
const HomeData = ({ mainData }) => {
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={mainData.image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title text-2xl">{mainData.name}</h2>
                <p>{mainData.description} <a className="text-blue-700" href="">Read More...</a></p>
                <h5 className="text-2xl">Price: {mainData.price}</h5>
                <div className="card-actions">
                    <button className="btn btn-primary bg-orange-500 hover:bg-orange-500 border-0 text-white w-full">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default HomeData;