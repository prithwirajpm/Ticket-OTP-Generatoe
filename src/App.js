import './App.css';
import Bannar from './components/Bannar';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Row from './components/Row';
import Ticket from './components/Ticket';
import requests from './requests';
function App() {
  return (
    <div>
      <Navbar />
      <Bannar fetchUrl={requests.fetchNetflixOriginals}/>
      <Ticket />
      <Row isPoster={true} fetchUrl={requests.fetchNetflixOriginals}/>
      <Ticket />
      <Footer />
    </div>
  );
}

export default App;
