import React, { useEffect, useState } from 'react'
import SideNav, {NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import './sidebar.css'

import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import {FaGoodreadsG, FaHome, FaWindows} from 'react-icons/fa'
import {FiMonitor} from 'react-icons/fi'
import { createBrowserHistory } from "history";
import ReactDOM from "react-dom";
import {
  Link, useHistory} from 'react-router-dom'
export default function AdminSidebar() {
  
    const history = useHistory()

    const routeChange = () => {

        let path = '/adminpanel';
        history.push(path)
    }
    
    return ( 
     <div>

            <SideNav >
            <SideNav.Toggle  />  
    <SideNav.Nav defaultSelected="home">

      
        <NavItem eventKey="home">
            <NavIcon>
            <Link to ='/'><FaHome size = '2em'/>  </Link>
            </NavIcon>
            <NavText title = 'home'>
                <Link to ='/'>Anasayfa</Link>
               
            </NavText>
          
        </NavItem>
        
       
      
        <NavItem eventKey = 'adminpanel'>
     
           
            <NavIcon >
                
                <Link to = '/adminpanel'><FiMonitor size = '2em'/></Link>
            </NavIcon>
            <NavText title = 'adminpanel' >
           <Link to = '/adminpanel'>Admin Paneli</Link>
                </NavText>
            </NavItem>
           
          
            
            
    </SideNav.Nav> 
            </SideNav>

          
           
          </div>
          
     
    )
}