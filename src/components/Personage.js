import '../components/Personage.css';
import personageA from '../assets/img/personage-a.png';
import personageB from '../assets/img/personage-b.png';
import personageC from '../assets/img/personage-c.png';
import welcome from '../assets/img/welcome.png';

export function Personage() {
   const welcomeDialog = () => {
      const welcome = document.getElementById('personage-welcome');
      setTimeout(function () {
         welcome.classList.remove('personage-hidden-welcome');
         welcome.classList.add('personage-visible-welcome');
      }, 13000);
      setTimeout(function () {
         welcome.classList.remove('personage-visible-welcome');
         welcome.classList.add('personage-hidden-welcome');
      }, 16000);
   };

   const changeClass = () => {
      const imgA = document.getElementById('personage-a');
      const imgB = document.getElementById('personage-b');
      const imgC = document.getElementById('personage-b');
      setTimeout(function () {
         imgA.classList.remove('personage-hidden-a');
         imgA.classList.add('personage-translate-a');
      }, 9000);
      setTimeout(function () {
         imgA.classList.remove('personage-translate-a');
         imgA.classList.add('personage-hidden-a');
      }, 69000);
      setTimeout(function () {
         imgB.classList.remove('personage-hidden-b');
         imgB.classList.add('personage-translate-b');
      }, 129000);
      setTimeout(function () {
         imgB.classList.remove('personage-translate-b');
         imgB.classList.add('personage-hidden-b');
      }, 189000);
      setTimeout(function () {
         imgC.classList.remove('personage-hidden-c');
         imgC.classList.add('personage-translate-c');
      }, 249000);
      setTimeout(function () {
         imgC.classList.remove('personage-translate-c');
         imgC.classList.add('personage-hidden-c');
      }, 309000);
      setTimeout(function () {
         imgA.classList.remove('personage-hidden-a');
         imgA.classList.add('personage-translate-a');
      }, 369000);
      setTimeout(function () {
         imgA.classList.remove('personage-translate-a');
         imgA.classList.add('personage-hidden-a');
      }, 429000);
      setTimeout(function () {
         changeClass();
      }, 480000);
   };

   const iniciarTemporizador = () => {
      const imgA = document.getElementById('personage-a');
      const imgB = document.getElementById('personage-b');
      const imgC = document.getElementById('personage-c');
      const intervalo = Math.floor(Math.random() * 5 + 1) * 1000;
      setTimeout(function () {
         imgA.classList.toggle('flicker');
         imgB.classList.toggle('flicker');
         imgC.classList.toggle('flicker');
         iniciarTemporizador();
      }, intervalo);
   };

   return (
      <div
         onLoad={() => {
            changeClass();
            iniciarTemporizador();
            welcomeDialog();
         }}
      >
         <img src={personageA} id="personage-a" className="personage-hidden-a" alt="skate" />
         <img src={personageB} id="personage-b" className="personage-hidden-b" alt="skate" />
         <img src={personageC} id="personage-c" className="personage-hidden-c" alt="skate" />
         <img src={welcome} id="personage-welcome" className="personage-hidden-welcome" alt="welcome" />
      </div>
   );
}
