import { Link } from "react-router-dom";

const MyAwesomeBlog = ({ myBlog }) => {
    const { id, description } = myBlog;
    console.log(description);
    return (
        <div className="">
            <div className="card card-compact w-96 bg-base-100 shadow-xl h-50">
                <figure><img className="" src={myBlog.image} alt="Shoes" /></figure>
                <div className="card-body text-left">
                    <h2 className="card-title text-2xl hover:text-orange-500">{myBlog.name}</h2>
                    {
                        description.length > 80 ? <p>{description?.slice(0, 80)} <Link to={`/latestService/${id}`}><a className="text-orange-500" href="">Read More...</a></Link></p>
                            :
                            <p>{description}</p>
                    }
                </div>
            </div>
        </div>
    );
};

export default MyAwesomeBlog;