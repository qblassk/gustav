import './App.css';
import { Banner, Entrance, NavBar, SideBar, ContactCard } from './components';

function App() {
   return (
      <div className="App">
         <NavBar />
         <SideBar />
         <Banner />
         <Entrance />
         <ContactCard />
      </div>
   );
}

export default App;
