const Select = ({question,options}) => {
    return (
        <div className="Select">
            <h2>{question}</h2>
            {
                options.map((option) => 
                {
                    return (
                    <>
                    <input type="radio" name="select" value={option}></input>
                    <label>{option}</label>
                    <br />
                    </>
                )
                })
            }
            <br/>
            <button>Back</button>
            <button>Next</button>
           

        </div>

    )
}

export default Select