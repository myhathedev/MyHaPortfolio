import metadata from '../data/metadata';
import { Link } from "react-router-dom";
import '../scss/nav.scss';

function Nav() {
  return (
    <div className="Nav">
        {metadata.nav.map((item,index) => (
            <div key={index}>
               <Link className='nav-link' to={item.url}>
                <div className='nav-item'>
                  {item.title}
                </div>
              </Link> 
            </div>
        ))}
    </div>
  );
}

export default Nav;
