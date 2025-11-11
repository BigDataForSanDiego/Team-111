import Entry from '../components/Entry'
import Select from '../components/Select'
import inputs from '../lib/inputs'

const Home = () => {
    return (
        <div className="Home">
            {
                inputs.map((input) => {
                    if (input.type === "entry") {
                        return (<Entry question={input.question}></Entry>)
                    }
                    if (input.type === "select") {
                        return (<Select question={input.question} options={input.options}/>)
                    }
                })
            }
        </div>
    )
}

export default Home