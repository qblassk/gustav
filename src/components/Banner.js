import '../components/Banner.css';
import imgBanner from '../assets/img/img-banner.png';

export function Banner() {
   return (
      <div>
         <img src={imgBanner} className="banner-img-base" alt="Words" />
         <h1 className="banner-title-top">HI IM GUSTAV</h1>
         <h1 className="banner-title-bottom">WEB DEVELOPER</h1>
      </div>
   );
}
