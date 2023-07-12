import React,{useState} from 'react'
import textaction from '../../Actions/textActions'

function Input() {
    const [state, setState] = useState("")

    const callreducer=()=>{
        //textaction is taking data as a parameter so we r passing state 
        textaction(state)
    }

    return (
        <div className="card">
            <div className="card-header bg-primary text-white">
                <h3>Input Component</h3>
            </div>
            <div className="card-body row">
                <div className="col-6">
                <input type="text" className="form-control" placeholder="Username"
                 onChange = {(event)=>{setState(event.target.value)}}/>
                </div>
                <div className="col-3">
                <button type="button" onClick={callreducer} className="btn btn-primary">Submit</button>
                </div>
            </div>
        </div>
    )
}

export default Input
