import '../components/BannerMobile.css';
import imgBanner from '../assets/img/banner-mobile-img.png';

export function BannerMobile() {
   return (
      <div className="BannerMobile">
         <img src={imgBanner} className="banner-mobile-img-base" alt="graffiti" />
         <h1 className="banner-title-top-mobile">HI IM GUSTAV</h1>
         <h1 className="banner-title-bottom-mobile">WEB DEVELOPER</h1>
      </div>
   );
}
