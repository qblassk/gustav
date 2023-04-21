import './App.css';
import { Banner, Entrance, NavBar, SideBar, ContactCard, Personage } from './components';

function App() {
   return (
      <div className="App">
         <NavBar />
         <SideBar />
         <Banner />
         <Entrance />
         <ContactCard />
         <Personage />
      </div>
   );
}

export default App;
