import metadata from '../data/metadata';
import '../scss/contact.scss';
import svg from '../svg/pattern4.svg'

function Contact() {
  return (
    <div className="contact-page">
      <div className="contact-content">
        <div className='contact-section1 contact-pattern'>
          <img src={svg} alt='decoration'></img>
        </div>

        <div className='contact-section2 contact-image'>
          <img src={metadata.image.contactPhoto} alt='me holding flower'></img>
        </div>

        <div className='contact-section3 contact-info'>
          <div>
            <div className='contact-name'>My Ha Cao</div>
            <div className='contact-job'>Software Developer</div>

          </div>
          <div className='info-item-div'>
            <div className='info-item'>
              <div className='info-title'>{metadata.contact.Email.name}</div>
              <div className = "info-content" >{metadata.contact.Email.content}</div>
            </div>
            <div className='info-item'>
              <div className='info-title'>{metadata.contact.Location1.name}</div>
              <div className = "info-content">{metadata.contact.Location1.content}</div>
            </div>
            <div className='info-item'>
              <div className='info-title'>{metadata.contact.Location2.name}</div>
              <div className = "info-content" >{metadata.contact.Location2.content}</div>
            </div>
          </div>
          <div className='contact-media-div'>
            <a href={metadata.links.github.url} rel="noreferrer" target="_blank">
              <div className='contact-media'>
                <img src={metadata.links.github.icon} alt={metadata.links.github.name}></img>
              </div>
            </a>
            <a href={metadata.links.linkedIn.url} rel="noreferrer" target="_blank">
            <div className='contact-media'>
              <img src={metadata.links.linkedIn.icon} alt={metadata.links.linkedIn.name}></img>
            </div>
            </a>
          </div>
           
        </div>

        <div className="typewriter">
          <p>Feel free to contact me. I am happy to talk! ~^_^~
            </p></div> 
      </div>
    </div>
  );
}

export default Contact;