import "bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap/dist/js/bootstrap.bundle.min'; // Bootstrap JS

export const UserExp = () =>{


    return (
        <div className="container ">
            <hr className="my-3" style={{border : "1px solid black"}}/>
            <h3 className="text-center">Kullanıcı Deneyimleri</h3>
            <div className="mt-3 d-flex flex-column align-items-center mb-3" >

                <div id="carouselExampleIndicators" style={{width: '50%', height: '100%'}} className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                                className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                                aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                                aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="https://via.placeholder.com/800x400.png?text=First+Slide"
                                 className="d-block w-100"
                                 alt="First Slide"/>
                        </div>
                        <div className="carousel-item">
                            <img src="https://via.placeholder.com/800x400.png?text=Second+Slide"
                                 className="d-block w-100"
                                 alt="Second Slide"/>
                        </div>
                        <div className="carousel-item">
                            <img src="https://via.placeholder.com/800x400.png?text=Third+Slide"
                                 className="d-block w-100"
                                 alt="Third Slide"/>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                            data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                            data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>

            </div>

        </div>

    )
}