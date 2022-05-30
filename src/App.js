import Card from './components/Card';

// ICONS
import iconTiktok from './assets/images/tiktok-brands.svg';
import iconInstagram from './assets/images/instagram-brands.svg';
import iconLinkedin from './assets/images/linkedin-in-brands.svg';
import iconWeb from './assets/images/newspaper-regular.svg';

// PERFIL
import profile from './assets/images/perfil.png';

function App() {
  return (
    <Card cardBoxProfile={ profile }>
      <h4 className='text-center title-padding'>Angel Garcia</h4>
      <h6 className='text-center subtitle-padding'>Programador</h6>
      <div className='card__box__container'>
        <div className='redes-sociales'>
          <a href='#'  className='text-center contenedor-items'>
            <div>
              <div className='contenedor-imagen'><img src={ iconInstagram }/></div>
              Instagram
            </div>
          </a>
          <a href='#' className='text-center contenedor-items'>
            <div>
              <div className='contenedor-imagen'><img src={ iconTiktok }/></div>
              Tiktok
            </div>
          </a>
          <a href='#' className='text-center contenedor-items'>
            <div>
              <div className='contenedor-imagen'><img src={ iconLinkedin }/></div>
              LinkedIn
            </div>
          </a>
          <a href='#' className='text-center contenedor-items'>
            <div>
              <div className='contenedor-imagen'><img src={ iconWeb }/></div>
              Sitio Web
            </div>
          </a>
        </div>
      </div>
    </Card>
  );
}

export default App;
