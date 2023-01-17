import { BrowserRouter, Navigate, Routes, Route} from 'react-router-dom';
import HomePage from 'scenes/homePage'; //This is the whole purpose of the JS config Json this allows us to reference scenes instead of having to do a lot of relative imports jus like this (./scenes/homePage)
import LoginPage from 'scenes/loginPage';
import ProfilePage from 'scenes/profilePage';

function App() {
  return  <div className="app"> 
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<LoginPage />} />
      <Route path='/home' element={<HomePage />} />
      <Route path='/profile/:userId' element={<ProfilePage />} />
    </Routes>
  </BrowserRouter>
  </div>;
}

export default App;
