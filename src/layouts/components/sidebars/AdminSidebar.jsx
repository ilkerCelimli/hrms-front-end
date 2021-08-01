import React from "react";
import SideNav, { NavItem, NavIcon, NavText } from "@trendmicro/react-sidenav";
import "./sidebar.css";

import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import {  FaHome  } from "react-icons/fa";
import { FiMonitor } from "react-icons/fi";
import { Link } from "react-router-dom";
export default function AdminSidebar() {



  return (
    <div>
      <SideNav>
        <SideNav.Toggle />
        <SideNav.Nav defaultSelected="home">
          <NavItem eventKey="home">
            <NavIcon>
              <Link to="/">
                <FaHome size="2em"  />
              </Link>
            </NavIcon>
            <NavText title="home">
              <Link to="/" style = {{textDecoration:"none"}}>Anasayfa</Link>
            </NavText>
          </NavItem>

          <NavItem eventKey="adminpanel">
            <NavIcon>
              <Link to="/adminpanel">
                <FiMonitor size="2em" />
              </Link>
            </NavIcon>
            <NavText title="adminpanel">
              <Link to="/adminpanel" style = {{textDecoration :"none"}}>Admin Paneli</Link>
            </NavText>
          </NavItem>
        </SideNav.Nav>
      </SideNav>
    </div>
  );
}
