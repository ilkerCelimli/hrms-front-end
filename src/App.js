import './App.css';

import AdminSidebar from './layouts/components/sidebars/AdminSidebar';
import Navbar from './layouts/components/navbars/Navbar'
import LoginPage from './pages/LoginPage';
import { Container } from 'reactstrap';
function App() {
  return (
    <div className="App">

    <Container className="themed-container"> <Navbar/> </Container>
    <Container className = 'themed-container' fluid = 'sm'><AdminSidebar/> </Container>
    </div> 
  );
}

export default App;
