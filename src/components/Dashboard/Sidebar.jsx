import React from 'react'
import 
{BsCart3, BsGrid1X2Fill, BsFillGrid3X3GapFill, BsPeopleFill, BsListCheck, BsMenuButtonWideFill, BsFillGearFill}
 from 'react-icons/bs'
 import { NavLink } from 'react-router-dom';

function Sidebar({openSidebarToggle, OpenSidebar}) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
            <i class="fa-solid fa-person-breastfeeding" style={{fontSize:'46px',marginTop:30}}></i> Parent-Zen
            </div>
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>

        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                <a href="./">
                    <BsGrid1X2Fill className='icon' /> Dashboard
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="../ListeAllergies">
                <i className="fa-solid fa-book-medical" style={{fontSize: '22px'}} /> Allergies
                </a>
            </li>
            <li  className='sidebar-list-item'> 
           <a href="../SuperAdminProduits">
    <BsFillGrid3X3GapFill className='icon'/> Produits
</a></li>

            <li className='sidebar-list-item'>
                <a href="./DemandeBuvette">
                <i className="fa-solid fa-store" style={{fontSize: '21px'}} /> Demande Buvette
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="./Commandes">
                    <BsListCheck className='icon'/> Commandes
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="./login">
                <i className="fa-solid fa-angles-left" style={{fontSize: '20px'}} /> Déconnecter
                </a>
            </li>
           
        </ul>
    </aside>
  )
}

export default Sidebar