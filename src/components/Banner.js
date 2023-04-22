import '../components/Banner.css';
import imgBanner from '../assets/img/img-banner.png';

export function Banner() {
   return (
      <div className="Banner">
         <img src={imgBanner} className="banner-img-base" alt="graffiti" />
         <h1 className="banner-title-top">HI IM GUSTAV</h1>
         <h1 className="banner-title-bottom">WEB DEVELOPER</h1>
      </div>
   );
}
