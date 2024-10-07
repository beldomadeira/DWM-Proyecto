import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RegisterFormulario from './Register';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/register" element={<RegisterFormulario />} />
            </Routes>
        </Router>
    );
}

export default App;
