import BaliImage from "../assets/bali-8838762_1920.jpg";
import Ocean from "../assets/ocean-8901157_1920.jpg";

export const Mozaik = () => {


    return(
        <>
            <div className="row g-0">
                <div className="col-6">
                    <img src={BaliImage} style={{
                        width: '100%',
                        height: 'auto',
                        maxHeight: "500px"
                    }} alt="görünmedi"/>
                </div>
                <div className="col-6 d-flex flex-column  justify-content-center align-items-center bg-light">
                    <p style={{fontStyle: "italic"}}>Tüm desteğimizle , siz oluşturun biz yönetelim</p>
                    <a className="btn btn-success">
                        Şimdi Kaydol !
                    </a>
                </div>
            </div>

            <div className="row g-0">
                <div className="col-6 d-flex flex-column  justify-content-center align-items-center bg-light">
                    <p style={{fontStyle: "italic"}}>Mükemmel müşteri memnuniyeti</p>
                    <a className="btn btn-success">
                        Kullanıcı deneyimlerimi oku !
                    </a>
                </div>
                <div className="col-6">
                    <img src={Ocean} style={{
                        width: '100%',
                        height: 'auto',
                        maxHeight: "500px"
                    }} alt="görünmedi"/>
                </div>


            </div>
        </>
    )
}