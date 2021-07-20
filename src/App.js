import './App.css';

import AdminSidebar from './layouts/components/sidebars/AdminSidebar';
import EmployerSidebar from './layouts/components/sidebars/EmployerSidebar'
import JobSeekerSideBar from './layouts/components/sidebars/JobSeekerSideBar'
import Navbar from './layouts/components/navbars/Navbar'
import {useState} from 'react'
import { Container, Row , Col } from 'reactstrap';
export default function App() {

  let employer,jobSeeker,Admin,visiter
  const [isRoles=[employer,jobSeeker,Admin],setIsRoles] = useState(visiter)
  
  function roles (){

    if(isRoles == Admin) return  <AdminSidebar/>

    else if(isRoles==employer) return <EmployerSidebar/>

    else if(isRoles == jobSeeker) return  <JobSeekerSideBar/>

    else return null;


  }
  return ( 
    <div className="App">

  <Container>
    <Row id = 'container-row'>
      <Col sm="3">
        
        {roles()}
      </Col>
      
      <Col>
        <Navbar/>
      </Col>

    
    </Row>
  </Container>
    </div> 
  );
}

