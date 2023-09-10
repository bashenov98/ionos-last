import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Layout/Header/Header';
import Home from './Pages/Home/Home';
import Labs from './Labs/Labs';
import News, { NewsDetail } from './Pages/News/News';
import History from './Pages/Institute/History';
import Staff, { StaffDetail } from './Pages/Staff/Staff';
import ExperimentalBase from './Pages/Institute/ExperimentalBase';
import TechEquip from './Pages/Institute/TechEquip';
import YoungScientists from './Pages/Institute/YoungScientists';
import Anticorruption from './Pages/Institute/Anticorruption';
import GovPurchases from './Pages/Institute/GovPurchases';
import AerospaceMonitoring from './Pages/Services/AerospaceMonitoring';
import GeomagneticDimensions from './Pages/Services/GeomagneticDimensions';
import GeophysicalForecast from './Pages/Services/GeophysicalForecast';
import SystemDev from './Pages/Services/SystemDev';
import Projects from './Pages/Performance/Projects';
import Publications from './Pages/Performance/Publications';
import Seminars from './Pages/Performance/Seminars';
import Patents from './Pages/Performance/Patents';

import './App.css';
import { Footer } from './Layout/Footer/Footer';


function App() {
  return (
    <Router>
      <div className='app'>
        <Header />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/institute/diagnosticlab" Component={Labs} />
          <Route path="/labs/nonstationarylab" Component={Labs} />
          <Route path="/labs/geomagneticlab" Component={Labs} />
          <Route path="/labs/reliabilitylab" Component={Labs} />
          <Route path="/labs/geodynamiclab" Component={Labs} />
          <Route path="/labs/complexlab" Component={Labs} />
          <Route path="/labs/cartographylab" Component={Labs} />
          <Route path="/institute/news" Component={News}/>
          <Route path="/institute/news/:id" Component={NewsDetail}/>
          <Route path="/institute/history" Component={History}/>
          <Route path="/institute/staff" Component={Staff}/>
          <Route path="/institute/staff/:id" Component={StaffDetail} />
          <Route path="/institute/experimentalbase" Component={ExperimentalBase}/>
          <Route path="/institute/technicalequipment" Component={TechEquip}/>
          <Route path="/institute/youngscientists" Component={YoungScientists}/>
          <Route path="/institute/anticorruption" Component={Anticorruption}/>
          <Route path="/institute/govpurchases" Component={GovPurchases}/>
          
          <Route path="/services/geophysicalforecast" Component={GeophysicalForecast}/>
          <Route path="/services/geomagneticdimensions" Component={GeomagneticDimensions}/>
          <Route path="/services/aerospacemonitoring" Component={AerospaceMonitoring}/>
          <Route path="/services/geoinformsystemdevelopment" Component={SystemDev}/>

          <Route path="/performance/currentprojects" Component={Projects}/>
          <Route path="/performance/publications" Component={Publications}/>
          <Route path="/performance/seminars" Component={Seminars}/>
          <Route path="/performance/patents" Component={Patents}/>
          
        </Routes>
        <Footer />
      </div>
    </Router>

  );
}

export default App;
