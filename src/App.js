import logo from './logo.svg';
import './App.css';
import Navbar from './commponent/navbar';
import Loginbody from './commponent/main';
import Social from './commponent/Social';
import Footer from './commponent/footer';
function App() {
  return (
   <>
   <Navbar/>
   <Loginbody />
   <Social />
   <Footer />
   </>
  );
}

export default App;
