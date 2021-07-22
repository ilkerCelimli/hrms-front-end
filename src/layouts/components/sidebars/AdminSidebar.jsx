import React from 'react'
import SideNav, {NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import './sidebar.css'
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import {FaHome,} from 'react-icons/fa'
import {FiMonitor} from 'react-icons/fi'
import AdminPanel from '../../../pages/AdminPanel'
import {
    Router,
    Link,Route
  } from "react-router-dom";
 

export default function AdminSidebar() {
  
  
    return ( 
     
        <div>
            <SideNav  >
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
        
       
      
        <NavItem eventKey = {<Route path = '/adminpanel' component = {AdminPanel} />}>

        
           
            <NavIcon >
                <FiMonitor size = '2em'/>
            </NavIcon>
            <NavText >
            
        Admin Panel
                </NavText>
            </NavItem>
           
          
            
            
    </SideNav.Nav> 
            </SideNav>

          
           
          </div>
     
    )
}
