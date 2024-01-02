import SignUpForm from './components/SignUPForm/SignUpForm';
import LoginForm from './components/LoginForm/LoginForm';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Profile from './components/profile/profile';
import EditProfile from './components/profile/editProfile';

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignUpForm />} />
        <Route path="/Login" element={<LoginForm />} />
        <Route path="/Profile/:email" element={<Profile />} />
        <Route path='/editProfile/:email' element={<EditProfile />} />
      </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
