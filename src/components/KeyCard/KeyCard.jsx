import './KeyCard.css'

const KeyCard = ({title, children}) => {

    return (
        <div className='KeyCard'>
            {/* img */}
            <h2>{children}</h2>
            <p>{title}</p>
        </div>
    );
}

export default KeyCard