import imagenAvatar from './assets/myAvatar400.png';
import './PresentationCard.css';

function PresentationCard(){
let name = 'Claudia';
    return (
        <div className='presentation-card'>
            <img src={imagenAvatar} alt='Avatar' className='avatar'/>
            <h1>
                Hola, soy { name } y estoy aprendiendo React
            </h1>

        </div>
    );
};

export default PresentationCard;