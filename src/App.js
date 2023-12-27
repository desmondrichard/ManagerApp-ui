import './App.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login';
import Register from './components/Register';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Accessories from './components/Accessories';
import PlayersAuctionList from './components/PlayersAuctionList';
import Fixtures from './components/Fixtures';
import ThingsTodo from './components/ThingsTodo';
import Accreditationcard from './components/Accreditationcard';
import History from './components/History';
import PlayerRegistration from './components/offcanvas-body/Registration/PlayerRegistration';
import App1 from './components/App1';
import AccreditionForm from './components/AccreditionForm';
import ThingsTodoForm from './components/ThingsTodoForm';
import SupportStaffRegistration from './components/offcanvas-body/Registration/Support-Staff-Registration-Form/SupportStaffRegistration';
// import PersonalInformation from './components/offcanvas-body/Registration/Player-Registration-Form/PersonalInformation';
// import ProficiencyForm from './components/offcanvas-body/Registration/Player-Registration-Form/ProficiencyForm';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<Login />} />
          <Route path='/signup' exact element={<Register />} />
          <Route path='/dashboard' exact element={<App1 />} />
          <Route path='/playerregister' exact element={<PlayerRegistration />} />
          <Route path='/staffregister' exact element={<SupportStaffRegistration />} />

          <Route path='/accessories' exact element={<Accessories />} />
          <Route path='/playersauctionlist' exact element={<PlayersAuctionList />} />
          <Route path='/fixtures' exact element={<Fixtures />} />
          <Route path='/thingstodo' exact element={<ThingsTodo />} />

          <Route path='/accreditationcards' exact element={<Accreditationcard />} />
          <Route path='/accreditionform' exact element={<AccreditionForm />} />
          <Route path='/thingstodoform' exact element={<ThingsTodoForm />} />

          {/* <Route path='/history' exact element={<History />} /> */}

          {/* <Route path='/playerpersonalinformation' exact element={<PersonalInformation />} />
          <Route path='/playerproficiencyinformation' exact element={<ProficiencyForm />} /> */}
          

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;