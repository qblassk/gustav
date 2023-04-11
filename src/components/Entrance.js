import '../components/Entrance.css';
import { useState } from 'react';
import imgA from '../assets/img/entrance/entrance-a.png';
import imgB from '../assets/img/entrance/entrance-b.png';
import imgC from '../assets/img/entrance/entrance-c.png';
import imgD from '../assets/img/entrance/entrance-d.png';
import imgE from '../assets/img/entrance/entrance-e.png';
import imgF from '../assets/img/entrance/entrance-f.png';
import imgG from '../assets/img/entrance/entrance-g.png';
import imgH from '../assets/img/entrance/entrance-h.png';
import imgI from '../assets/img/entrance/entrance-i.png';
import imgJ from '../assets/img/entrance/entrance-j.png';
import imgK from '../assets/img/entrance/entrance-k.png';
import imgL from '../assets/img/entrance/entrance-l.png';
import imgM from '../assets/img/entrance/entrance-m.png';
import imgN from '../assets/img/entrance/entrance-n.png';
import imgO from '../assets/img/entrance/entrance-o.png';
import imgP from '../assets/img/entrance/entrance-p.png';
import imgQ from '../assets/img/entrance/entrance-q.png';
import imgR from '../assets/img/entrance/entrance-r.png';
import imgS from '../assets/img/entrance/entrance-s.png';
import imgT from '../assets/img/entrance/entrance-t.png';
import imgU from '../assets/img/entrance/entrance-u.png';
import imgV from '../assets/img/entrance/entrance-v.png';
import imgW from '../assets/img/entrance/entrance-w.png';
import imgX from '../assets/img/entrance/entrance-x.png';

export function Entrance() {
   const [imgId, setImgId] = useState('entrance-img');
   const off = () =>
      setTimeout(function () {
         setImgId('entrance-img-off');
      }, 4800);

   off();

   const [imgClassA] = useState('entrance-img-a');
   const [imgClassB] = useState('entrance-img-b');
   const [imgClassC] = useState('entrance-img-c');
   const [imgClassD] = useState('entrance-img-d');
   const [imgClassE] = useState('entrance-img-e');
   const [imgClassF] = useState('entrance-img-f');
   const [imgClassG] = useState('entrance-img-g');
   const [imgClassH] = useState('entrance-img-h');
   const [imgClassI] = useState('entrance-img-i');
   const [imgClassJ] = useState('entrance-img-j');
   const [imgClassK] = useState('entrance-img-k');
   const [imgClassL] = useState('entrance-img-l');
   const [imgClassM] = useState('entrance-img-m');
   const [imgClassN] = useState('entrance-img-n');
   const [imgClassO] = useState('entrance-img-o');
   const [imgClassP] = useState('entrance-img-p');
   const [imgClassQ] = useState('entrance-img-q');
   const [imgClassR] = useState('entrance-img-r');
   const [imgClassS] = useState('entrance-img-s');
   const [imgClassT] = useState('entrance-img-t');
   const [imgClassU] = useState('entrance-img-u');
   const [imgClassV] = useState('entrance-img-v');
   const [imgClassW] = useState('entrance-img-w');
   const [imgClassX] = useState('entrance-img-x');

   return (
      <div className="entrance-container">
         <img src={imgA} id={imgId} className={imgClassA} alt="rainbow" />
         <img src={imgB} id={imgId} className={imgClassB} alt="rainbow" />
         <img src={imgC} id={imgId} className={imgClassC} alt="rainbow" />
         <img src={imgD} id={imgId} className={imgClassD} alt="rainbow" />
         <img src={imgE} id={imgId} className={imgClassE} alt="rainbow" />
         <img src={imgF} id={imgId} className={imgClassF} alt="rainbow" />
         <img src={imgG} id={imgId} className={imgClassG} alt="rainbow" />
         <img src={imgH} id={imgId} className={imgClassH} alt="rainbow" />
         <img src={imgI} id={imgId} className={imgClassI} alt="rainbow" />
         <img src={imgJ} id={imgId} className={imgClassJ} alt="rainbow" />
         <img src={imgK} id={imgId} className={imgClassK} alt="rainbow" />
         <img src={imgL} id={imgId} className={imgClassL} alt="rainbow" />
         <img src={imgM} id={imgId} className={imgClassM} alt="rainbow" />
         <img src={imgN} id={imgId} className={imgClassN} alt="rainbow" />
         <img src={imgO} id={imgId} className={imgClassO} alt="rainbow" />
         <img src={imgP} id={imgId} className={imgClassP} alt="rainbow" />
         <img src={imgQ} id={imgId} className={imgClassQ} alt="rainbow" />
         <img src={imgR} id={imgId} className={imgClassR} alt="rainbow" />
         <img src={imgS} id={imgId} className={imgClassS} alt="rainbow" />
         <img src={imgT} id={imgId} className={imgClassT} alt="rainbow" />
         <img src={imgU} id={imgId} className={imgClassU} alt="rainbow" />
         <img src={imgV} id={imgId} className={imgClassV} alt="rainbow" />
         <img src={imgW} id={imgId} className={imgClassW} alt="rainbow" />
         <img src={imgX} id={imgId} className={imgClassX} alt="rainbow" />
      </div>
   );
}
