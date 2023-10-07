

const Header = () => {
    return (
        <div className="">
            <div className="hero" style={{ backgroundImage: 'url(https://i.ibb.co/4FKS4pJ/5.jpg)' }}>
                <div className="hero-overlay bg-opacity-60 h-[850px]"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="space-y-7">
                        <p className="text-4xl text-orange-500">Start learning from home</p>
                        <h2 className="text-6xl font-bold">Connect With Our Expert And <br /> Start Learning Today</h2>
                        <p className="text-1xl">We are providing high-quality online courses to improve your skill. Our all <br /> instructors are highly experienced and experts.</p>
                        <div className="">
                            <button className="btn btn-primary mr-4 border-0 text-white bg-orange-500 hover:bg-white hover:text-orange-500">Find Course</button>
                            <button className="btn btn-outline bg-white text-orange-500 border-0 hover:bg-orange-500 hover:border-0">Start Free Trial</button>
                        </div>
                    </div>
                </div>
            </div >
        </div>

    );
};

export default Header;