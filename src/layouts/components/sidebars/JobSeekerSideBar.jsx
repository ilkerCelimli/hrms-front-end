import React from "react";
import SideNav, { NavItem, NavIcon, NavText } from "@trendmicro/react-sidenav";
import "./sidebar.css";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import { FaHome } from "react-icons/fa";
import { ImPencil } from "react-icons/im";
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

          <NavItem>
            <NavText>Başvurular</NavText>
            <NavIcon>
              {" "}
              <ImPencil />{" "}
            </NavIcon>
          </NavItem>
        </SideNav.Nav>
      </SideNav>
    </div>
  );
}
