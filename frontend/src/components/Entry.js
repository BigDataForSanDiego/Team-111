import { formContext } from "../pages/Home"

const Entry = ({question,form,setForm}) => {
    return (
        <div className="Entry">
            <h2>{question}</h2>
            <input onChange={(e) => {
                setForm({...form,[question]:e.target.value})
            }}></input>        
        </div>

    )
}

export default Entry