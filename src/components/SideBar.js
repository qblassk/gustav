import '../components/SideBar.css';

export function SideBar() {
   return (
      <div>
         <div className="sidebar-text">
            <scroll-container id="sidebar-scroll-container">
               <scroll-page id="about">
                  <h4>ABOUT ME</h4>
                  <p>
                     More than 10 years of professional growth in the world of design and computing, I developed a great
                     technical, self-management, clients, and teamwork experience. I 've been programming for more than
                     three years and working as a Full Stack Developer. I'm very organized writing code and great
                     motivator of good practices.
                  </p>
               </scroll-page>
               <scroll-page id="experience">
                  <h4>EXPERIENCE</h4>
                  <p>
                     <b>
                        <i>FREELANCE (2020-Now)</i>
                     </b>
                  </p>
                  <p>/ Development of e-commerce websites, backend an frontend</p>
                  <p>/ Programming and game design "The Invasion"</p>
                  <p>
                     / Analysis, data loading and creation of an Artificial Neural Network; in order to predict prices
                     in a housing development. Real estate client
                  </p>
                  <p>
                     <b>
                        <i>GARBe STUDIO (2017-2022)</i>
                     </b>
                  </p>
                  <p>/ Programming </p>
                  <p>/ Design and 3D Modeling</p>
                  <p>
                     <b>
                        <i>PB STUDIO (2013-2017)</i>
                     </b>
                  </p>
                  <p>/ Design and 3D Modeling </p>
                  <p>/ Graphic and corporate design</p>
               </scroll-page>
               <scroll-page id="skills">
                  <h4>SKILLS </h4>| HTML | CSS | JavaScript | NodeJs | Express | React | EJS | SQL | MySQL | Sequelize |
                  API REST | AWS | ThreeJs | IA | Machine Learning | Python | TensorFlow | NumPy | Pandas | Matplotlib |
                  Git | Scrum |
               </scroll-page>
               <scroll-page id="education">
                  <h4>EDUCATION</h4>
                  <p>
                     <b>
                        <i>FULL STACK WEB DEVELOPER</i>
                     </b>
                  </p>
                  <p>Digital House - 2022/2023</p>
                  <p>
                     <b>
                        <i> ARCHITECT</i>
                     </b>
                  </p>
                  <p>
                     Facultad de Arquitectura, Urbanismo y Diseño Industrial - Univesidad Nacional de Córdoba -
                     2007/2016
                  </p>
                  <p>
                     <b>
                        <i>BACHELOR ORIENTED IN ECONOMICS AND MANAGEMENT OF ORGANIZATIONS </i>
                     </b>
                  </p>
                  <p>Anglo Americano School / 1998-2004</p>

                  <p className="sidebar-filled-text">
                     More than 10 years of professional growth in the world of design and computing, I developed a great
                     technical, self-management, clients, and teamwork experience. I 've been programming for more than
                     three years and working as a Full Stack Developer. I'm very organized writing code and great
                     motivator of good practices. More than 10 years of professional growth in the world of design and
                     computing, I developed a great technical, self-management, clients, and teamwork experience. I 've
                     been programming for more than three years and working as a Full Stack Developer. I'm very
                     organized writing code and great motivator of good practices. More than 10 years of professional
                     growth in the world of design and computing, I developed a great technical, self-management,
                     clients, and teamwork experience. I 've been programming for more than three years and working as a
                     Full Stack Developer. I'm very organized writing code and great motivator of good practices. More
                     than 10 years of professional growth in the world of design and computing, I developed a great
                  </p>
               </scroll-page>
            </scroll-container>
         </div>
      </div>
   );
}
