import logo from './logo.svg';
import './App.css';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import Dashboard from './Dashboard';
import Assign from './Assign';
import Home from './Home';
import Edit from './Edit';
import Delete from './Delete'
//import AddMentor from './AddMentor';



import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
   <div id="wrapper">
      <Sidebar></Sidebar>
      <div id="content-wrapper" class="d-flex flex-column">
        <div id="content">
          <Topbar></Topbar>
          <div class="container-fluid">
            
            
              <Routes>
                  <Route path="/" element={<Dashboard />}></Route>
                  <Route path="/Assign" element={<Assign />}></Route> 
                 <Route path="/Edit/:id" element={<Edit />}></Route> 
                 <Route path="/Home" element={<Home />}></Route>     
                  <Route path="/Delete/:id" element={<Delete />}></Route>
                 <Route path="/Addmentor/:id" element={<Assign/>}></Route>       
      

              </Routes> 
            
          </div>
        </div>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
