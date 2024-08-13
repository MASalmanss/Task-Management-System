import '@fortawesome/fontawesome-free/css/all.min.css';

export const Footer = () => {
    return (
        <footer className="bg-success text-white text-center text-lg-start" style={{position : "fixed" , bottom : "0px" , width: "100%"}} >
            <div className="container p-4">
                <div className="row">
                    <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
                        <h5 className="text-uppercase">Task Management Service</h5>
                        <p>
                            Yenilikçi ve efektif bir görev dağıtım sistemi.
                        </p>
                    </div>

                    <div className="col-lg-3 col-md-6 mb-4 mb-md-0 ">
                        <h5 className="text-uppercase navbar-brand">Links</h5>
                        <ul className="list-unstyled mb-0">
                            <li>
                                <a href="/home" className="text-white nav-link">
                                    <i className="fas fa-home"></i>  Home</a>
                            </li>
                            <li>
                                <a href="/about" className="text-white nav-link">
                                    <i className="fas fa-question-circle"></i> About</a>
                            </li>
                            <li>
                                <a href="/contact" className="text-white nav-link">

                                    <i className="fas fa-phone"></i> Contact</a>
                            </li>
                        </ul>
                    </div>

                    <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                        <h5 className="text-uppercase">Follow Us</h5>
                        <ul className="list-unstyled mb-0">
                            <li>
                                <a href="#" className="text-white nav-link">
                                    <i className="fab fa-facebook-f"></i> Facebook
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-white nav-link">
                                    <i className="fab fa-twitter"></i> Twitter
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-white nav-link">
                                    <i className="fab fa-linkedin-in"></i> LinkedIn
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
                © 2024 Task Management Service - All Rights Reserved.
            </div>
        </footer>
    );
}
