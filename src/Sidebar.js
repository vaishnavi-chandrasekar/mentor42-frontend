import React from 'react'
import {Link} from 'react-router-dom'

function Sidebar() {
    return (
        <div>
            <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">


                <a class="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                    <div class="sidebar-brand-icon rotate-n-15">
                    <i class="fad fa-sparkles"></i>
                    </div>
                    <div class="sidebar-brand-text mx-3"> DESIGNATE <sup></sup></div>
                </a>


                <hr class="sidebar-divider my-0" />

                {/* <li class="nav-item">
                    <Link to={"/Home"} class="nav-link" >
                    <i class="fas fa-home"></i>

                        <span>Home</span></Link> */}




                <li class="nav-item active">
                    <Link class="nav-link" to="/">
                        <i class="fas fa-fw fa-tachometer-alt"></i>
                        <span>Dashboard</span></Link>
                </li>







                    {/* <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                        <div class="bg-white py-2 collapse-inner rounded">
                            <h6 class="collapse-header">Custom Components:</h6>
                            <a class="collapse-item" href="buttons.html">Buttons</a>
                            <a class="collapse-item" href="cards.html">Cards</a>
                        </div>
                    </div>
                </li> */}

                {/* <li class="nav-item">
                    <a class="nav-link collapsed" href="#" data-target="#collapsePages"
                        aria-expanded="true" aria-controls="collapsePages">
                       <i class="fad fa-file-certificate"></i>
                        <span>Add Student</span>
                    </a> */}



                   {/* <li class="nav-item">
                    <Link to={"/Pendinglist"} class="nav-link collapsed" href="#" data-target="#collapseUtilities"
                        aria-expanded="true" aria-controls="collapseUtilities">
                    <i class="fas fa-chalkboard-teacher"></i>
                        <span>Pending List</span>
                    </Link> 
                    <div id="collapseUtilities" class="collapse" aria-labelledby="headingUtilities"
                        data-parent="#accordionSidebar">
                        <div class="bg-white py-2 collapse-inner rounded">
                            <h6 class="collapse-header">Custom Utilities:</h6>
                            <a class="collapse-item" href="utilities-color.html">Colors</a>
                            <a class="collapse-item" href="utilities-border.html">Borders</a>
                            <a class="collapse-item" href="utilities-animation.html">Animations</a>
                            <a class="collapse-item" href="utilities-other.html">Other</a>
                        </div>
                    </div>
                </li>  */}






                    {/* <div id="collapsePages" class="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
                        <div class="bg-white py-2 collapse-inner rounded">
                            <h6 class="collapse-header">Login Screens:</h6>
                            <a class="collapse-item" href="login.html">Login</a>
                            <a class="collapse-item" href="register.html">Register</a>
                            <a class="collapse-item" href="forgot-password.html">Forgot Password</a>
                            <div class="collapse-divider"></div>
                            <h6 class="collapse-header">Other Pages:</h6>
                            <a class="collapse-item" href="404.html">404 Page</a>
                            <a class="collapse-item" href="blank.html">Blank Page</a>
                        </div>
                    </div>
                </li> */}


                <li class="nav-item">
                <Link to={"/assign"}  class="nav-link">
                <i class="fas fa-tasks"></i>
                        <span>Assign</span></Link>
                </li>


                {/* <li class="nav-item">
                    <Link to={""} class="nav-link" >
                        <i class="fas fa-fw fa-table"></i>
                        <span>Recent List</span></Link>
                </li> */}







            </ul>

        </div>
    )
}

export default Sidebar