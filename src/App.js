import './App.css';

//components
import NavBar from './components/NavBar';
import  AddCours from './components/AddCours';
import AllCours from './components/AllCours';
import CoursManager from './components/CoursManager';
import EditCours from './components/EditCours';

import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<CoursManager />} />
        <Route path='/all' element={<AllCours />} />
        <Route path='/add' element={<AddCours />} /> 
        <Route path='/edit/:id' element={<EditCours />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
