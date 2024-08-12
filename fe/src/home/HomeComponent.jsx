import {Mozaik} from "./Mozaik.jsx";
export const HomeComponent = () => {
    return (
        <>
            <div className="container d-flex flex-column justify-content-evenly" style={{height: 300}}>

                <h2 className="text-center mt-3">
                    Task Managment Service
                </h2>
                <br/>
                <p className="text-start mb-4 fs-4">
                    Yenilikçi ve efektif bir görev dağıtım sistemi
                    <img src="https://www.svgrepo.com/show/43432/tick.svg" alt="" width="30" height="24"
                         className="d-inline-block align-text-top"/>
                </p>

            </div>

            <Mozaik/>
        </>
    )
}