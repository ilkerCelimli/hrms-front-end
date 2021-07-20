import './App.css';

import AdminSidebar from './layouts/components/sidebars/AdminSidebar';
import EmployerSidebar from './layouts/components/sidebars/EmployerSidebar'
import JobSeekerSideBar from './layouts/components/sidebars/JobSeekerSideBar'
import Navbar from './layouts/components/navbars/Navbar'
import {useState} from 'react'
import { Container, Row , Col } from 'reactstrap';
export default function App() {

  /* {isRoles === "admin" ? <Admin /> : isRoles === "jobSeeker" ? <JobSeeker /> : <Employer />} */
  
  const [isRoles,setIsRoles] = useState(("visiter"))
  
  function roles(roles) {
    if(isRoles === 'jobseeker') {setIsRoles('jobseeker'); return <JobSeekerSideBar/>}
    else if (isRoles === 'admin') {setIsRoles('admin'); return <AdminSidebar/>}
    else if (isRoles === 'employer') {setIsRoles('employer'); return <EmployerSidebar/>}
    else {setIsRoles("visiter"); return null}
  }
  

  return ( 
    <div className="App">

  <Container>
    <Row id = 'container-row'>
      <Col sm="3">
        
       {roles('visiter')}
   
       
      </Col>
      
      <Col>
        <Navbar/>
      </Col>

    
    </Row>
  </Container>
    </div> 
  );
}

