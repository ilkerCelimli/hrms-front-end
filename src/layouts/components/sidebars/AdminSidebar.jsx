import React, {useEffect} from 'react'
import SideNav, {NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import './sidebar.css'
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import {FaHome,} from 'react-icons/fa'
import {FiMonitor} from 'react-icons/fi'
import { Route,} from "react-router";
import Adminpanel from '../../../pages/Adminpanel.Jsx';
export default function AdminSidebar() {


    return ( 

      
        <div>
        <React.Fragment>
            <SideNav >
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
        
       
    
        
     
        <NavItem eventKey="Adminpanel"  >

            <Route path = '/adminpanel' component ={Adminpanel}/>
            <NavIcon >
                <FiMonitor size = '2em'/>
            </NavIcon>
            <NavText >
                Admin panel
            </NavText>
            </NavItem>
            
    </SideNav.Nav>
            </SideNav>

            <main>
                <Route path = '/adminpanel' component = {Adminpanel}/>
            </main>
            </React.Fragment>
        </div>
    )
}
