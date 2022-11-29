import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginForm from './components/Forms/Login';
import RegisterForm from "./components/Forms/Register"
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/home';
import PropiedadDetail from './pages/PropiedadDetail';
import PropiedadesPage from './pages/Propiedades';
import Profile from './pages/Profile/Profile';

function App(): any {
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>

				< Route path='/login' element={< LoginForm />} />
				< Route path='/sign-up' element={< RegisterForm />} />


				<Route path='/' element={<Home />} />
				<Route path='/propiedades' element={<PropiedadesPage />} />
				<Route path="/propiedades/:id"  element={<PropiedadDetail/>} />
				<Route path='/profile' element={<Profile />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
