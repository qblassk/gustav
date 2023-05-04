import '../components/NavBar.css';
import { useState, useEffect } from 'react';

export function NavBar() {
   const contactCardContainer = document.getElementById('contact-card-container');
   const handleClickContact = () => {
      contactCardContainer.classList.toggle('contact-card-container-on');
      contactCardContainer.classList.toggle('contact-card-container-off');
   };

   const handleClickContactOff = () => {
      contactCardContainer.classList.remove('contact-card-container-on');
      contactCardContainer.classList.add('contact-card-container-off');
   };

   const textOn = () => {
      const sidebarScrollContainer = document.getElementById('sidebar-scroll-container');
      sidebarScrollContainer.style.color = 'white';
   };

   const textOff = () => {
      const sidebarScrollContainer = document.getElementById('sidebar-scroll-container');
      sidebarScrollContainer.style.color = 'black';
   };

   const position = function (obj) {
      const currentTop = obj.offsetTop - 30;
      return currentTop;
   };
   const handleClickScrollAbout = () => {
      const sidebarScrollContainer = document.getElementById('sidebar-scroll-container');
      const about = document.getElementById('about');
      if (about) {
         sidebarScrollContainer.scrollTo(0, position(about));
         sidebarScrollContainer.style.color = 'white';
      }
   };
   const handleClickScrollExperience = () => {
      const sidebarScrollContainer = document.getElementById('sidebar-scroll-container');
      const experience = document.getElementById('experience');
      if (experience) {
         sidebarScrollContainer.scrollTo(0, position(experience));
         sidebarScrollContainer.style.color = 'white';
      }
   };
   const handleClickScrollSkills = () => {
      const sidebarScrollContainer = document.getElementById('sidebar-scroll-container');
      const skills = document.getElementById('skills');
      if (skills) {
         sidebarScrollContainer.scrollTo(0, position(skills));
         sidebarScrollContainer.style.color = 'white';
      }
   };
   const handleClickScrollEducation = () => {
      const sidebarScrollContainer = document.getElementById('sidebar-scroll-container');
      const education = document.getElementById('education');
      if (education) {
         sidebarScrollContainer.scrollTo(0, position(education));
         sidebarScrollContainer.style.color = 'white';
      }
   };
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

   useEffect(() => {
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
   }, []);

   return (
      <div>
         <svg viewBox="0 0 10837 6096" className={lines}>
            <g>
               <polygon
                  class="fil9"
                  points="10837,6096 0,6096 0,0 10837,0"
                  onClick={() => {
                     handleClickContactOff();
                     textOff();
                  }}
               />
               <polygon
                  class={`fil fil1 ${hovered1 && 'move'}`}
                  onMouseOver={HoverTrue1}
                  onMouseLeave={HoverFalse1}
                  onClick={handleClickScrollExperience}
                  points="0,4828 0,5723 5382,2886 6321,0 6062,0 5166,2812 "
               />
               <polygon
                  class={`fil fil2 ${hovered2 && 'move'}`}
                  onMouseOver={HoverTrue2}
                  onMouseLeave={HoverFalse2}
                  onClick={handleClickScrollSkills}
                  points="5599,2960 6581,0 6321,0 5382,2886 0,5723 0,6096 1238,6096 "
               />
               <polygon
                  class={`fil fil3 ${hovered3 && 'move'}`}
                  onMouseOver={HoverTrue3}
                  onMouseLeave={HoverFalse3}
                  onClick={handleClickScrollEducation}
                  points="5816,3034 6841,0 6581,0 5599,2960 1238,6096 2778,6096 "
               />
               <polygon
                  class={`fil fil4 ${hovered4 && 'move'}`}
                  onMouseOver={HoverTrue4}
                  onMouseLeave={HoverFalse4}
                  onClick={handleClickContact}
                  points="6032,3109 7100,0 6841,0 5816,3034 2778,6096 4029,6096 "
               />
               <polygon
                  class={`fil fil5 ${hovered5 && 'move'}`}
                  onMouseOver={HoverTrue5}
                  onMouseLeave={HoverFalse5}
                  onClick={textOn}
                  points="6249,3183 7360,0 7100,0 6032,3109 4029,6096 5079,6096 "
               />
               <polygon
                  class={`fil fil6 ${hovered6 && 'move'}`}
                  onMouseOver={HoverTrue6}
                  onMouseLeave={HoverFalse6}
                  onClick={textOff}
                  points="6465,3257 7620,0 7360,0 6249,3183 5079,6096 5947,6096 "
               />
               <polygon
                  class={`fil fil7 ${hovered7 && 'move'}`}
                  onMouseOver={HoverTrue7}
                  onMouseLeave={HoverFalse7}
                  points="6465,3257 7620,0 7879,0 6682,3331 6723,6096 5947,6096 "
               />
               <polygon
                  class={`fil fil8 ${hovered8 && 'move'}`}
                  onMouseOver={HoverTrue8}
                  onMouseLeave={HoverFalse8}
                  onClick={handleClickScrollAbout}
                  points="4949,2737 5802,0 6062,0 5166,2812 0,4828 0,4163 "
               />

               <g transform="matrix(0.326712 -0.945124 0.945124 0.326712 2114.81 4889.77)">
                  <text
                     x="5419"
                     y="3048"
                     class={`navbar-fnt ${hovered4 && 'move'}`}
                     onMouseOver={HoverTrue4}
                     onMouseLeave={HoverFalse4}
                     onClick={handleClickContact}
                  >
                     contact
                  </text>
               </g>
               <g transform="matrix(0.326712 -0.945124 0.945124 0.326712 1053.48 4987.19)">
                  <text
                     x="5419"
                     y="3048"
                     class={`navbar-fnt ${hovered8 && 'move'}`}
                     onMouseOver={HoverTrue8}
                     onMouseLeave={HoverFalse8}
                     onClick={handleClickScrollAbout}
                  >
                     about me
                  </text>
               </g>
               <g transform="matrix(0.326712 -0.945124 0.945124 0.326712 1291.56 5012.16)">
                  <text
                     x="5419"
                     y="3048"
                     class={`navbar-fnt ${hovered1 && 'move'}`}
                     onMouseOver={HoverTrue1}
                     onMouseLeave={HoverFalse1}
                     onClick={handleClickScrollExperience}
                  >
                     experience
                  </text>
               </g>
               <g transform="matrix(0.326712 -0.945124 0.945124 0.326712 1672.83 4653.74)">
                  <text
                     x="5419"
                     y="3048"
                     class={`navbar-fnt ${hovered2 && 'move'}`}
                     onMouseOver={HoverTrue2}
                     onMouseLeave={HoverFalse2}
                     onClick={handleClickScrollSkills}
                  >
                     skills
                  </text>
               </g>
               <g transform="matrix(0.326712 -0.945124 0.945124 0.326712 1813.52 4984.85)">
                  <text
                     x="5419"
                     y="3048"
                     class={`navbar-fnt ${hovered3 && 'move'}`}
                     onMouseOver={HoverTrue3}
                     onMouseLeave={HoverFalse3}
                     onClick={handleClickScrollEducation}
                  >
                     education
                  </text>
               </g>
               <g transform="matrix(0.326712 -0.945124 0.945124 0.326712 2386.63 4825.9)">
                  <text
                     x="5419"
                     y="3048"
                     class={`navbar-fnt ${hovered5 && 'move'}`}
                     onMouseOver={HoverTrue5}
                     onMouseLeave={HoverFalse5}
                     onClick={textOn}
                  >
                     info on
                  </text>
               </g>
               <g transform="matrix(0.326712 -0.945124 0.945124 0.326712 2600.58 4971.62)">
                  <text
                     x="5419"
                     y="3048"
                     class={`navbar-fnt ${hovered6 && 'move'}`}
                     onMouseOver={HoverTrue6}
                     onMouseLeave={HoverFalse6}
                     onClick={textOff}
                  >
                     info off
                  </text>
               </g>
               <g transform="matrix(0.326712 -0.945124 0.945124 0.326712 2847.97 4981.63)">
                  <text
                     x="5419"
                     y="3048"
                     class={`navbar-fnt ${hovered7 && 'move'}`}
                     onMouseOver={HoverTrue7}
                     onMouseLeave={HoverFalse7}
                  >
                     <a
                        href="https://mega.nz/file/8ehFybiB#ZSZJaUU6awQJcRzGqAyGlLj49RqgylEpQcTdlKYaoW8"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="navbar-fnt"
                     >
                        abstract
                     </a>
                  </text>
               </g>
            </g>
         </svg>
      </div>
   );
}
