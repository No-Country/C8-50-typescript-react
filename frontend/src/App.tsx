import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/home';
import Profile from './pages/Profile/Profile';
import Sell from './pages/Sell/Sell';
import Comprar from './pages/Comprar/Comprar';
import Contacto from './pages/Contacto/Contacto';
import LoginPage from './pages/Login/Login';
import { RegisterForm } from './components/Forms/Register';

function App(): any {
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/profile' element={<Profile />} />
				<Route path='/vender' element={<Sell />} />
				<Route path='/comprar' element={<Comprar />} />
				<Route path='/contact' element={<Contacto />} />
				<Route path='/sign-up' element={<LoginPage />} />
				<Route path='/register' element={<RegisterForm />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
