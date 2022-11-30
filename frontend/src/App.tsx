import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/home';
import Profile from './pages/Profile/Profile';
function App(): any {
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/profile' element={<Profile />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
