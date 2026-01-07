import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import Antrian from './pages/Antrian';
import Doctors from './pages/Doctors';
import Services from './pages/Services';
import Reviews from './pages/Reviews';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router basename="/Hospital-Website/home">
      <div className="text-[#1d4d85] app min-w-[280px] min-h-screen bg-background">
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <Main />
            </>
          } />
          <Route path="/Hospital-Website/home" element={
            <>
              <Main />
            </>
          } />
          <Route path="/Hospital-Website/home/antrian" element={<Antrian />} />
          <Route path="/Hospital-Website/home/doctors" element={<Doctors />} />
          <Route path="/Hospital-Website/home/services" element={<Services />} />
          <Route path="/Hospital-Website/home/reviews" element={<Reviews />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
