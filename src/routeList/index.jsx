import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import NotFound404 from '../pages/NotFound404';
import TimeZone from '../pages/TimeZone';
import Function from '../components/Functions';
import Counter from '../components/Class/Classes';

const RouteList = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/timezone' element={<TimeZone/>}/>
        <Route path='/functions' element={<Function/>}/>
        <Route path='/counter' element={<Counter/>}/>
        <Route path='*' element={<NotFound404/>}/>
    </Routes>
  )
}

export default RouteList