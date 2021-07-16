import './App.css';

import AdminSidebar from './layouts/components/sidebars/AdminSidebar';
import Navbar from './layouts/components/navbars/Navbar'
import { Col, Container, Row } from 'reactstrap';
import './layouts/components/sidebars/sidebar.css'
function App() {
  return (
    <div className="App">

        <Container>
          <Row>
          <Navbar/>
            <Col>
            <AdminSidebar/>
         
            </Col>
          </Row>
        </Container>
    

    </div>
  );
}

export default App;
