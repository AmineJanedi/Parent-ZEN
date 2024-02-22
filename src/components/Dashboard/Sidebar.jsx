import React from 'react'
import 
{BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill}
 from 'react-icons/bs'
 import { NavLink } from 'react-router-dom';

function Sidebar({openSidebarToggle, OpenSidebar}) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
            <i class="fa-solid fa-person-breastfeeding" style={{fontSize:'36px'}}></i> Parent-Zen
            </div>
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>

        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                <a href="./">
                    <BsGrid1X2Fill className='icon'/> Dashboard
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="../ListeAllergies">
                    <BsFillArchiveFill className='icon'/> Allergies
                </a>
            </li>
            <li  className='sidebar-list-item'> 
           <a href="../SuperAdminProduits">
    <BsFillGrid3X3GapFill className='icon'/> Produits
</a></li>

            <li className='sidebar-list-item'>
                <a href="./DemandeBuvette">
                    <BsPeopleFill className='icon'/> Demande Buvette
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="./Commandes">
                    <BsListCheck className='icon'/> Commandes
                </a>
            </li>
            
           
        </ul>
    </aside>
  )
}

export default Sidebar