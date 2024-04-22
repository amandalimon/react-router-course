import { HashRouter, Routes, Route } from 'react-router-dom';
import { Menu } from './Menu';
import { AuthProvider, AuthRoute } from './auth';
import { Home } from './Home';
import { Blog } from './Blog';
import { BlogPost } from './BlogPost';
import { Profile } from './Profile';
import { LoginPage } from './LoginPage';
import { LogoutPage } from './LogoutPage';
import './App.css';

function App() {
  return (
    <>
      <HashRouter>
        <AuthProvider>
          <Menu />
          <Routes>
            <Route path="/" element={<Home />} />,
            <Route path="/blog" element={<Blog />}>,
              <Route path="/blog/:slug" element={<BlogPost />} />,
            </Route>
            <Route path="/log-in" element={<LoginPage />} />
            <Route path="/profile" element={
              <AuthRoute>
                <Profile />
              </AuthRoute>
            }
            />,
            <Route path="/log-out" element={
              <AuthRoute>
                <LogoutPage />
              </AuthRoute>
            }
            />,
            <Route path="*" element={<p>Not found</p>} />,
          </Routes>
        </AuthProvider>
      </HashRouter>
    </>
  );
}

export default App;