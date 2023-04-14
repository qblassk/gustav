import '../components/NavBar.css';
import { useState } from 'react';

export function NavBar() {
   const [hoveredAbout, setHoveredAbout] = useState(false);
   const HoverTrueAbout = () => setHoveredAbout(true);
   const HoverFalseAbout = () =>
      setTimeout(function () {
         setHoveredAbout(false);
      }, 3000);

   const [hoveredContact, setHoveredContact] = useState(false);
   const HoverTrueContact = () => setHoveredContact(true);
   const HoverFalseContact = () =>
      setTimeout(function () {
         setHoveredContact(false);
      }, 3000);

   const [hoveredNews, setHoveredNews] = useState(false);
   const HoverTrueNews = () => setHoveredNews(true);
   const HoverFalseNews = () =>
      setTimeout(function () {
         setHoveredNews(false);
      }, 3000);

   return (
      <div className="navbar-container">
         <h3
            className={hoveredAbout ? 'navbar-button-about navbar-move-button' : 'navbar-button-about'}
            onMouseOver={HoverTrueAbout}
            onMouseLeave={HoverFalseAbout}
         >
            about
         </h3>
         <h3
            className={hoveredContact ? 'navbar-button-contact navbar-move-button' : 'navbar-button-contact'}
            onMouseOver={HoverTrueContact}
            onMouseLeave={HoverFalseContact}
         >
            contact
         </h3>
         <h3
            className={hoveredNews ? 'navbar-button-news navbar-move-button' : 'navbar-button-news'}
            onMouseOver={HoverTrueNews}
            onMouseLeave={HoverFalseNews}
         >
            news
         </h3>
      </div>
   );
}
