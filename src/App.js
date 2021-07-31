import './App.css';

import AdminSidebar from './layouts/components/sidebars/AdminSidebar';
import EmployerSidebar from './layouts/components/sidebars/EmployerSidebar'
import JobSeekerSideBar from './layouts/components/sidebars/JobSeekerSideBar'
import Navbar from './layouts/components/navbars/Navbar'
import {useState} from 'react'
import { Container, Row , Col } from 'reactstrap';
import { Route, Switch,BrowserRouter as Router } from 'react-router-dom';
import AdminPanel from './pages/AdminPanel';
import JobSeekerRegisterForm from './layouts/components/forms/JobSeekerForm/JobSeekerRegisterForm'
import EmployerRegisterForm from './layouts/components/forms/EmployerForm/EmployerRegisterForm';
import AddJobAdvert from './layouts/components/forms/EmployerForm/AddJobAdvertForm';


  /* {isRoles === "admin" ? <Admin /> : isRoles === "jobSeeker" ? <JobSeeker /> : <Employer />} */
  
  export default function App() {
    const [role, setRole] = useState("ADMIN")
  
    return ( 

      
      <div className="App">
        <Router>
        <Container>
          <Row id = 'container-row'>
            <Col sm="3">
              {role === "ADMIN" ? <AdminSidebar/> : role === "jobSeeker" ? <JobSeekerSideBar /> : role === "employer" ? <EmployerSidebar /> : null}
            </Col>
         
            <Col>
              <Navbar/>
            </Col>
        
          </Row>
        </Container>

        <Switch>
          <Route path = '/#'/>
          <Route exact = {true} path = '/adminpanel' component = {AdminPanel}/>
        </Switch>

        <Switch>
          <Route exact path = '/employerRegister' component = {EmployerRegisterForm}/>
          <Route exact path = '/jobseekerRegister' component = {JobSeekerRegisterForm}/>
        </Switch>
        </Router>
      </div> 

     
    );
  } 