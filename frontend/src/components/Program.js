import {useState} from 'react'
import createPDF from '../lib/createPDF'

const Program = ({type,form}) => {
    const [open,setOpen] = useState(false)

    if (type=="calfresh") {
        return (
        <div className="Program">
            <button onClick={() => setOpen(!open)}>CalFresh</button>
            {open ? CalFreshEligibility(form) : ""}
        </div>
    )
    
    }
    else if (type=="medical") {
        return (
        <div className="Program">
            <button onClick={() => setOpen(!open)}>MediCal</button>
            {open ? CalFreshEligibility(form) : ""}
        </div>
    )
    }
    else if (type=="calworks") {
        return (
        <div className="Program">
            <button onClick={() => setOpen(!open)}>CalWorks</button>
            {open ? CalFreshEligibility(form) : ""}
        </div>
    )
    }
    else if (type=="ssi") {
        return (
        <div className="Program">
            <button onClick={() => setOpen(!open)}>Supplemental Security Income</button>
            {open ? CalFreshEligibility(form) : ""}
        </div>
    )
    }
}

const CalFreshEligibility = (form) => {
    if (form["What is your household's gross monthly income?"] < 30000) {
        return (
            <>
                <div>You are eligible</div>
                <button onClick={() => createPDF(form)}>Download PDF</button>
            </>
            
        )
    } else {
        return (
            <div>You are not eligible</div>
        )
    }
}

export default Program