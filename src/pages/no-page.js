import '../scss/no-page.scss';
import metadata from '../data/metadata';

function Nopage() {
  return (
    <div className="nopage-page">
      <div className="nopage-content">
        <div className='not-found'>
          <img src={metadata.image.notFound} alt='Sorry! Page not found'></img>
        </div>
      </div>
    </div>
  );
}

export default Nopage;