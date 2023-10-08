import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Registration = () => {

    const { createUser } = useContext(AuthContext);

    const [registerError, setRegisterError] = useState('');

    // button click here
    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');

        console.log(name, photo, email, password);

        // Show error and Success message
        setRegisterError('')

        // condition
        if (password.length < 6) {
            setRegisterError('Password Should be at least 6 characters or longer');
            return;
        } else if (!/[A-Z]/.test(password)) {
            setRegisterError('Your Password should have at least one upper case characters');
        }


        toast.success('Your Registration is Successfully', {
            position: toast.POSITION.TOP_RIGHT,
        });


        //create user
        createUser(email, password)
            .then(result => {
                console.log(result.user);
                //
                updateProfile(result.user, {
                    displayName: name,
                    photoURL: photo
                })
                    .then(() => console.log("Update Profile"))
                    .catch(error => console.error(error))


            })
            .catch(error => {
                console.error(error);
            })
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
                        <ToastContainer />
                    </div>
                </form>
                {
                    registerError && <p className="text-red-500 text-center mt-4">{registerError}</p>
                }
                <p className="text-center mt-5">Already have account? <Link className="text-blue-600" to="/login">Login</Link></p>
            </div>
        </div>
    );
};

export default Registration;