/*
  04.11.23

  App Component

  07.11.
  User Context

  23.11.
   Implemented Route for Post Page
*/

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './Layout';
import IndexPage from './pages/IndexPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import CreatePost from './pages/CreatePost';
import { UserContextProvider } from './UserContext';
import PostPage from './pages/PostPage';

function App() {
	return (
		<BrowserRouter>
			<UserContextProvider>
				<Routes>
					<Route path='/' element={<Layout />}>
						<Route index element={<IndexPage />} />

						<Route path='/login' element={<LoginPage />} />

						<Route path='/register' element={<RegisterPage />} />

						<Route path='/create' element={<CreatePost />} />

						<Route path='/post/:id' element={<PostPage />} />

						{/* <Route path='/profile' element={<h1>Profile</h1>} /> */}
					</Route>
				</Routes>
			</UserContextProvider>
		</BrowserRouter>
	);
}

export default App;
