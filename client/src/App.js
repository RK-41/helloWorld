/*
  04.11.23

  App Component
*/

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './Layout';
import IndexPage from './pages/IndexPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<IndexPage />} />

					<Route path='/login' element={<LoginPage />} />

					<Route path='/register' element={<RegisterPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
