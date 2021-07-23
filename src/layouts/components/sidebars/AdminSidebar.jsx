import React, { useState } from 'react'
import SideNav, {NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import './sidebar.css'
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import {FaGoodreadsG, FaHome, FaWindows} from 'react-icons/fa'
import {FiMonitor} from 'react-icons/fi'
import { createBrowserHistory } from "history";
import ReactDOM from "react-dom";
import {
  Link} from 'react-router-dom'
export default function AdminSidebar() {
  
    const [selected,setSelected] = useState();

     let  onSelect = (selected) => {
       setSelected({ selected: selected });
    };
   let pageTitle = {
        'home': 'Home',
        'adminpanel': ['Admin Panel'],
      
    };

   const  navigate = (pathname) => () => {
        setSelected({ selected: pathname });
    };

    return ( 
     <div>
            <SideNav onSelect = {onSelect} >
            <SideNav.Toggle  />  
    <SideNav.Nav defaultSelected="home">

      
        <NavItem eventKey="home">
            <NavIcon>
            <FaHome size = '2em'/>  
            </NavIcon>
            <NavText title = 'home'>
                home
               
            </NavText>
          
        </NavItem>
        
       
      
        <NavItem eventKey = 'adminpanel' onClick = {navigate("/adminpanel")}  >

     
           
            <NavIcon >
                <FiMonitor size = '2em'/>
            </NavIcon>
            <NavText title = 'adminpanel' >
            Admin Panel
                </NavText>
            </NavItem>
           
          
            
            
    </SideNav.Nav> 
            </SideNav>

          
           
          </div>
          
     
    )
}