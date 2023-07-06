import '../scss/portfolio.scss';
import metadata from '../data/metadata';
import HTMLReactParser from 'html-react-parser';
import svg from '../svg/white-dots.svg';

function Portfolio() {
  return (
    <div className="portfolio-page">
        <div className="portfolio-content">
          <div className='my-portfolio'>
            <img src={metadata.image.myPortfolio} alt='My Porfolio'></img>
          </div>

          <div className='app-list'>
            {metadata.portfolio.map((item,index) => (
              <div key={index+item} className='app-item'>
                <div className='app-text'>
                  <div className="app-name">{item.name}</div>
                  <ul> 
                    {item.description.map((item2,index2)=>(
                      <li key={index2+item2}>{item2}</li>
                    ))}
                  </ul>
                  <div className='utilized'> 
                      <div>Utilized:</div>
                      {item.utilized.map((item3,index3)=>(
                        <div key={index3+item3}>{item3}&nbsp;|</div>
                      ))}
                  </div>
                </div>
                <div className='app-video-div'>                 
                  <div className='app-video'>{HTMLReactParser(item.url)}</div>
                </div>
                <div className='white-dots'>
                  <img src={svg} alt='decoration'></img>
                </div>
              </div>
            ))}
            <div>    
          </div>
            
          </div>


        </div>
        <div>
          <div className="rectangle"></div>
         
        </div>
    </div>
  );
}

export default Portfolio;