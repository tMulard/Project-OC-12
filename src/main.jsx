import './reset.css'
import './index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './pages/App/App.jsx'
import Error from './pages/Error/Error.jsx'
import Profile from './pages/Profile/Profile.jsx'
// import Settings from './pages/Settings/Settings.jsx'
// import Forum from './pages/Forum/Forum.jsx'
import DataProvider from './provider/DataProvider.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DataProvider>
      <BrowserRouter basename={import.meta.env.PROD ? "/Project-OC-12/" : "/"}>
          <main className='main'>
            <Routes>
              <Route path='/' element={<App />} />
              <Route path='/user/:id/profile' element={<Profile />} />
              {/* <Route path='/user/:id/settings' element={<Settings />} /> */}
              {/* <Route path='/user/:id/forum' element={<Forum />} /> */}
              <Route path='*' element={<Error />} />  
            </Routes>
          </main>
      </BrowserRouter>
    </DataProvider>
  </StrictMode>,
)
