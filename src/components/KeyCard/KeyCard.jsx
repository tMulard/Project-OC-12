import './KeyCard.css'

const KeyCard = ({title, src, children}) => {

    return (
        <div className='KeyCard'>
            <img src={src} alt="KeyCard-icon" />
            <div class="text">
                <h2>{children}</h2>
                <p>{title}</p>
            </div>
        </div>
    );
}

export default KeyCard