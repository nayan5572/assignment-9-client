import imgLogo from '../../assets/education.png';


const Footer = () => {
    return (
        <div className="bg-[#0E0A38]">
            <footer className="footer p-10 bg-[#0E0A38] text-base-content max-w-7xl mx-auto text-white">
                <aside>
                    <img className='w-20' src={imgLogo} alt="" />
                    <p className='leading-6 text-xl'>We are providing high-quality <br /> online courses for about ten <br /> years. Our all instructors expert <br /> and highly experienced.</p>
                    <div className='mt-6'>
                        <h2>Follow Us</h2>
                    </div>
                </aside>
                <nav>
                    <header className="footer-title">Services</header>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <header className="footer-title">Company</header>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <header className="footer-title">Legal</header>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;