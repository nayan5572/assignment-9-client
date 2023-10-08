import { Link } from "react-router-dom";

const Registration = () => {

    // button click here
    const handleRegister = e =>{
        e.preventDefault();
    }



    return (
        <div>
            <div className="my-20">
                <h2 className="text-3xl text-center">Please Register</h2>
                <form onSubmit={handleRegister} className="md:w-3/4 lg:w-1/2 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Your Full Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <input type="text" name="photo" placeholder="Your Photo Url" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="Your Email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary bg-orange-500 border-0 text-white hover:bg-orange-500">Register</button>
                    </div>
                </form>
                <p className="text-center mt-5">Already have account? <Link className="text-blue-600" to="/login">Login</Link></p>
            </div>
        </div>
    );
};

export default Registration;