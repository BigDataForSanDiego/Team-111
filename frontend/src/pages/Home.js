import Entry from '../components/Entry'
import Program from '../components/Program'
import Select from '../components/Select'
import inputs from '../lib/inputs'
import {createContext, useState} from 'react'

const Home = () => {

    const [form,setForm] = useState({})

    return (
        <div className="Home">
            {
                inputs.map((input) => {
                    if (input.type === "entry") {
                        return (<Entry question={input.question} form={form} setForm={setForm}></Entry>)
                    }
                    if (input.type === "select") {
                        return (<Select question={input.question} options={input.options} form={form} setForm={setForm}/>)
                    }
                })
            }
            <br />
            {/* <button onClick={() => setForm({})}>Back</button>
            <button onClick={() => console.log(form)}>Next</button> */}
            <Program type="calfresh" form={form} />
            <Program type="medical" form={form} />
            <Program type="calworks" form={form} />
            <Program type="ssi" form={form} />
        </div>
    )
}
export default Home