import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Dashboard/Header'
import Sidebar from './components/Dashboard/Sidebar'
import Home from './components/Dashboard/Home'
import SuperAdminProduits from'./components/Produits/SuperAdminProduits'
import AjouterProduit from './components/Produits/AjouterProduit';
import Commandes from'./components/Commande/Commandes'
import DemandeBuvette from'./components/Demande_Buvette/DemandeBuvette'
import ModifierProduit from'./components/Produits/ModifierProduit'
import ListeAllergies from './components/Allergie/ListeAllergie';
import AjouterAllergie from './components/Allergie/AjouterAllergie';
import ModifierAllergie from './components/Allergie/ModifierAllergie';
import DemandeProduit from './components/Demandes/DemandeProduit';
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
        <Route path="/Commandes" element={<Commandes />} />
        <Route path="/DemandeBuvette" element={<DemandeBuvette />} />
        <Route path="/AjouterProduit" element={<AjouterProduit />} />
        <Route path="/ModifierProduit/:ID" element={<ModifierProduit />} />
        <Route path="/ListeAllergies" element={<ListeAllergies />} />
        <Route path="/AjouterAllergie" element={<AjouterAllergie />} />
        <Route path="/ModifierAllergie/:ID" element={<ModifierAllergie />} />
        <Route path="/DemandeProduit" element={<DemandeProduit />} />




        

      </Routes>
      
    </div>
  </Router>
  )
}

export default App