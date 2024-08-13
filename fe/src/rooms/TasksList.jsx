import {Task} from "./Task.jsx";

export const TasksList = ({sayi}) => {
    return (
        <div className="card">
            <div className="card-header fw-bold">
                Oda-{sayi}
            </div>

            <div className="card-footer">
                Mehaba nasılsınnn
            </div>

        </div>
    )
}