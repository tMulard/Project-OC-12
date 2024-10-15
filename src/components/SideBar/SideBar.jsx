import './SideBar.css'
import yoga from "../../../public/Icons/yoga.svg"
import natation from "../../../public/Icons/natation.svg"
import cyclisme from "../../../public/Icons/cyclisme.svg"
import musculation from "../../../public/Icons/musculation.svg"
import Copyright from "../../../public/Icons/Copyright.png"

const SideBar = () => {
    return (
        <div className='SideBar'>
            <div className='Icons'>
                <img src={yoga} alt="yoga" />
                <img src={natation} alt="natation" />
                <img src={cyclisme} alt="cyclisme" />
                <img src={musculation} alt="musculation" />
            </div>
            <img src={Copyright} alt="copyright" />
        </div>
    )
}

export default SideBar