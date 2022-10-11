import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Pages
import Home from './pages/Home'
import Unity from './pages/Unity'
import Flutter from './pages/Flutter'
import React from './pages/React'

// 404
import NotFound from './pages/NotFound'

// Quissy
import Quissy from './pages/quissy/Quissy'
import QuissyPrivacy from './pages/quissy/QuissyPrivacy'

function App() {
    return (
        <Router>
            <Routes>
                {/* 404 */}
                <Route path='*' element={<NotFound />} />

                {/* Pages */}
                <Route exact path='/' element={<Home />} />
                <Route path='/unity' element={<Unity />} />
                <Route path='/flutter' element={<Flutter />} />
                <Route path='/react' element={<React />} />

                {/* Quissy */}
                <Route path='/Quissy' element={<Quissy />} />
                <Route path='/Quissy/Privacy' element={<QuissyPrivacy />} />
            </Routes>
        </Router>
    );
}

export default App;
