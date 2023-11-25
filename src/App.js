import logo from './logo.svg';
import './App.css';
import Home from './sections/Home_pages/Home'
import LogoutPage from './sections/Account_page/LogoutPage'
import {Routes, Route} from 'react-router-dom'
import HomeDev from './sections/Home_pages/HomeDev'
import Home_Location from './sections/Locations/Home_Location';


function App() {
  return (
    <>
    
    <Routes>
      <Route exact path="/Home" element={<Home/>}/>
      <Route exact path="/" element={<LogoutPage/>}/>
      <Route exact path="/HomeDev" element={<HomeDev/>}/>
      <Route exact path='/Home_location' element={<Home_Location/>}/>
    </Routes>
    </>
  )
}

export default App;
