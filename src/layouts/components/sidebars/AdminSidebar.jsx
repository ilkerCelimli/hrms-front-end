import React from 'react'
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import './sidebar.css'
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import {FaHome,} from 'react-icons/fa'
import {FiMonitor} from 'react-icons/fi'
export default function AdminSidebar() {
    return (
        <div className = 'sidebar'>
            
            <SideNav>
            <SideNav.Toggle  />
    <SideNav.Nav defaultSelected="home">
        <NavItem eventKey="home">
            <NavIcon>
            <FaHome size = '2em'/>  
            </NavIcon>
            <NavText>
                Home
            </NavText>
        </NavItem>
        <NavItem eventKey="Adminpanel">
            <NavIcon>
                <FiMonitor size = '2em'/>
            </NavIcon>
            <NavText>
                Admin Panel
               
            </NavText>
           
            
        </NavItem>
    </SideNav.Nav>
            </SideNav>
        </div>
    )
}
