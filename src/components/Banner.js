import '../components/Banner.css';
import React, { useState } from 'react';
import imgBanner from '../assets/img/img-banner.png';

export function Banner() {
   const [hovered, setHovered] = useState(false);

   const HoverTrue = () => setHovered(true);

   const HoverFalse = () =>
      setTimeout(function () {
         setHovered(false);
      }, 2000);

   return (
      <div className="container">
         <img src={imgBanner} className="img-base" alt="Words" />
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10837 6096" className="lines">
            <g id="Capa_x0020_1">
               <metadata id="CorelCorpID_0Corel-Layer" />
               <polygon
                  id="fil1"
                  class={hovered ? 'move' : ''}
                  onMouseOver={HoverTrue}
                  onMouseLeave={HoverFalse}
                  points="0,4828 0,5723 5382,2886 6321,0 6062,0 5166,2812 "
               />
               <polygon
                  id="fil2"
                  class={hovered ? 'move' : ''}
                  onMouseOver={HoverTrue}
                  onMouseLeave={HoverFalse}
                  points="5599,2960 6581,0 6321,0 5382,2886 0,5723 0,6085 1253,6085 "
               />
               <polygon
                  id="fil3"
                  class={hovered ? 'move' : ''}
                  onMouseOver={HoverTrue}
                  onMouseLeave={HoverFalse}
                  points="5816,3034 6841,0 6581,0 5599,2960 1253,6085 2778,6096 "
               />
               <polygon
                  id="fil4"
                  class={hovered ? 'move' : ''}
                  onMouseOver={HoverTrue}
                  onMouseLeave={HoverFalse}
                  points="6032,3109 7100,0 6841,0 5816,3034 2789,6085 4029,6096 "
               />
               <polygon
                  id="fil5"
                  class={hovered ? 'move' : ''}
                  onMouseOver={HoverTrue}
                  onMouseLeave={HoverFalse}
                  points="6249,3183 7360,0 7100,0 6032,3109 4036,6085 5079,6096 "
               />
               <polygon
                  id="fil6"
                  class={hovered ? 'move' : ''}
                  onMouseOver={HoverTrue}
                  onMouseLeave={HoverFalse}
                  points="6465,3257 7620,0 7360,0 6249,3183 5079,6096 5947,6096 "
               />
               <polygon
                  id="fil7"
                  class={hovered ? 'move' : ''}
                  onMouseOver={HoverTrue}
                  onMouseLeave={HoverFalse}
                  points="6465,3257 7620,0 7879,0 6682,3331 6723,6096 5947,6096 "
               />
               <polygon
                  id="fil8"
                  class={hovered ? 'move' : ''}
                  onMouseOver={HoverTrue}
                  onMouseLeave={HoverFalse}
                  points="4949,2737 5802,0 6062,0 5166,2812 0,4828 0,4163 "
               />
               <polygon id="fil" class="fil9" points="10837,127 0,127 0,0 10837,0 " />
            </g>
         </svg>
      </div>
   );
}
