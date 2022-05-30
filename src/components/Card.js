import noFoto from '../assets/images/banner-default.png';

const Card = ( props ) =>{

    // FOTOS
    const banner    = ( props.cardBoxBanner ) ? props.cardBoxBanner : noFoto;
    const profile   = ( props.cardBoxProfile ) ? props.cardBoxProfile : noFoto;

    return(
        <div id="card" style={{ backgroundImage: props.background }}>
            <div className="card__box">
                <img src={ banner } alt='Imagen de portada' className="card__box-banner" />
                <div className='card__box-profile'>
                    <img src={ profile } alt='Imagen de perfil' className="card__box-profile-img" />
                </div>
                <div className="card__box__container-principal">
                    { props.children }
                </div>
            </div>
        </div>
    )
}

export default Card;