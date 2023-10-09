import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="text-center mt-12">
            <h1 className="text-red-500 text-8xl mb-4">404</h1>
            <button className="btn bg-orange-500 text-white hover:bg-white hover:border-orange-500 hover:text-orange-500"><Link to="/">Go Back Home</Link></button>
        </div>
    );
};

export default ErrorPage;