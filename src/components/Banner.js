import '../components/Banner.css';
import { useState } from 'react';
import imgBanner from '../assets/img/img-banner.png';

export function Banner() {
   const [lines, setLines] = useState('lines-off');
   const linesOn = () =>
      setTimeout(function () {
         setLines('lines-on');
      }, 4600);

   linesOn();

   const [hovered1, setHovered1] = useState(false);
   const HoverTrue1 = () => setHovered1(true);
   const HoverFalse1 = () =>
      setTimeout(function () {
         setHovered1(false);
      }, 3000);

   const [hovered2, setHovered2] = useState(false);
   const HoverTrue2 = () => setHovered2(true);
   const HoverFalse2 = () =>
      setTimeout(function () {
         setHovered2(false);
      }, 3000);

   const [hovered3, setHovered3] = useState(false);
   const HoverTrue3 = () => setHovered3(true);
   const HoverFalse3 = () =>
      setTimeout(function () {
         setHovered3(false);
      }, 3000);

   const [hovered4, setHovered4] = useState(false);
   const HoverTrue4 = () => setHovered4(true);
   const HoverFalse4 = () =>
      setTimeout(function () {
         setHovered4(false);
      }, 3000);

   const [hovered5, setHovered5] = useState(false);
   const HoverTrue5 = () => setHovered5(true);
   const HoverFalse5 = () =>
      setTimeout(function () {
         setHovered5(false);
      }, 3000);

   const [hovered6, setHovered6] = useState(false);
   const HoverTrue6 = () => setHovered6(true);
   const HoverFalse6 = () =>
      setTimeout(function () {
         setHovered6(false);
      }, 3000);

   const [hovered7, setHovered7] = useState(false);
   const HoverTrue7 = () => setHovered7(true);
   const HoverFalse7 = () =>
      setTimeout(function () {
         setHovered7(false);
      }, 3000);

   const [hovered8, setHovered8] = useState(false);
   const HoverTrue8 = () => setHovered8(true);
   const HoverFalse8 = () =>
      setTimeout(function () {
         setHovered8(false);
      }, 3000);

   const HoverTrueInit = function () {
      setTimeout(function () {
         setHovered8(true);
      }, 4600);
      setTimeout(function () {
         setHovered8(false);
      }, 7600);
      setTimeout(function () {
         setHovered1(true);
      }, 4700);
      setTimeout(function () {
         setHovered1(false);
      }, 7700);
      setTimeout(function () {
         setHovered2(true);
      }, 4800);
      setTimeout(function () {
         setHovered2(false);
      }, 7800);
      setTimeout(function () {
         setHovered3(true);
      }, 4900);
      setTimeout(function () {
         setHovered3(false);
      }, 7900);
      setTimeout(function () {
         setHovered4(true);
      }, 5000);
      setTimeout(function () {
         setHovered4(false);
      }, 8000);
      setTimeout(function () {
         setHovered5(true);
      }, 5100);
      setTimeout(function () {
         setHovered5(false);
      }, 8100);
      setTimeout(function () {
         setHovered6(true);
      }, 5200);
      setTimeout(function () {
         setHovered6(false);
      }, 8200);
      setTimeout(function () {
         setHovered7(true);
      }, 5300);
      setTimeout(function () {
         setHovered7(false);
      }, 8300);
   };

   return (
      <div className="container" onLoad={HoverTrueInit}>
         <img src={imgBanner} className="img-base" alt="Words" />
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10837 6096" className={lines}>
            <g id="Capa_x0020_1">
               <metadata id="CorelCorpID_0Corel-Layer" />
               <polygon
                  id="fil1"
                  class={hovered1 ? 'move' : ''}
                  onMouseOver={HoverTrue1}
                  onMouseLeave={HoverFalse1}
                  points="0,4828 0,5723 5382,2886 6321,0 6062,0 5166,2812 "
               />
               <polygon
                  id="fil2"
                  class={hovered2 ? 'move' : ''}
                  onMouseOver={HoverTrue2}
                  onMouseLeave={HoverFalse2}
                  points="5599,2960 6581,0 6321,0 5382,2886 0,5723 0,6085 1253,6085 "
               />
               <polygon
                  id="fil3"
                  class={hovered3 ? 'move' : ''}
                  onMouseOver={HoverTrue3}
                  onMouseLeave={HoverFalse3}
                  points="5816,3034 6841,0 6581,0 5599,2960 1253,6085 2778,6096 "
               />
               <polygon
                  id="fil4"
                  class={hovered4 ? 'move' : ''}
                  onMouseOver={HoverTrue4}
                  onMouseLeave={HoverFalse4}
                  points="6032,3109 7100,0 6841,0 5816,3034 2789,6085 4029,6096 "
               />
               <polygon
                  id="fil5"
                  class={hovered5 ? 'move' : ''}
                  onMouseOver={HoverTrue5}
                  onMouseLeave={HoverFalse5}
                  points="6249,3183 7360,0 7100,0 6032,3109 4036,6085 5079,6096 "
               />
               <polygon
                  id="fil6"
                  class={hovered6 ? 'move' : ''}
                  onMouseOver={HoverTrue6}
                  onMouseLeave={HoverFalse6}
                  points="6465,3257 7620,0 7360,0 6249,3183 5079,6096 5947,6096 "
               />
               <polygon
                  id="fil7"
                  class={hovered7 ? 'move' : ''}
                  onMouseOver={HoverTrue7}
                  onMouseLeave={HoverFalse7}
                  points="6465,3257 7620,0 7879,0 6682,3331 6723,6096 5947,6096 "
               />
               <polygon
                  id="fil8"
                  class={hovered8 ? 'move' : ''}
                  onMouseOver={HoverTrue8}
                  onMouseLeave={HoverFalse8}
                  points="4949,2737 5802,0 6062,0 5166,2812 0,4828 0,4163 "
               />
               <polygon class="fil9" points="10837,127 0,127 0,0 10837,0 " />
            </g>
         </svg>
      </div>
   );
}
