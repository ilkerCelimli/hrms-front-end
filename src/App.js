import './App.css';

import AdminSidebar from './layouts/components/sidebars/AdminSidebar';
import EmployerSidebar from './layouts/components/sidebars/EmployerSidebar'
import JobSeekerSideBar from './layouts/components/sidebars/JobSeekerSideBar'
import Navbar from './layouts/components/navbars/Navbar'
import {useState} from 'react'
import { Container, Row , Col } from 'reactstrap';
import { Route, Switch,Router } from 'react-router-dom';
import AdminPanel from './pages/AdminPanel';



  /* {isRoles === "admin" ? <Admin /> : isRoles === "jobSeeker" ? <JobSeeker /> : <Employer />} */
  
  export default function App() {
    const [role, setRole] = useState("visiter")
  
    return ( 

      
      <div className="App">
        <Container>
          <Row id = 'container-row'>
            <Col sm="3">
              {role === "admin" ? <AdminSidebar/> : role === "jobSeeker" ? <JobSeekerSideBar /> : role === "employer" ? <EmployerSidebar /> : null}
            </Col>
         
            <Col>
              <Navbar/>
            </Col>
          <AdminSidebar/>
          </Row>
        </Container>
      </div> 

     
    );
  } 


