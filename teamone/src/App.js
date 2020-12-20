import logo from './logo.svg';
import './App.css';
import  MainDesktop from './components/desktop/MainDesktop' 
import MainMobile from './components/mobile/MainMobile'
import  Header from './components/Header' 
import  Footer from './components/Footer' 
import MainClass from "./components/MainClass"
import {Mobile, Desktop} from "./components/shared/Responsive"
function App() {
  return (
    <div className="App">
      
      <Header />
        <Desktop> 
          <MainDesktop />
        </Desktop>

        <Mobile> 
          <MainMobile />
        </Mobile>
        <Footer />
    </div>
    
  );
}

export default App;
