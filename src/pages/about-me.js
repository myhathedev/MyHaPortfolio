import '../scss/about-me.scss';
import metadata from '../data/metadata';
import svg1 from '../svg/doctor.svg';
import svg2 from '../svg/coder.svg';
import svg3 from '../svg/pattern2.svg'

function About() {
  return (
    <div className="about-page">
      <div className="about-content">
        <div className='section1'>
          <div className='image1'>
            <img src={svg1} alt='doctor'></img>
          </div>
          <div className='career-name career1'>
            <img  src={metadata.image.career1} alt='From Physician...'></img>
          </div>
          <div className='career-content1'>
            {metadata.about.medical.content}
          </div>
        </div>
        
        <div className='section2'>
        <div className='image2'>
            <img src={svg2} alt='coder'></img>
          </div>
          <div>
            <img className='career-name career2' src={metadata.image.career2} alt='... to Software Developer'></img>
          </div>
          <div className='career-content2'>
            {metadata.about.developer.content}
          </div>
        </div>

        <div className='image3'>
            <img src={svg3} alt='doctor'></img>
          </div>
      </div>

    </div>
  );
}

export default About;