import React from "react";
import SideNav, { NavItem, NavIcon, NavText } from "@trendmicro/react-sidenav";
import "./sidebar.css";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import { FaHome } from "react-icons/fa";
import { FiFolder, FiFilePlus } from "react-icons/fi";
export default function AdminSidebar() {
  return (
    <div>
      <SideNav className="sidebar">
        <SideNav.Toggle />
        <SideNav.Nav defaultSelected="home">
          <NavItem eventKey="home">
            <NavIcon>
              <FaHome size="2em" />
            </NavIcon>
            <NavText>Home</NavText>
          </NavItem>
          <NavItem eventKey="addAdvert">
            <NavIcon>
              <FiFolder size="2em" />
            </NavIcon>
            <NavText>İlan Ekle</NavText>
          </NavItem>

          <NavItem>
            <NavText>İlanlarım</NavText>
            <NavIcon>
              {" "}
              <FiFilePlus />{" "}
            </NavIcon>
          </NavItem>
        </SideNav.Nav>
      </SideNav>
    </div>
  );
}
