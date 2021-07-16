import './App.css';

import AdminSidebar from './layouts/components/sidebars/AdminSidebar';
import Navbar from './layouts/components/navbars/Navbar'
import { Col, Container, Row } from 'reactstrap';
function App() {
  return (
    <div className="App">

        <Container>

        <Row xs = '9'> 
          <Col xs = '9'>
             <Navbar/>
             
          </Col>

          <Col xs = '2'><AdminSidebar/></Col>

         
        </Row>

        </Container>
    </div>
  );
}

export default App;
