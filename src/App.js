import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Layout/Header/Header";
import Home from "./Pages/Home/Home";
import Labs from "./Labs/Labs";
import News, { NewsDetail } from "./Pages/News/News";
import History from "./Pages/Institute/History";
import Staff, { StaffDetail } from "./Pages/Staff/Staff";
import ExperimentalBase from "Pages/Institute/components/experimentals-base/ExperimentalBase";
import TechnicalEquipment from "Pages/Institute/components/technical-equipment/TechnicalEquipment";
import YoungScientists from "./Pages/Institute/YoungScientists";
import Anticorruption from "./Pages/Institute/Anticorruption";
import GovPurchases from "./Pages/Institute/GovPurchases";
import AerospaceMonitoring from "./Pages/Services/AerospaceMonitoring";
import GeomagneticDimensions from "./Pages/Services/GeomagneticDimensions";
import GeophysicalForecast from "./Pages/Services/GeophysicalForecast";
import SystemDev from "./Pages/Services/SystemDev";
import { Projects, ProjectDetail } from "./Pages/Performance/Projects/Projects";
import Publications from "./Pages/Performance/Publications/Publications";
import Seminars from "./Pages/Performance/Seminars/Seminars";
import Patents from "./Pages/Performance/Patents";

import "./App.css";
import { Footer } from "./Layout/Footer/Footer";
import LabsProjects from "Labs/Projects/LabsProjects";
import LabsEmployees from "Labs/Employees/LabsEmployees";

function App() {
  const labPathData = [
    "diagnosticlab",
    "nonstationarylab",
    "geomagneticlab",
    "reliabilitylab",
    "geodynamiclab",
    "complexlab",
    "cartographylab",
  ];

  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home/>} />

          {labPathData.map((path, i) => (
            <>
              <Route path={`/labs/${path}/projects`} element={<LabsProjects/>} />
              <Route path={`/labs/${path}/employees`} element={<LabsEmployees/>} />
              <Route path={`/labs/${path}`} element={<Labs/>} />
            </>
          ))}

          <Route path="/institute/news" element={<News/>} />
          <Route path="/institute/news/:id" element={<NewsDetail/>} />
          <Route path="/institute/history" element={<History/>} />
          <Route path="/institute/staff" element={<Staff/>} />
          <Route path="/institute/staff/:id" element={<StaffDetail/>} />
          <Route
            path="/institute/experimentalbase"
            element={<ExperimentalBase/>}
          /> 
          <Route
            path="/institute/technicalequipment"
            element={<TechnicalEquipment/>}
          />
          <Route
            path="/institute/youngscientists"
            element={<YoungScientists/>}
          />
          <Route path="/institute/anticorruption" element={<Anticorruption/>} />
          <Route path="/institute/govpurchases" element={<GovPurchases/>} />

          <Route
            path="/services/geophysicalforecast"
            element={<GeophysicalForecast/>}
          />
          <Route
            path="/services/geomagneticdimensions"
            element={<GeomagneticDimensions/>}
          />
          <Route
            path="/services/aerospacemonitoring"
            element={<AerospaceMonitoring/>}
          />
          <Route
            path="/services/geoinformsystemdevelopment"
            element={<SystemDev/>}
          />

          <Route path="/performance/currentprojects" element={<Projects/>} />
          <Route
            path="/performance/currentprojects/:id"
            element={<ProjectDetail/>}
          />
          <Route path="/performance/publications" element={<Publications/>} />
          <Route path="/performance/seminars" element={<Seminars/>} />
          <Route path="/performance/patents" element={<Patents/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
