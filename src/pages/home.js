import '../scss/home.scss';
import metadata from '../data/metadata';
import svg from '../svg/caro.svg'


function Home() {
  return (
    <div className="home-page">
      <div className='main-image'>
          <img src={metadata.image.mainPhoto} alt='This is me'></img>
        </div>
      <div className="home-content">        
        <div className='section1'>
            <img className='myname' src={metadata.image.myName} alt='my-name'></img>
        </div>

        <div>
            {metadata.skills.map((item1,index)=>(         
            <div className = 'skill-list' key={index}>
                <div className='skill'>{item1.name} : </div>
                <div className='skill-content'>
                {item1.item.map((item2,index2)=> 
                    <div key={"skillname"+index2}>
                        &nbsp;{item2}&nbsp;|
                    </div>)}
                </div>
            </div>
            ))}
        </div>
        
        <div className='pattern-image'>
          <img src={svg} alt='pattern'></img>
          <img src={svg} alt='pattern'></img>
          <img src={svg} alt='pattern'></img>
          <img src={svg} alt='pattern'></img>
          <img src={svg} alt='pattern'></img>
        </div>
        </div>

    </div>
  );
}

export default Home;