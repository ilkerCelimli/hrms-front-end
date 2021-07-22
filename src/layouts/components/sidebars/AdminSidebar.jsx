import React from 'react'
import SideNav, {NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import './sidebar.css'
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import {FaHome} from 'react-icons/fa'
import {FiMonitor} from 'react-icons/fi'
import AdminPanel from '../../../pages/AdminPanel'
import {
    Router,
    Link,Route,Switch,NavLink
  } from "react-router-dom";
 
  const routes = [{
      path : '/home',
      exact : true,
      sidebar: () => <AdminSidebar/>,
      main: () => <AdminSidebar/>
  },{
      path : '/adminpanel',
      exact: true,
      sidebar: () => <AdminPanel/>,
      main : () => <AdminPanel/>
  }
]
export default function AdminSidebar() {

  
    return ( 
     <div>
            <SideNav  >
            <SideNav.Toggle  />  
    <SideNav.Nav defaultSelected="home">

      
        <NavItem eventKey="home" key = 'home'>
            <NavIcon>
            <FaHome size = '2em'/>  
            </NavIcon>
            <NavText>
                home
               
            </NavText>
          
        </NavItem>
        
       
      
        <NavItem key = 'adminpanel' eventKey = 'adminpanel' >

        
           
            <NavIcon >
                <FiMonitor size = '2em'/>
            </NavIcon>
            <NavText >
            
            Admin 
                </NavText>
            </NavItem>
           
          
            
            
    </SideNav.Nav> 
            </SideNav>

          
           
          </div>
          
     
    )
}
