import '../components/Entrance.css';
import imgA from '../assets/img/entrance/entrance-a.png';
import imgB from '../assets/img/entrance/entrance-b.png';
import imgC from '../assets/img/entrance/entrance-c.png';
import imgD from '../assets/img/entrance/entrance-d.png';
import imgE from '../assets/img/entrance/entrance-e.png';
import imgF from '../assets/img/entrance/entrance-f.png';

export function Entrance() {
   return (
      <div className="entrance-container">
         <img src={imgA} className="entrance-img-a" alt="rainbow" />
         <img src={imgB} className="entrance-img-b" alt="rainbow" />
         <img src={imgC} className="entrance-img-b" alt="rainbow" />
         <img src={imgD} className="entrance-img-b" alt="rainbow" />
         <img src={imgE} className="entrance-img-b" alt="rainbow" />
         <img src={imgF} className="entrance-img-b" alt="rainbow" />
      </div>
   );
}
