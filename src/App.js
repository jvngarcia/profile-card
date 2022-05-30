import Card from './components/Card';

function App() {
  return (
    <Card>
      <h4 className='text-center title-padding'>Angel Garcia <span className='mute'>22</span></h4>
      <h6 className='text-center subtitle-padding'>Programador</h6>
      <div className='card__box__container'>
        <div className='redes-sociales'>
          <div className='text-center'>
            Instagram
          </div>
          <div className='text-center'>
            Tiktok
          </div>
          <div className='text-center'>
            LinkedIn
          </div>
          <div className='text-center grid-center'>
            Sitio Web
          </div>
        </div>
      </div>
    </Card>
  );
}

export default App;
