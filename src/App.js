import './App.css';
import { Banner, Entrance, NavBar, SideBar, ContactCard, Personage, CarouselBoost, BannerMobile } from './components';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
   return (
      <div className="App">
         <NavBar />
         <SideBar />
         <Banner />
         <BannerMobile />
         <Entrance />
         <ContactCard />
         <Personage />
         <CarouselBoost />
      </div>
   );
}

export default App;
