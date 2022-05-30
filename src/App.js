import Card from './components/Card';

// ICONS
import iconTiktok from './assets/images/tiktok-brands.svg';
import iconInstagram from './assets/images/instagram-brands.svg';
import iconLinkedin from './assets/images/linkedin-in-brands.svg';
import iconWeb from './assets/images/newspaper-regular.svg';

// PERFIL
import profile from './assets/images/perfil.png';
import banner from './assets/images/banner-jvngarcia-profile.png';


function App() {
  return (
    <Card cardBoxProfile={ profile } cardBoxBanner={ banner }>
      <h4 className='text-center title-padding'>Angel Garcia</h4>
      <h6 className='text-center subtitle-padding'>Programador</h6>
      <div className='card__box__container'>
        <div className='redes-sociales'>
          <a href='https://www.instagram.com/jvngarcia_/' target='_blank' rel="noreferrer"  className='text-center contenedor-items'>
            <div>
              <div className='contenedor-imagen'><img src={ iconInstagram } alt='icono de Instagram' /></div>
              Instagram
            </div>
          </a>
          <a href='https://www.tiktok.com/@jvngarcia' target='_blank' rel="noreferrer" className='text-center contenedor-items'>
            <div>
              <div className='contenedor-imagen'><img src={ iconTiktok } alt='icono de Tiktok' /></div>
              Tiktok
            </div>
          </a>
          <a href='https://www.linkedin.com/in/jvngarcia/' target='_blank' rel="noreferrer" className='text-center contenedor-items'>
            <div>
              <div className='contenedor-imagen'><img src={ iconLinkedin } alt='icono de Linkedin' /></div>
              LinkedIn
            </div>
          </a>
          <a href='https://jvngarcia.com/' className='text-center contenedor-items'>
            <div>
              <div className='contenedor-imagen'><img src={ iconWeb } alt='icono de mi sitio web' /></div>
              Sitio Web
            </div>
          </a>
        </div>
      </div>
    </Card>
  );
}

export default App;
