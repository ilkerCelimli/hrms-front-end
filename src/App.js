import './App.css';

import AdminSidebar from './layouts/components/sidebars/AdminSidebar';
import EmployerSidebar from './layouts/components/sidebars/EmployerSidebar'
import JobSeekerSideBar from './layouts/components/sidebars/JobSeekerSideBar'
import Navbar from './layouts/components/navbars/Navbar'
import {useState} from 'react'
import { Container, Row , Col } from 'reactstrap';
import { Route, Switch,BrowserRouter as Router } from 'react-router-dom';
import AdminPanel from './pages/AdminPanel';
import AddJobAdvert from './pages/AddJobAdvert';



  /* {isRoles === "admin" ? <Admin /> : isRoles === "jobSeeker" ? <JobSeeker /> : <Employer />} */
  
  export default function App() {
    const [role, setRole] = useState("visiter")
  
    return ( 

      
      <div className="App">
        <Router>
        <Container>
          <Row id = 'container-row'>
            <Col sm="3">
              {role === "admin" ? <AdminSidebar/> : role === "jobSeeker" ? <JobSeekerSideBar /> : role === "employer" ? <EmployerSidebar /> : null}
            </Col>
         
            <Col>
              <Navbar/>
            </Col>
          <AddJobAdvert/>
          </Row>
        </Container>

        <Switch>
          <Route path = '/#'/>
          <Route exact = {true} path = '/adminpanel' component = {AdminPanel}/>
        </Switch>
        </Router>
      </div> 

     
    );
  } 