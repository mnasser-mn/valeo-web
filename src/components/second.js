import { useDispatch, useSelector } from "react-redux";
import { incCounter } from "../actions";

const Second = ({location}) => {
    const urlParts = location.search.split("=")
    let URL = ""
    if(urlParts[0]==="?url"){
        URL = urlParts[1]
    }
    const dispatch = useDispatch()
    const counter = useSelector(state => {
        console.log(state)
        return state.counter
    })
    console.log(counter)
    return (
        <>
            <h1>Second</h1>
            <div>
                <p>counter:{counter}</p>
                <button className="btn btn-secondary"
                    onClick={() => {
                        dispatch(incCounter(counter))
                    }}>
                    increment counter
                </button>

                <a className="d-block" href={`${URL}?counter=${counter}`}>
                    back to mobile app 
                </a>
            </div>
        </>
    )
}
export default Second;