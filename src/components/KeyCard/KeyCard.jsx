import './KeyCard.css'
import CalIcon from '/Icons/calories-icon.svg'
import ProtIcon from '/Icons/protein-icon.svg'
import CarbIcon from '/Icons/carbs-icon.svg'
import FatIcon from '/Icons/fat-icon.svg'

const KeyCard = ({title, type, children}) => {

    let src 
    switch (type) {
        case "calories":
            src = CalIcon
            break;
        case "proteins":
            src = ProtIcon
            break;
        case "carbs":
            src = CarbIcon
            break;
        default:
            src = FatIcon
            break;
    } 


    return (
        <div className='KeyCard'>
            <img src={src} alt="KeyCard-icon" />
            <div className="text">
                <h2>{children}</h2>
                <p>{title}</p>
            </div>
        </div>
    );
}

export default KeyCard