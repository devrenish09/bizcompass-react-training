import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import NotFound404 from '../pages/NotFound404';
import TimeZone from '../pages/TimeZone';

const RouteList = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/timezone' element={<TimeZone/>}/>
        <Route path='*' element={<NotFound404/>}/>
    </Routes>
  )
}

export default RouteList