import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Images } from '.';

const App = () => {
    return <BrowserRouter>
        <Routes>
            <Route exact path='/' element={<Images />} />
        </Routes>
    </BrowserRouter>
}
export default App;