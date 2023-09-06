import Classes from './App.module.scss'
import { Routes, Route } from 'react-router-dom'

import Homepage from './Components/Homepage/Homepage'
import NewsFeedPage from './Components/NewsFeedPage/NewsFeedPage'
// import Login from './Components/Login/Login'
import Profile from './Components/Profile/Profile'
import ArticlePage from './Components/ArticlePage/ArticlePage'
import PrivateRoute from './PrivateRoute'

function App() {
  return (
    <div className={Classes.App}>
      <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path='/articles' element={<NewsFeedPage/>} />
        <Route element={<PrivateRoute/>}>
          <Route path='/profile' element={<Profile/>} />
        </Route>
        {/* <Route path='/login' element={<Login/>} /> */}
        {/* <Route path='/profile' element={<Profile/>} /> */}
        <Route path='/articles/:id' element={<ArticlePage/>} />
      </Routes>
    </div>
  )
}

export default App
