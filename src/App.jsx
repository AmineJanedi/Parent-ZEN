import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Dashboard/Header'
import Sidebar from './components/Dashboard/Sidebar'
import Home from './components/Dashboard/Home'
import SuperAdminProduits from'./components/SuperAdminProduits'
import AjouterProduit from './components/AjouterProduit';
import Allergies from'./components/Allergies'
import Commandes from'./components/Commandes'
import DemandeBuvette from'./components/DemandeBuvette'
import ModifierProduit from'./components/ModifierProduit'
function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    
    <Router>
    <div className='grid-container'>
      <Header OpenSidebar={OpenSidebar} />
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SuperAdminProduits" element={<SuperAdminProduits />} />
        <Route path="/Allergies" element={<Allergies />} />
        <Route path="/Commandes" element={<Commandes />} />
        <Route path="/DemandeBuvette" element={<DemandeBuvette />} />
        <Route path="/AjouterProduit" element={<AjouterProduit />} />
        <Route path="/ModifierProduit" element={<ModifierProduit />} />




        

      </Routes>
      
    </div>
  </Router>
  )
}

export default App